import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Exit} from '../virtual-map/exit'
import {Shelf} from '../virtual-map/shelf'
import {Exits_data} from '../virtual-map/Exits_data'
import { ShelfsService } from '../../services/shelfs.service';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {
  @ViewChild('canvas', {static:true})
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  
  disabledName: boolean = true;
  disabled: boolean = true;

  mainButtonVisible:boolean = false;
  editButtonVisible:boolean = true;

  editedShelfs:any;

  newShelf = {
    name:null,
    height:null,
    width:null,
    x:null,
    y:null,
    action:''
  }

  constructor(private shelfsServise : ShelfsService) { }

  ngOnInit(): void {
    this.getOriginalMap();
  }

  drawExits():void{
    const data = new Exits_data(this.ctx);
    const exits = data.getExits()

    exits.forEach(element => {
      const extit = new Exit(element.ctx, element.color, element.xPosition, element.yPosition, element.width, element.height, element.imgSrc);
      extit.draw()
    });
  }

  drawShelfs():void{
      this.editedShelfs.forEach(element => {
        if (element.SLF_NAME == 'RHY768564'){
        }
        const shelfs = new Shelf(this.ctx, element.SLF_NAME,element.SLF_COLOR, element.SLF_CRD_X, element.SLF_CRD_Y, element.SLF_WIDTH, element.SLF_HEIGHT);
        shelfs.draw()
      });
  }

  create():void{
    this.disabledName = false;
    this.disabled = false;

    this.displayEditButton()

    this.newShelf.action = 'create'
  }

  update():void{
    this.disabledName = false
    this.displayEditButton()

    this.newShelf.action = 'update'
  }

  cancel():void{
    this.disabledName = true
    this.disabled = true

    this.displayMainButton()


    this.newShelf.action = null
    this.newShelf.height = null
    this.newShelf.name = null
    this.newShelf.width = null 
    this.newShelf.x = null
    this.newShelf.y = null

    this.getOriginalMap();

  }

  delete():void{
    this.disabledName = false;
    this.disabled = true;

    this.displayMainButton()
  
    this.newShelf.action = 'delete'
  }

  save():void{
    this.displayMainButton()
    this.disabledName = true;
    this.disabled = true;
  }

  getValueFromInputs(e):any{
    return (e.target as HTMLInputElement).value;
  }

  onChange(e){
    if(this.newShelf.action == 'update'){
      this.ifNameExist();
    }
  }

  displayEditButton():void{
    this.mainButtonVisible = true;
    this.editButtonVisible = false;
  }

  displayMainButton():void{
    this.mainButtonVisible = false;
    this.editButtonVisible = true;
  }


  ifNameExist():void{
    var pattern = /^[A-Z]{3}[1-9]{6}/;

    if(pattern.test(this.newShelf.name)){

      this.editedShelfs.forEach(element => {

        if(element.SLF_NAME == this.newShelf.name){

          this.disabled = false

          if (this.newShelf.height > 30 && this.newShelf.height != null && this.newShelf.width > 70 && this.newShelf.width != null &&this.newShelf.x >= 0 && this.newShelf.y >= 0){

            if (this.checkShelfsPosition() == false){
              console.log("mapa bledna")
              console.log ( this.newShelf.height)
            }else {
              element.SLF_CRD_Y = parseInt(this.newShelf.y)
              element.SLF_CRD_X = parseInt(this.newShelf.x)
              element.SLF_HEIGHT = parseInt(this.newShelf.height)
              element.SLF_WIDTH = parseInt(this.newShelf.width)
              this.redrawMap()
              console.log(this.editedShelfs)
            }
          }else{
            console.log("Minimalna wysokość wynośi 30, szerokość 70 || X oraz Y ma być większy od 0 i mniejszy od 1000")
          }

        }
      });
    }
    else{
      this.disabled = true
    }
  }

	redrawMap():void{
		this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.drawShelfs()
    this.drawExits()
	}

  checkShelfsPosition():boolean{
    let correct:boolean
    const data = new Exits_data(this.ctx);
    const exits = data.getExits()

    let editedArray = this.editedShelfs.filter(el => {
        return el.SLF_NAME != this.newShelf.name
    });
    
    editedArray.forEach(element =>{
      if ((parseInt(this.newShelf.x)  + parseInt(this.newShelf.width) < element.SLF_CRD_X)
      || (this.newShelf.x > parseInt(element.SLF_CRD_X )+ parseInt(element.SLF_WIDTH))
      || ( parseInt(this.newShelf.y) + parseInt(this.newShelf.height) < element.SLF_CRD_Y)
      || (this.newShelf.y > parseInt(element.SLF_CRD_Y + element.SLF_HEIGHT))){
    }
    else {
      correct = false
    }
    })
    
    exits.forEach(element =>{
      if ((parseInt(this.newShelf.x)  + parseInt(this.newShelf.width) < element.xPosition)
      || (this.newShelf.x > element.xPosition + element.width)
      || ( parseInt(this.newShelf.y) + parseInt(this.newShelf.height) < element.yPosition)
      || (this.newShelf.y > element.yPosition + element.height)){
    }
    else {
      correct = false
    }
    })


    return correct
  }

  getCoordinates(e){
    if (this.newShelf.action == "update"){
      this.newShelf.x = e.layerX
      this.newShelf.y = e.layerY
      this.ifNameExist()
    }
  }

  getOriginalMap():void{
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawExits()
    this.shelfsServise.getShelfs().subscribe((data:any [])=> {
      this.editedShelfs = data.values;
       this.editedShelfs.forEach(element => {
         const shelfs = new Shelf(this.ctx, element.SLF_NAME, element.SLF_COLOR, element.SLF_CRD_X, element.SLF_CRD_Y, element.SLF_WIDTH, element.SLF_HEIGHT);
         shelfs.draw()
       });
 
     })

  }




}

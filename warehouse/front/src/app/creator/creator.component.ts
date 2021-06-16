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
  disabledSave:boolean = true;

  isButtonsVisible = false

  mainButtonVisible:boolean = false;
  editButtonVisible:boolean = true;
  originalColor:string;

  msgs = []
  hide() {
    this.msgs = [];
  }
  show(error:object){
    this.hide()
    this.msgs.push(error);
    setTimeout(this.hide, 3000);
  }


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
    //this.show({severity:'error', summary:'Wystąpił błąd', detail:'Mapa błędna'})
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
        const shelfs = new Shelf(this.ctx, element.SLF_NAME,element.SLF_COLOR, element.SLF_CRD_X, element.SLF_CRD_Y, element.SLF_WIDTH, element.SLF_HEIGHT);
        shelfs.draw()
      });
  }

  create():void{
    this.disabledName = false;
    this.isButtonsVisible = true;

    this.displayEditButton()

    this.newShelf.action = 'create'
    
    this.editedShelfs.push({
      SLF_COLOR: this.editedShelfs[this.editedShelfs.length - 1].SLF_COLOR,
      ID : this.editedShelfs[this.editedShelfs.length - 1].ID + 1,
      SLF_NAME: null,
      SLF_CRD_X : null,
      SLF_CRD_Y : null,
      SLF_HEIGHT: null,
      SLF_WIDTH: null
    })

  }

  update():void{
    this.disabledName = false
    this.isButtonsVisible = true;
    this.displayEditButton()

    this.newShelf.action = 'update'
  }

  cancel():void{
    this.disabledName = true
    this.disabled = true
    this.isButtonsVisible = false

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
    this.isButtonsVisible = true;

    this.displayEditButton()
  
    this.newShelf.action = 'delete'
  }

  save():void{
    console.log(this.disabledSave)
    if(!this.disabledSave){
      this.displayMainButton()
      this.disabledName = true;
      this.disabled = true; 
      this.isButtonsVisible = false
  
      if (this.newShelf.action == "update"){
        this.editedShelfs.forEach(element => {
          const shelf:Object = {
            SLF_CRD_X : element.SLF_CRD_X,
            SLF_CRD_Y : element.SLF_CRD_Y,
            SLF_NAME :  element.SLF_NAME,
            SLF_HEIGHT : element.SLF_HEIGHT,
            SLF_WIDTH : element.SLF_WIDTH
          }
          this.shelfsServise.updateShelf(shelf).subscribe(
            error => console.log(error)
        )})
      }else if (this.newShelf.action == "create"){
          const shelf:Object = {
            SLF_CRD_X : this.editedShelfs[this.editedShelfs.length - 1].SLF_CRD_X,
            SLF_CRD_Y : this.editedShelfs[this.editedShelfs.length - 1].SLF_CRD_Y,
            SLF_NAME :  this.editedShelfs[this.editedShelfs.length - 1].SLF_NAME,
            SLF_COLOR :  this.editedShelfs[this.editedShelfs.length - 1].SLF_COLOR,
            SLF_HEIGHT : this.editedShelfs[this.editedShelfs.length - 1].SLF_HEIGHT,
            SLF_WIDTH : this.editedShelfs[this.editedShelfs.length - 1].SLF_WIDTH
          }
          this.shelfsServise.addShelf(shelf).subscribe(error => console.log(error));
      }else if (this.newShelf.action == 'delete'){
        console.log(this.newShelf.name)
        if(this.newShelf.name == null){
          this.show({severity:'error', summary:'Wystąpił błąd', detail:'Niepoprawna nazwa'})
          console.log("Takiego regału nie istnieje")
        }else{
          
          this.shelfsServise.deleteShelf(this.newShelf.name).subscribe(error => {
          })

          setTimeout( a=> this.getOriginalMap(), 500)
        }
      }
        this.newShelf.action = null
        this.newShelf.height = null
        this.newShelf.name = null
        this.newShelf.width = null 
        this.newShelf.x = null
        this.newShelf.y = null
    }

  }

  getValueFromInputs(e):any{
    return (e.target as HTMLInputElement).value;
  }

  onChange(e){
    if(this.newShelf.action == 'update'){
      this.ifNameExist();
    }else if (this.newShelf.action == 'create'){
      this.createNewShelf()
    }else if(this.newShelf.action == 'delete'){
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


  createNewShelf():void{
    var pattern = /^[A-Z]{3}[1-9]{6}/;

    if(pattern.test(this.newShelf.name)){

      let correctName:boolean;
      this.disabled = false;

      let editedArray = this.editedShelfs.filter(el => {
        return el.ID != this.editedShelfs[this.editedShelfs.length - 1].ID
      });


      editedArray.forEach(element => {

        if(element.SLF_NAME == this.newShelf.name){
          correctName = false
        }
      });

      if(correctName == false){
        console.log("taka nazwa już istnieje")
        this.show({severity:'error', summary:'Wystąpił błąd', detail:'Nazwa już istnieje'})
        this.disabledSave = true
      }else{
        if (this.newShelf.height > 30 && this.newShelf.height != null && this.newShelf.width > 70 && this.newShelf.width != null &&this.newShelf.x >= 0 && this.newShelf.y >= 0){
          this.editedShelfs[this.editedShelfs.length - 1].SLF_NAME = this.newShelf.name
          this.editedShelfs[this.editedShelfs.length - 1].SLF_CRD_Y = parseInt(this.newShelf.y)
          this.editedShelfs[this.editedShelfs.length - 1].SLF_CRD_X = parseInt(this.newShelf.x)
          this.editedShelfs[this.editedShelfs.length - 1].SLF_HEIGHT = parseInt(this.newShelf.height)
          this.editedShelfs[this.editedShelfs.length - 1].SLF_WIDTH = parseInt(this.newShelf.width)

          if (this.checkShelfsPosition() == false){
            console.log("mapa bledna")
            this.show({severity:'error', summary:'Wystąpił błąd', detail:'Mapa błędna'})
            this.disabledSave = true
          }else {
            console.log("super")
            this.redrawMap()
            this.disabledSave = false
          }
        }else{
          console.log("Minimalna wysokość wynośi 30, szerokość 70 || X oraz Y ma być większy od 0 i mniejszy od 1000")
          this.disabledSave = true
          this.showError()
        }
      }


    }
  }

  ifNameExist():void{
    var pattern = /^[A-Z]{3}[1-9]{6}$/;

    if(pattern.test(this.newShelf.name)){

      this.editedShelfs.forEach(element => {

        if(element.SLF_NAME == this.newShelf.name && this.newShelf.action == "update"){

          this.disabled = false

          if (this.newShelf.height > 30 && this.newShelf.height != null && this.newShelf.width > 70 && this.newShelf.width != null &&this.newShelf.x >= 0 && this.newShelf.y >= 0){

            if (this.checkShelfsPosition() == false){
              console.log("mapa bledna")
              this.disabledSave = true
              this.show({severity:'error', summary:'Wystąpił błąd', detail:'Mapa błędna'})
            }else {
              this.disabledSave = false
              element.SLF_CRD_Y = parseInt(this.newShelf.y)
              element.SLF_CRD_X = parseInt(this.newShelf.x)
              element.SLF_HEIGHT = parseInt(this.newShelf.height)
              element.SLF_WIDTH = parseInt(this.newShelf.width)
              this.redrawMap()
            }
          }else{
            console.log("Minimalna wysokość wynośi 30, szerokość 70 || X oraz Y ma być większy od 0 i mniejszy od 1000")
            this.disabledSave = true
            this.showError()
        
          }

        }else if(element.SLF_NAME == this.newShelf.name && this.newShelf.action == "delete"){
          element.SLF_COLOR = "#dc3545"
          this.redrawMap()
          this.disabledSave = false
        }
        else{
          element.SLF_COLOR = this.originalColor
          this.redrawMap()
        }
      });
    }
    else if (!pattern.test(this.newShelf.name)){
      this.disabled = true
      this.disabledSave = true

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
        this.hide()
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
        this.hide()
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
    }else if(this.newShelf.action == "create") {
      this.newShelf.x = e.layerX
      this.newShelf.y = e.layerY
      this.createNewShelf()
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
         this.originalColor = element.SLF_COLOR
         shelfs.draw()
       });
 
     })

  }

  showError():void{
    if(this.newShelf.width< 30 && this.newShelf.height != null){
      this.show({severity:'error', summary:'Wystąpił błąd', detail:'Minimalna szerokość 31'})
    }else if (this.newShelf.height< 71){
      this.show({severity:'error', summary:'Wystąpił błąd', detail:'Minimalna długość 71'})
    }
    else if (this.newShelf.x >= 1){
      this.show({severity:'error', summary:'Wystąpił błąd', detail:'X nie może być mniejszy 1'})
    }
    else if (this.newShelf.y >= 1){
      this.show({severity:'error', summary:'Wystąpił błąd', detail:'Y nie może być mniejszy 1'})
    }else{
      this.show({severity:'error', summary:'Wystąpił błąd', detail:'Minimalna szerokość 31'})
      console.log(this.msgs)
    }
     
   }

}



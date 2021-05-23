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

  shelfs:any;

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
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawExits()

    this.shelfsServise.getShelfs().subscribe((data:any [])=> {
     this.shelfs = data.values;
      this.shelfs.forEach(element => {
        const shelfs = new Shelf(this.ctx, element.SLF_NAME, element.SLF_COLOR, element.SLF_CRD_X, element.SLF_CRD_Y, element.SLF_WIDTH, element.SLF_HEIGHT);
        shelfs.draw()
      });
    })
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
      this.shelfs.forEach(element => {
        if (element.SLF_NAME == 'RHY768564'){
          console.log(element.SLF_NAME)
        }
        const shelfs = new Shelf(this.ctx, element.SLF_NAME,element.SLF_COLOR, element.SLF_CRD_X, element.SLF_CRD_Y, element.SLF_WIDTH, element.SLF_HEIGHT);
        shelfs.draw()
				shelfs.name(element.SLF_NAME)
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

    this.redrawMap()
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
      this.shelfs.forEach(element => {
        if(element.SLF_NAME == this.newShelf.name){
          this.disabled = false
					this.newShelf.width = element.SLF_WIDTH
					this.newShelf.height = element.SLF_HEIGHT
          if (this.newShelf.height !=null && this.newShelf.width != null, this.newShelf.x > 0, this.newShelf.y > 0){
            element.SLF_CRD_Y = this.newShelf.y
            element.SLF_CRD_X = this.newShelf.x
						element.SLF_HEIGHT = this.newShelf.height
						element.SLF_WIDTH = this.newShelf.width
						console.log(this.newShelf.y)

						this.redrawMap()
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



}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Exit} from '../virtual-map/exit'
import {Shelf} from '../virtual-map/shelf'
import {Exits_data} from '../virtual-map/Exits_data'
import { ShelfsService } from '../../services/shelfs.service';

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
  name:string;

  constructor(private shelfsServise : ShelfsService) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawExits()
    this.drawShelfs()
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
    let shelfs ;
    this.shelfsServise.getShelfs().subscribe((data:any [])=> {
      shelfs = data.values;
      shelfs.forEach(element => {
        const shelfs = new Shelf(this.ctx, element.SLF_COLOR, element.SLF_CRD_X, element.SLF_CRD_Y, element.SLF_WIDTH, element.SLF_HEIGHT, element.SLF_NAME);
        shelfs.draw()
      });
    })
  }

  create():void{
    this.disabledName = false;
    console.log("aaa")
  }

  update():void{
    this.disabledName = false;
  }

  cancel():void{
    this.disabledName = true
    this.disabled = true
  }

  nameOnchange(e):void{
    this.name = e;
    var pattern = /^[A-Z]{3}[1-9]{6}/;
    if(pattern.test(this.name)){
      this.disabled = false
    }
    else{
      this.disabled = true
    }
  }

}

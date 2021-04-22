import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Exit} from './exit'
import {Shelf} from './shelf'
import {Exits_data} from './Exits_data'
import { ShelfsService } from '../../services/shelfs.service'
import { Params } from '@angular/router';

@Component({
  selector: 'app-virtual-map',
  templateUrl: './virtual-map.component.html',
  styleUrls: ['./virtual-map.component.scss']
})
export class VirtualMapComponent implements OnInit {

  @ViewChild('canvas', {static:true})
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  constructor(private shelfsServise : ShelfsService){

  }


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
        console.log(element.SLF_NAME)
      });
    })
  }

}

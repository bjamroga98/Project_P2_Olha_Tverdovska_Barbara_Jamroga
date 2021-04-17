import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Exit} from './exit'
import {Shelf} from './shelf'
import {FakeData} from './fakeData'

@Component({
  selector: 'app-virtual-map',
  templateUrl: './virtual-map.component.html',
  styleUrls: ['./virtual-map.component.scss']
})
export class VirtualMapComponent implements OnInit {

  @ViewChild('canvas', {static:true})
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawExits()
    this.drawShelfs()
  }

  drawExits():void{
    const data = new FakeData(this.ctx);
    const exits = data.getExits()

    exits.forEach(element => {
      const extit = new Exit(element.ctx, element.color, element.xPosition, element.yPosition, element.width, element.height, element.imgSrc);
      extit.draw()
    });
  }

  drawShelfs():void{
    
    const data = new FakeData(this.ctx);
    const shelfs = data.getShelfs()

    shelfs.forEach(element => {
      const shelfs = new Shelf(element.ctx, element.color, element.xPosition, element.yPosition, element.width, element.height, element.name);
      shelfs.draw()
    });

  }

}

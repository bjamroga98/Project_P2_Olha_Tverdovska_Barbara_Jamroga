import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Exit} from './exit'

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

    const exit1 = new Exit(this.ctx,"green",0,(this.ctx.canvas.height/2-75),60,150);
    exit1.draw()

    const exit2 = new Exit(this.ctx,"green",this.ctx.canvas.width - 60,(this.ctx.canvas.height/2-75),60,150);
    exit2.draw()
  }
  animate(): void {

  }

  draw(x: number, y: number, z: number) {
    this.ctx.fillRect(z * x, z * y, z, z);
  }

}

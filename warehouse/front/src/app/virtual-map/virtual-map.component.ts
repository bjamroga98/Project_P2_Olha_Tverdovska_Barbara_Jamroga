import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {Exit} from './exit'
import {Shelf} from './shelf'
import {Exits_data} from './Exits_data'
import {ProductLocation} from './productLocation'
import { ShelfsService } from '../../services/shelfs.service';

@Component({
  selector: 'app-virtual-map',
  templateUrl: './virtual-map.component.html',
  styleUrls: ['./virtual-map.component.scss']
})
export class VirtualMapComponent implements OnInit {

  @ViewChild('canvas', {static:true})
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  code = '';
  errorMessage = '';

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
      });
    })
  }

  
  productCodeChange(e) {
    this.code = e;
    var pattern = /^[0-9]{8}?$/;
    if(pattern.test(this.code)){
      let shelf
      this.shelfsServise.getShelfsWithProductCode(this.code).subscribe((data:any [])=>{
        shelf = data.values;
        console.log(shelf)
        shelf.forEach(element => {
          var currentShelf = new ProductLocation(this.ctx,"#7E44C2", element.SLF_CRD_X, element.SLF_CRD_Y, element.SLF_WIDTH,element.SLF_HEIGHT,element.SLF_NAME)
          currentShelf.draw();
        });
        
      })
      this.errorMessage = " "
      
    }
    else{
      console.log("kod jest zakrotki")
      this.errorMessage = "Wprowadź poprawny kod"
      this.drawShelfs()
    }
  }

  

}

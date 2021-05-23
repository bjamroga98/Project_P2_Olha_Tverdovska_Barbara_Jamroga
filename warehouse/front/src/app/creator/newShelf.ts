export class NewShelf{
    name:string;height:number;width:number;x:number;y:number
    
}

//(ngModelChange)="Onchange($event)"


    // console.log(e.target)
    // this.name = e;
    // var pattern = /^[A-Z]{3}[1-9]{6}/;
    // if(pattern.test(this.name)){
    //   this.shelfs.forEach(element => {
    //     if(element.SLF_NAME == this.name){
    //       this.disabled = false
    //       if(this.y > 0 && this.x > 0 && this.height > 0 && this.width > 0){
    //         element.SLF_CRD_X = this.x
    //         element.SLF_CRD_Y = this.y
    //       }
          
    //     }
    //   });
    // }
    // else{
    //   this.disabled = true
    // }


      // addCourdinate(e){
  //   console.log(e)
  //   this.x = e.layerX
  //   this.y = e.layerY
  //   if(this.disabled == false && this.disabledName == false){
  //     this.ctx.beginPath();
  //     this.ctx.rect(this.x, this.y, 150, 100);
  //     this.ctx.stroke();
  //     console.log(this.shelfs)
  //   }
  // }
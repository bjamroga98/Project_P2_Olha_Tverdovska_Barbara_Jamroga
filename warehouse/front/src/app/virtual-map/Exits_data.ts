export class Exits_data{
    constructor (private ctx: CanvasRenderingContext2D){}
    getExits(){
        const exits = [
            {
              ctx: this.ctx,
              color: "#39D39F",
              xPosition: 0,
              yPosition : this.ctx.canvas.height/2-75,
              width: 60,
              height: 150,
              imgSrc:'../../assets/img/black.png'
            },
            {
              ctx: this.ctx,
              color: "#39D39F",
              xPosition: this.ctx.canvas.width - 60,
              yPosition : this.ctx.canvas.height/2-75,
              width: 60,
              height: 150,
              imgSrc:'../../assets/img/black.png'
            }
          ];
          return exits
    }
    
}
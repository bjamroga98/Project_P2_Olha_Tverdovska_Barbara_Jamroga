export class FakeData{
    constructor (private ctx: CanvasRenderingContext2D){}

    public getShelfs (){
        const shelfs = [
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 150,
              yPosition : 90,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 400,
              yPosition : 90,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 650,
              yPosition : 90,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 900,
              yPosition : 90,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 1150,
              yPosition : 90,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 285,
              yPosition : 200,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            ,
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 535,
              yPosition : 200,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 775,
              yPosition : 200,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 1025,
              yPosition : 200,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 285,
              yPosition : 435,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            ,
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 535,
              yPosition : 435,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 775,
              yPosition : 435,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 1025,
              yPosition : 435,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 150,
              yPosition : 545,
              width: 170,
              height: 60,
              name: "RHY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 400,
              yPosition : 545,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 650,
              yPosition : 545,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 900,
              yPosition : 545,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
            {
              ctx: this.ctx,
              color: "#C598F4",
              xPosition: 1150,
              yPosition : 545,
              width: 170,
              height: 60,
              name: "ATY768564"
            },
          ];
          return shelfs
    }

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
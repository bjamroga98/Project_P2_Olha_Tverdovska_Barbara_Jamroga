
export class Exit{

    constructor(private ctx: CanvasRenderingContext2D, private color:string, private x:number, private y:number, private width:number, private height:number, private imgSrc:string) {}

    public draw():void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y,this.width,this.height);
        this.drawImg(this.ctx, this.x,this.y)
    }


    public drawImg(ctx, x, y)
    {
      var exit_image = new Image();
      exit_image.src = '../../assets/img/door.png';
      exit_image.onload = function(){
        ctx.drawImage(exit_image, (x+5), (y+50), 50, 50);
      }
    }
    
}
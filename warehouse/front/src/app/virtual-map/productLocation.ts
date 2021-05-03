export class ProductLocation{
    constructor(private ctx: CanvasRenderingContext2D, private color:string, private x:number, private y:number, private width:number, private height:number, private shelfName:string){}

    public draw():void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y,this.width,this.height);
        this.name()
    }

    private name():void{
        this.ctx.fillStyle = 'white';
        this.ctx.font = "20px Arial";
        this.ctx.fillText(this.shelfName,this.x+35,this.y+this.height/2+8);
    }
    public draw2(x:number, y:number, width:number, height:number):void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x, y,width,height)
    }
}
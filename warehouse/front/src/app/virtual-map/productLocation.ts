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
        const x :number = +(this.x) + (this.width/2) 
        const y: number = + (this.y) + (this.height/2)
        this.ctx.fillText(this.shelfName,x,y);
    }
    public draw2(x:number, y:number, width:number, height:number):void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(x, y,width,height)
    }
}
export class Exit{

    constructor(private ctx: CanvasRenderingContext2D, private color:string, private x:number, private y:number, private width:number, private height:number) {}

    public draw():void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y,this.width,this.height);
        this.name()
    }

    private name():void{
        this.ctx.fillStyle = 'black';
        this.ctx.fillText("Text 2",120,130);
    }
}
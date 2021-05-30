export class Shelf{
    constructor(private ctx: CanvasRenderingContext2D, private shelfName:string, private color:string, private x:number, private y:number, private width:number, private height:number) {}

    public draw():void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y,this.width,this.height);
        this.name(this.shelfName)
    }

    public name(name:string):void{
        this.ctx.textAlign = "center"
        this.ctx.textBaseline = "middle"
        this.ctx.fillStyle = 'white';
        if (this.width < 140 ){

            this.ctx.font = (this.width / 7) +  "px Arial"; 
        }else{
            this.ctx.font = "20px Arial";
        }
        const x :number = +(this.x) + (this.width/2) 
        const y: number = + (this.y) + (this.height/2)
        this.ctx.fillText(name,x,y);
        
    }
}

export class Exit{

    constructor(private ctx: CanvasRenderingContext2D, private color:string, private x:number, private y:number, private width:number, private height:number, private imgSrc:string) {}

    public draw():void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y,this.width,this.height);
        this.drive()
    }


    public drive(){
        var img = new Image();
        img.src = this.imgSrc
        var ctx = this.ctx;
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        };
    }
    
}
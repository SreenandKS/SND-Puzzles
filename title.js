class Title{
    constructor(){
        this.title = createSprite(0,0,400,400);
        this.img = loadImage("Title3.png");
        this.i = 255;
    }

    display(){
        gamestate===3;
        form.hide();
        var pos = this.title.position;
        push();
        translate(pos.x,pos.y);
        if(this.title!==null){
            this.i -= 0.25;
        }
        imageMode(CENTER);
        this.title.addImage("title",this.img);
        tint(255,this.i);
        pop();
        form.show();
    }
}
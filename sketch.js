var form,color,gamestate,title,height,heightPer;

function preload(){
    b1 = loadImage("backImage.jpg");
    b2 = loadImage("age calculator.jpg");
    b3 = loadImage("answer 13.png");
    b4 = loadImage("Title3.png");
}

function setup(){
    createCanvas(650,650);
    heightPer = 0;
    form = new Form();
    gamestate = 0;
    r1 = Math.round(random(2,30));
    r2 = Math.round(random(1,18));
    r3 = Math.round(random(2,25));
    r4 = Math.round(random(1,23));
    title = new Title();
   
}

function draw(){
    background(b4);

    

    if(form.val1===8){
        heightPer = 72;
    }
    if(form.val1===9){
        heightPer = 75;
    }
    if(form.val1===10){
        heightPer = 78;
    }
    if(form.val1===11){
        heightPer = 81;
    }
    if(form.val1===12){
        heightPer = 84;
    }
    if(form.val1===13){
        heightPer = 88;
    }
    if(form.val1===14){
        heightPer = 92;
    }
    if(form.val1===15){
        heightPer = 95;
    }
    if(form.val1===16){
        heightPer = 98;
    }
    if(form.val1===17){
        heightPer = 99;
    }
    if(form.val1===18){
        heightPer = 100;
    }

    height = this.val2/heightPer;

    if(gamestate===1){
       
        background(b2);
    }
    
    if(gamestate===2){
        
        background(b3);
    }


    if(gamestate===3){
        background(b1);
    }

     
   

    ra1 = r1;
    ra2 = r2;
    ra3 = r3;
    ra4 = r4;
    // title.display();
    form.display();
    }
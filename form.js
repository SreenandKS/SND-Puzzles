class Form{
    constructor(){
        this.title = createElement('h2');
        this.mButton1 = createButton('Age Calculator');
        this.mButton2 = createButton('Answer 13!!!');
        this.mButton3 = createButton('Number Puzzle');
       
        this.color= "black";
        this.color1= "red";
       

    }
    display(){
        this.title.position(600,70);
        this.title.html("SND Puzzles");
        this.title.style('font-size', '40px');
        this.title.style('color', 'purple');

        this.mButton1.position(600,250);
        this.mButton1.style('width', '200px');
        this.mButton1.style('height', '40px');
        this.mButton1.style('background', 'lightpink');

        this.mButton2.position(450,425);
        this.mButton2.style('width', '200px');
        this.mButton2.style('height', '40px');
        this.mButton2.style('background', 'skyBlue');

        this.mButton3.position(750,425);
        this.mButton3.style('width', '200px');
        this.mButton3.style('height', '40px');
        this.mButton3.style('background', 'lightGreen');

       

       
        this.mButton1.mousePressed(()=>{
            
            gamestate = 1;

            this.next = createButton('Next');
            this.next.position(750,600);
            this.next.style('width', '200px');
            this.next.style('height', '40px');
            this.next.style('background', 'yellow');
    

            this.mButton1.hide();
            this.mButton2.hide();
            this.mButton3.hide();
           
            this.title.hide();

            this.m1opt1 = createElement('h2');
            this.m1opt1.position(500,300);
            this.m1opt1.html("First, pick a number between 1 and 9");
            this.m1opt1.style('color',this.color);


            this.next.mousePressed(()=>{
                this.m1opt1.hide();

                this.m1opt2 = createElement('h2');
                this.m1opt2.position(500,300);
                this.m1opt2.html("Multiply the number by 2");
                this.m1opt2.style('color',this.color);

                this.next.mousePressed(()=>{
                    this.m1opt2.hide();

                    this.m1opt3 = createElement('h2');
                    this.m1opt3.position(575,300);
                    this.m1opt3.html("Add 5 to the product");
                    this.m1opt3.style('color',this.color);

                    this.next.mousePressed(()=>{
                        this.m1opt3.hide();
    
                        this.m1opt4 = createElement('h2');
                        this.m1opt4.position(600,300);
                        this.m1opt4.html("Multiply by 50");
                        this.m1opt4.style('color',this.color);

                        this.next.mousePressed(()=>{
                            this.m1opt4.hide();
        
                            this.m1opt5 = createElement('h2');
                            this.m1opt5.position(450,300);
                            this.m1opt5.html("Add 1771 if your birthday is finished this year");
                            this.m1opt5.style('color',this.color);

                            this.next.mousePressed(()=>{
                                this.m1opt5.hide();
            
                                this.m1opt6 = createElement('h2');
                                this.m1opt6.position(430,300);
                                this.m1opt6.html("Add 1770 if your birthday is not finished this year");
                                this.m1opt6.style('color',this.color);

                                this.next.mousePressed(()=>{
                                    this.m1opt6.hide();
                
                                    this.m1opt7 = createElement('h2');
                                    this.m1opt7.position(400,300);
                                    this.m1opt7.html("Subtract your birth year from the sum(Example:2008)");
                                    this.m1opt7.style('color',this.color);

                                    this.next.mousePressed(()=>{
                                        this.m1opt7.hide();
                    
                                        this.m1opt8 = createElement('h2');
                                        this.m1opt8.position(500,300);
                                        this.m1opt8.html("The answer will be a three digit number");
                                        this.m1opt8.style('color',this.color);

                                        this.next.mousePressed(()=>{
                                            this.m1opt8.hide();
                        
                                            this.m1opt9 = createElement('h2');
                                            this.m1opt9.position(400,300);
                                            this.m1opt9.html("The first digit would be the first number you thought");
                                            this.m1opt9.style('color',this.color);

                                            this.next.mousePressed(()=>{
                                                this.m1opt9.hide();
                                                this.back = createButton('Back');
                                                this.back.position(750,600);
                                                this.back.style('width', '200px');
                                                this.back.style('height', '40px');
                                                this.back.style('background', 'red');
                                                this.next.hide();
                            
                                                this.m1opt10 = createElement('h2');
                                                this.m1opt10.position(500,300);
                                                this.m1opt10.html("And the rest would be your age");
                                                this.m1opt10.style('color',this.color);

                                                this.back.mousePressed(()=>{
                                                    gamestate = 0;
                                                    this.back.hide();
                                                    this.m1opt10.hide();
                                
                                                    this.mButton1.show();
                                                    this.mButton2.show();
                                                    this.mButton3.show();
                                                   
                                                    this.title.show();
                                                    
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })

                })
            })
        })

        this.mButton2.mousePressed(()=>{

            gamestate = 2;

            this.title.hide();
            this.mButton1.hide();
            this.mButton2.hide();
            this.mButton3.hide();
           

            this.next1 = createButton('Next');
            this.next1.position(750,600);
            this.next1.style('width', '200px');
            this.next1.style('height', '40px');
            this.next1.style('background', 'yellow');

            this.m2opt1 = createElement('h2');
            this.m2opt1.position(500,300);
            this.m2opt1.html("Pick a number between 1 and 10");
            this.m2opt1.style('color',this.color1);

            this.next1.mousePressed(()=>{
                this.m2opt1.hide();

                this.m2opt2 = createElement('h2');
                this.m2opt2.position(600,300);
                this.m2opt2.html("Multiply by 9");
                this.m2opt2.style('color',this.color1);

                this.next1.mousePressed(()=>{
                    this.m2opt2.hide();
    
                    this.m2opt3 = createElement('h2');
                    this.m2opt3.position(500,300);
                    this.m2opt3.html("Answer would be a 2 digit number");
                    this.m2opt3.style('color',this.color1);

                    this.next1.mousePressed(()=>{
                        this.m2opt3.hide();
        
                        this.m2opt4 = createElement('h2');
                        this.m2opt4.position(575,300);
                        this.m2opt4.html("Add the two digits");
                        this.m2opt4.style('color',this.color1);

                        this.next1.mousePressed(()=>{
                            this.m2opt4.hide();
            
                            this.m2opt5 = createElement('h2');
                            this.m2opt5.position(575,300);
                            this.m2opt5.html("Add 4 to the sum");
                            this.m2opt5.style('color',this.color1);

                            this.next1.mousePressed(()=>{
                                this.m2opt5.hide();
                                this.back = createButton('Back');
                                this.back.position(750,600);
                                this.back.style('width', '200px');
                                this.back.style('height', '40px');
                                this.back.style('background', 'red');
                                this.next1.hide();
                
                                this.m2opt6 = createElement('h2');
                                this.m2opt6.position(525,300);
                                this.m2opt6.html("Your answer would be 13");
                                this.m2opt6.style('color',this.color1);

                                this.back.mousePressed(()=>{
                                    gamestate = 0;
                                    this.back.hide();
                                    this.m2opt6.hide();
                
                                    this.mButton1.show();
                                    this.mButton2.show();
                                    this.mButton3.show();
                                   
                                    this.title.show();
                                    
                                })
                            })
                        })
                    })
                })
            })
    
        })

        this.mButton3.mousePressed(()=>{
            
            gamestate = 3;
            this.title.hide();
            this.mButton1.hide();
            this.mButton2.hide();
            this.mButton3.hide();
           

            this.next2 = createButton('Next');
            this.next2.position(750,600);
            this.next2.style('width', '200px');
            this.next2.style('height', '40px');
            this.next2.style('background', 'yellow');

            this.m3opt1 = createElement('h2');
            this.m3opt1.position(650,300);
            this.m3opt1.html("Pick any number");

            this.next2.mousePressed(()=>{
                this.m3opt1.hide();

                this.m3opt2 = createElement('h2');
                this.m3opt2.position(600,300);
                this.m3opt2.html("Add the number by " + r1 );

                this.next2.mousePressed(()=>{
                    this.m3opt2.hide();
    
                    this.m3opt3 = createElement('h2');
                    this.m3opt3.position(600,300);
                    this.m3opt3.html("Subtract the sum by " + r2 );

                    this.next2.mousePressed(()=>{
                        this.m3opt3.hide();
        
                        this.m3opt4 = createElement('h2');
                        this.m3opt4.position(650,300);
                        this.m3opt4.html("Add it by " + r3 );
                        
                        this.next2.mousePressed(()=>{
                            this.m3opt4.hide();
            
                            this.m3opt5 = createElement('h2');
                            this.m3opt5.position(675,300);
                            this.m3opt5.html("Subtract " + r4 );

                            this.next2.mousePressed(()=>{
                                this.m3opt5.hide();
                
                                this.m3opt6 = createElement('h2');
                                this.m3opt6.position(500,300);
                                this.m3opt6.html("Subtract the number you first thought" );

                                this.next2.mousePressed(()=>{
                                    this.m3opt6.hide();
                                    this.back = createButton('Back');
                                    this.back.position(750,600);
                                    this.back.style('width', '200px');
                                    this.back.style('height', '40px');
                                    this.back.style('background', 'red');
                                    this.next2.hide();

                                    this.r = r1-r2+r3-r4;

                                    this.m3opt7 = createElement('h2');
                                    this.m3opt7.position(650,300);
                                    this.m3opt7.html("Your answer is  " + this.r);

                                    this.back.mousePressed(()=>{
                                        r1 = Math.round(random(2,18));
                                        r2 = Math.round(random(5,22));
                                        r3 = Math.round(random(1,12));
                                         r4 = Math.round(random(3,25));
                                        gamestate = 0;
                                        this.back.hide();
                                        this.m3opt7.hide();
                    
                                        this.mButton1.show();
                                        this.mButton2.show();
                                        this.mButton3.show();
                                       
                                        this.title.show();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

       
    }
}

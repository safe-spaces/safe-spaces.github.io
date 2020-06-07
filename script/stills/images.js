
var currentImage = 60;

var turningKey = 0;

$(document).ready(function(){

    let classNames = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let imageNames = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];

    for(var i =2; i<18; i++){ // images not yet loaded   --  [which are : 2 to 17]
        $('.'+ classNames[i]).attr('src', '../safe-spaces.github.io/css/stills/photos/' + imageNames[i] + '.jpg');
    }   

    for(var i=0; i<20;i++){
        let WIDTH = '-'+ ($('.zero').width()/2) + 'px'
        $('.'+ classNames[i]).css('margin-left', WIDTH);
        console.log(WIDTH)
    }


    if($(window).width() > 600) {
        $('.left_button').click(function(){
            if(turningKey == 0){
                turningKey = 1;
    
                let holdingOne = '.' + classNames[(currentImage % 20)];
                let holdingTwo = '.' + classNames[((currentImage+1) % 20)];
        
                $(holdingTwo).animate({'left':'150%'}, 5);
        
                if($(window).width() > 600) {
                    $(holdingOne).animate({'left':'-150%'}, 3000);
                    $(holdingTwo).animate({'left':'50%'}, 3000);  
                    setTimeout(function(){turningKey = 0;}, 3000);  
                }else{
                    $(holdingOne).animate({'left':'-150%'}, 1000);
                    $(holdingTwo).animate({'left':'50%'}, 1000); 
                    setTimeout(function(){turningKey = 0;}, 1000);   
                }
                currentImage++;
            }
        });
        $('.right_button').click(function(){
            if(turningKey == 0){
                turningKey = 1;
    
                if(currentImage == 0){ // If curentImage < 0 then can form 'holdingOne' and 'honldingTwo' due to modulus
                    currentImage = 60;
                }
    
                let holdingOne = '.' + classNames[(currentImage % 20)];
                let holdingTwo = '.' + classNames[((currentImage-1) % 20)];
        
                $(holdingTwo).animate({'left':'-150%'}, 5);
        
                if($(window).width() > 600) {
                    $(holdingOne).animate({'left':'150%'}, 3000);
                    $(holdingTwo).animate({'left':'50%'}, 3000);
                    setTimeout(function(){turningKey = 0;}, 3000);
                }else{
                    $(holdingOne).animate({'left':'150%'}, 1000);
                    $(holdingTwo).animate({'left':'50%'}, 1000);
                    setTimeout(function(){turningKey = 0;}, 1000);
                }
                currentImage--;
            }
        });
    }else{

        $( document ).on( "swipeleft", function(){
            if(turningKey == 0){
                turningKey = 1;
    
                let holdingOne = '.' + classNames[(currentImage % 20)];
                let holdingTwo = '.' + classNames[((currentImage+1) % 20)];
        
                $(holdingTwo).animate({'left':'150%'}, 5);

                $(holdingOne).animate({'left':'-150%'}, 1000);
                $(holdingTwo).animate({'left':'50%'}, 1000); 
                setTimeout(function(){turningKey = 0;}, 1000);   

                currentImage++;
            }
        });


        $( document ).on( "swiperight", function(){

            if(turningKey == 0){
                turningKey = 1;
    
                if(currentImage == 0){ // If curentImage < 0 then can form 'holdingOne' and 'honldingTwo' due to modulus
                    currentImage = 60;
                }
    
                let holdingOne = '.' + classNames[(currentImage % 20)];
                let holdingTwo = '.' + classNames[((currentImage-1) % 20)];
        
                $(holdingTwo).animate({'left':'-150%'}, 5);
        
 
                    $(holdingOne).animate({'left':'150%'}, 1000);
                    $(holdingTwo).animate({'left':'50%'}, 1000);
                    setTimeout(function(){turningKey = 0;}, 1000);
                
                currentImage--;
            }
        });

    }


});




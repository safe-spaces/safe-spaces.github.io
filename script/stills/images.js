
var currentImage = 20;

$(document).ready(function(){

    let classNames = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let imageNames = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];

    for(var i =2; i<18; i++){ // images not yet loaded   --  [which are : 2 to 17]
        $('.'+ classNames[i]).attr('src', '../safe-spaces.github.io/css/stills/photos/' + imageNames[i] + '.jpg');
        console.log(classNames[i]+"  "+imageNames[i]);
    }   

    $('.left_button').click(function(){
        let holdingOne = '.' + classNames[(currentImage % 20)];
        let holdingTwo = '.' + classNames[((currentImage+1) % 20)];

        $(holdingTwo).animate({'left':'150%'}, 5);

        $(holdingOne).animate({'left':'-150%'}, 3000);
        $(holdingTwo).animate({'left':'50%'}, 3000);

        currentImage++;
    });
    $('.right_button').click(function(){
        let holdingOne = '.' + classNames[(currentImage % 20)];
        let holdingTwo = '.' + classNames[((currentImage-1) % 20)];

        $(holdingTwo).animate({'left':'-150%'}, 5);

        $(holdingOne).animate({'left':'150%'}, 3000);
        $(holdingTwo).animate({'left':'50%'}, 3000);

        currentImage--;

    });

});
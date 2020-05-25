
var door_type = ['closed.png','down.png','open.png'];
var i = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

$(document).ready(async function (){

    $('.door').on({
        'click': async function(){
            var x = event.clientX;
            var y = event.clientY;
            console.log(x,' by ', y);
    
            $('.click').css({'position':'absolute','left':(x+'px'),'top':(y+'px'), 'display':'block'});
    

            var source = './css/inside/'+ door_type[i];
            $('.door').attr('src',source);

            await sleep(300);

            var source = './css/inside/'+ door_type[i+1];
            $('.door').attr('src',source);
            
            await sleep(1000);
            var source = './css/inside/'+ door_type[i+2];
            $('.door').attr({'src':source}); 

            await sleep(200);
            $('.enter').css({'opacity':'0'}); 
            $('.click').css({'opacity':'0'}); 

        }
    });
});

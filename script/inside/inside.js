
var door_type = ['closed.png','down.png','open.png'];
var i = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

$(document).ready(async function (){

    $('.door').on({
        'click': async function(){

            var source = './css/inside/'+ door_type[i];
            $('.door').attr('src',source);

            await sleep(1000);

            var source = './css/inside/'+ door_type[i+1];
            $('.door').attr('src',source);
            
            await sleep(1000);
            var source = './css/inside/'+ door_type[i+2];
            $('.door').attr({'src':source});

        }
    });

});
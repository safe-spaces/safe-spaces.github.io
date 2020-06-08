
var door_type = ['closed.png','down.png','open.png'];
var i = 0;



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }




    $(window).on("load", async function() {
        console.log('finally')
        $('.door').on({
            'click': async function(){
    
                console.log('click')
                    var x = event.clientX;
                    var y = event.clientY;
                    console.log(x,' by ', y);
            
                    $('.click').css({'position':'absolute','left':(x+'px'),'top':(y+'px'), 'display':'block'});
        
                    await sleep(1000);
        
                    $("#closedDoor").css('display','none');
        
                    await sleep(1000);
        
                    $("#downDoor").css('display','none');
        
                    
        
        
                    await sleep(1000)
                    window.location.href="tent.html";
    
            }
        });
        

    });



$(window).on("load", async function() {

    $('.hq').click(function(){
        if($('.vid_doc').attr('src') == './css/film/small_mov.mp4'){

            $('.vid').get(0).pause(); 
            var currTime = $('.vid').get(0).currentTime;
            
            $('.vid_doc').attr('src', './css/film/big_mov.mp4');
            console.log('hq');

            $('.vid').get(0).load(); 
            $('.vid').get(0).currentTime = currTime; 
            $('.vid').get(0).play();  

        }
    });

    $('.lq').click(function(){
        if($('.vid_doc').attr('src') == './css/film/big_mov.mp4'){

            $('.vid').get(0).pause(); 
            var currTime = $('.vid').get(0).currentTime;
            $('.vid').get(0).pause(); 
            var currTime = $('.vid').get(0).currentTime; 
            $('.vid_doc').attr('src', './css/film/small_mov.mp4');
            console.log('lq');

            $('.vid').get(0).load(); 
            $('.vid').get(0).currentTime = currTime; 
            $('.vid').get(0).play(); 

        }
    });

});
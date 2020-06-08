// OFF Button
function returnToPage(){
    var name = '';
    $('#IMAGES').attr('src',name);
    $('#IMAGES').css({
        'display':'none'
    });
    $('.back_block').css('display','none');
    $('.rt_page').css('display','none');


};


let imageID = ['adrian','alex','aure','aman', 'beck', 'beth','cath','char',
                'chlo','ella','fin','gonz','har','hel','holly','immy','james','jess','lind','luke',
                'man','mass','mya','med','megan','molly','pop','rav','ros','soph','sky','theo','ruby','kit',
                'ellaa','gina','mil'
            ]

function loadImages(){
    var arrLength = imageID.length

    for( var i = 6 ; i < arrLength ; i++ ){
        imageSource = './thumbnails/' + imageID[i] + '.jpg';        
        $('#' + imageID[i]).attr('src', imageSource);

        console.log(imageSource)
    }
}


$(document).ready(function (){

    loadImages();

    let img = document.getElementById("IMAGES");

    var IMGheight;
    var IMGwidth;
    $('.photo').on({
        'click': function(){
            var name = './photos/'+$(this).attr('id')+'.jpg';

            $('#IMAGES').attr('src',name);
            $('#IMAGES').css({
                'height':'40%;', 'width':'auto',
                'top':'0%','left':'0%'}
            );

            IMGheight = $(this).height();
            IMGwidth = $(this).width();
            console.log(IMGheight +" x "+ IMGwidth);

        }
    });



  if($(window).width() > 600) {
        $('.image_wrap').animate({'top':'85%'}, 1000);

        img.addEventListener("load", function() {
                var window_height = window.innerHeight;
                var window_width = window.innerWidth;



                // console.log(IMGheight +" x "+ IMGwidth);
                
                if(IMGheight >= IMGwidth){ // if portrait
                    console.log("portrait");
                    var newHeight = 0.8*(window_height);
                    var newWidth = (newHeight/IMGheight)*IMGwidth;
                    var img_top = 0.5*(window_height - newHeight);

                    $('#IMAGES').css({
                        'width':(newWidth.toString()+"px"),'height':(newHeight.toString()+"px"),
                        'top':(img_top.toString()+"px"),'left':'50%', 'display':'block' }
                    );
                }else{ // if landscape
                    console.log("landscape");
                    var newWidth = 0.7*(window_width);
                    var newHeight = (newWidth/IMGwidth)*IMGheight;
                    var img_top = 0.5*(window_height - newHeight);


                    $('#IMAGES').css({
                        'width':(newWidth.toString()+"px"),'height':(newHeight.toString()+"px"),
                        'top':(img_top.toString()+"px"),'left':'50%', 'display':'block'}
                    );
                }

                var IMAGESwidth = img.offsetWidth;
                $('#IMAGES').css('margin-left', (-IMAGESwidth/2).toString()+'px');   
                $('.rt_page').css('display','block');
                $('.back_block').css('display','block');
        });
    }else{
        $('.image_wrap').animate({'top':'60%'}, 1000);
        img.addEventListener("load", function() {
                var window_height = window.innerHeight;
                var window_width = window.innerWidth;
                // console.log(IMGheight +" x "+ IMGwidth);
                
                if(IMGheight >= IMGwidth){ // if portrait
                    console.log("portrait");
                    var newHeight = 0.9*(window_height);
                    var newWidth = (newHeight/IMGheight)*IMGwidth;
                    var img_top = 0.5*(window_height - newHeight);

                    $('#IMAGES').css({
                        'width':(newWidth.toString()+"px"),'height':(newHeight.toString()+"px"),
                        'top':(img_top.toString()+"px"),'left':'50%', 'display':'block' }
                    );
                }else{ // if landscape
                    console.log("landscape");
                    var newWidth = 0.9*(window_width);
                    var newHeight = (newWidth/IMGwidth)*IMGheight;
                    var img_top = 0.5*(window_height - newHeight);


                    $('#IMAGES').css({
                        'width':(newWidth.toString()+"px"),'height':(newHeight.toString()+"px"),
                        'top':(img_top.toString()+"px"),'left':'50%', 'display':'block'}
                    );
                }

                var IMAGESwidth = img.offsetWidth;
                $('#IMAGES').css('margin-left', (-IMAGESwidth/2).toString()+'px');   
                $('.rt_page').css('display','block');
                $('.back_block').css('display','block');
        });

    }

});

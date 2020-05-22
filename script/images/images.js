$('.photo').on({
    'click': function(){
        var name = './photos/'+$(this).attr('id')+'.jpg';
        $('#IMAGES').attr('src',name);
    }
});

let img = document.getElementById("IMAGES");
img.addEventListener("load", function() {
    
        var img_height = this.offsetHeight;
        var window_height = window.innerHeight;
        var img_width = img.offsetWidth;
        var window_width = window.innerWidth;

        if(img_height >= img_width){ // if portrait
            var newHeight = 0.9*(window_height);
            var newWidth = (newHeight/img_height)*img_width;
            var img_left = 0.5*(window_width - newWidth);
            var img_top = 0.5*(window_height - newHeight);

            $('#IMAGES').css({
                'width':(newWidth.toString()+"px"),'height':(newHeight.toString()+"px"),
                 'top':(img_top.toString()+"px"),'left':'50%', 'display':'block' }
             );
        }else{ // if landscape
            var newWidth = 0.9*(window_width);
            var newHeight = (newWidth/img_width)*img_height;
            var img_left = 0.5*(window_width - newWidth);
            var img_top = 0.5*(window_height - newHeight);


            $('#IMAGES').css({
                'width':(newWidth.toString()+"px"),'height':(newHeight.toString()+"px"),
                 'top':(img_top.toString()+"px"),'left':'50%', 'display':'block'}
             );
        }

        var img_width = img.offsetWidth;
        $('#IMAGES').css('margin-left', (-img_width/2).toString()+'px');   
        $('.rt_page').css('display','block');
        $('.back_block').css('display','block');
});


function returnToPage(){
    var name = '';
    $('#IMAGES').attr('src',name);
    $('#IMAGES').css({
        'display':'none'
    });
    $('.back_block').css('display','none');
    $('.rt_page').css('display','none');


};

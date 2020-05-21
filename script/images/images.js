$('.photo').on({
    'click': function(){
        
        var name = './photos/'+$(this).attr('id')+'.jpg';
        $('#IMAGES').attr('src',name);

        $('#IMAGES').css({
            'width':'auto','height':'80%',
            'top':'10%','left':'0%', }
        );

        $('.image_container').css('margin-left',(-($(".image_container").height()/2)).toString()+"px");


    }
});

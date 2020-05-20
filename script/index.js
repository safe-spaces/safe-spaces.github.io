

$(document).ready(function (){
    $(".safe_title").css('margin-left', (-($(".safe_title").width()/2)).toString()+"px");
    $(".space_title").css('margin-left', (-($(".space_title").width()/2)).toString()+"px");

    var speed = 15; // in seconds

    $("#inside0").animate({'left':'130%'},5);
    $("#images0").animate({'left':'170%'},5);
    $("#read0").animate({'left':'100%'},5);

    $("#inside1").animate({'left':'130%'},5);
    $("#images1").animate({'left':'170%'},5);
    $("#read1").animate({'left':'100%'},5);


    $("#inside0").animate({'left':'-70%'},speed*1000, 'linear');
    $("#images0").animate({'left':'-30%'},speed*1000, 'linear');
    $("#read0").animate({'left':'-100%'},speed*1000, 'linear');
    $("#inside1").delay(7500).animate({'left':'-70%'},speed*1000, 'linear');
    $("#images1").delay(7500).animate({'left':'-30%'},speed*1000, 'linear');
    $("#read1").delay(7500).animate({'left':'-100%'},speed*1000, 'linear');

    for(var i=0;i<1000;i++){
        $("#inside0").animate({'left':'130%'},5);
        $("#images0").animate({'left':'170%'},5);
        $("#read0").animate({'left':'100%'},5);

        $("#inside1").animate({'left':'130%'},5);
        $("#images1").animate({'left':'170%'},5);
        $("#read1").animate({'left':'100%'},5);


        $("#inside0").animate({'left':'-70%'},speed*1000, 'linear');
        $("#images0").animate({'left':'-30%'},speed*1000, 'linear');
        $("#read0").animate({'left':'-100%'},speed*1000, 'linear');
        $("#inside1").animate({'left':'-70%'},speed*1000, 'linear');
        $("#images1").animate({'left':'-30%'},speed*1000, 'linear');
        $("#read1").animate({'left':'-100%'},speed*1000, 'linear');


    }

    
});
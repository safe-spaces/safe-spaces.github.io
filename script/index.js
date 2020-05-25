window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload();
    }
  });
$(document).ready(function (){
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


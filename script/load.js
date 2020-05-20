window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload();
    }
});

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#hi';
        window.location.reload();
    }
  }



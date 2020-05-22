window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#hi';
        window.location.reload();
    }
  }



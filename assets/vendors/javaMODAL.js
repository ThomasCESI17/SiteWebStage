function visible(number) {
    var idmodal = "modal" + number ;
    var modal = document.getElementById(idmodal);
    modal.style.display = "block";
  };
  
  function invisible(number) {
    var idmodal = "modal" + number ;
    var modal = document.getElementById(idmodal);
    modal.style.display = "none";
  };
  
  window.onclick = function(event) {
    var modal = document.getElementsByClassName("modal");
    for (i=0 ; i < modal.length ; i++) {
      
      if (modal[i].style.display == "block") {
        var modalact = document.getElementById(modal[i].getAttribute("id"));
      }
    }
    if (event.target == modalact) {
      modalact.style.display = "none";
    }
  };
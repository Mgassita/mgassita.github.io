window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "30px";
      document.getElementById("header").style.textAlign = "left";

    } else {
      document.getElementById("header").style.fontSize = "90px";
      document.getElementById("header").style.textAlign = "center";

    }
  }
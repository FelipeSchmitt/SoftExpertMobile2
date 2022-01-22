function request_presentation(){
    const form = document.getElementById("form").style
    if(form.visibility=="hidden"){
        form.visibility="visible"
    }
    else{
        form.visibility="hidden"
    }
}

function slider1(){
    const left_slide = document.getElementById("left_slide")
    const right_slide = document.getElementById("right_slide")
    left_slide.src="../images/0-desafio2@2x.png"
    right_slide.src="../images/0-desafio2@2x.png"
}

(function() {
 
    // store the slider in a local variable
    var $window = $(window),
        flexslider = { vars:{} };
   
    // tiny helper function to add breakpoints
    function getGridSize() {
      return (window.innerWidth < 600) ? 2 :
             (window.innerWidth < 900) ? 3 : 4;
    }
   
    $(function() {
      SyntaxHighlighter.all();
    });
   
    $window.load(function() {
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: getGridSize(), // use function to pull in initial value
        maxItems: getGridSize() // use function to pull in initial value
      });
    });
   
    // check grid size on resize event
    $window.resize(function() {
      var gridSize = getGridSize();
   
      flexslider.vars.minItems = gridSize;
      flexslider.vars.maxItems = gridSize;
    });
  }());
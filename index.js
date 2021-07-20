
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
    	auto:true,
    	speed:1000,
        autoWidth:true,
        loop:true,
        pauseOnHover:true,
        pause:3000,
        keyPress:true,
        enableTouch:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  
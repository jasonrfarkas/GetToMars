$(document).ready(function(){
	$(window).resize(function() {
  	//resize just happened, pixels changed
  		console.log($(window).height()); // New height
  		console.log($(window).width()); // New width);
	});

})

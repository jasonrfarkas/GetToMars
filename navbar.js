$(document).ready(function(){
	$(".navDiv").css({
		"position": "fixed",
		"width":"100%",
		"margin": "0px auto",
		"textAlign": "center",
		"background-color": "rgba(200,200,200,.7)", 
		"top":"0px",
		"left": "0px",
		"padding": "0"
	});
	$(".navb").css({
		"width":"100%",
		"margin": "0 auto",
		"textAlign": "center",
		"padding": "0"
	});
	$(".navul").css({
		"display": "inline-block", 
		"font-size" : "20px",
		"padding": "0"
	});
	$(".navli").css({
		"background-color": "rgba(200,200,200,.9)", 
		"list-style-type": "none",
		"margin": "0 15",
		"float" :"left",
		"padding": "0"
	});
	$(".navli").hover( function (){
							$(this).animate({
							    opacity: [ 0.25, "linear" ]
							}, 300 );
						}
					);
	$(".navli").mouseout( function (){
							$(this).animate({
							    opacity: [ 1, "linear" ]
							}, 300 );
						 });

	$(".spacer").css({
		"margin-bottom": "70px"
	});



	$(window).resize(function() {
  	//resize just happened, pixels changed
  		console.log($(window).height()); // New height
  		console.log($(window).width()); // New width);
	});

})

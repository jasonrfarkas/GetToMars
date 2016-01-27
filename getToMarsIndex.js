$(document).ready(function(){

/*
	Fill in stuff here. 
*/

	var startNum = 1;
	var totalImages= 3;
	var tid = setInterval(changeImage, 5000); 
	//$(".fillerImage").toggle();
	for(i=2;i<totalImages+1;i++){
		var name = ".fillerImage_" +i;
		$(name).hide();	
		$(name).zIndex(i);
	}


	function changeImage(){
		var currentImageClass = ".fillerImage_" + startNum;
		var nextNum= startNum+1;
		if(nextNum > totalImages){
			nextNum = 1;
			startNum=0;
		}
		var nextImageClass = ".fillerImage_" + nextNum;

		$(currentImageClass).fadeOut(600);
		$(nextImageClass).delay(400).fadeIn(800);

		startNum= startNum+1;
		
		//$(".fillerImage_1").toggle();

	}
})


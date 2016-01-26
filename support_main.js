$(document).ready(function(){
	var imageURL = $(".lightbox-link").data("img-url"); //Store the url into var
	var image = $("#lightbox-image");
	image.attr('src', imageURL);
	center($("#modal"));
	$(".lightbox-outer" ).click(function(){
		$(".lightbox-outer").hide();
		$("#modal").hide();
	});

	function center(modal){
		var page_height = $(window).height();
		var modal_height = modal.height();
		var modal_height_offset = (page_height - modal_height) / 2;
		modal.css("margin-top", modal_height_offset);
	}

})
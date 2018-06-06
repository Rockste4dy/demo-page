$( window ).resize(function(){
	autosize();
});
$(function () {
	autosize();
});

function autosize(){
	var height = $('.groupLeft').css('height');
	height = parseFloat(height);
	height /= 2;
	height -= 2.5;
	height = height.toString() + 'px';

	$('.flexColumn .group').css('height', height);

	var height = $('.p2 .groupLeft').css('height');
	height = parseFloat(height);
	height /= 2;
	height -= 2.5;
	height = height.toString() + 'px';

	$('.p2 .flexColumn .group').css('height', height);
}

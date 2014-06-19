$(document).ready(function(){
	$('.ryu').mouseenter(function() {
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function(){
		playHadouken();
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
				{'left': '1000px'},
				500,
				function(){
					$(this).hide();
					$(this).css('left', '434px');
				}
			);
	})

	.mouseup(function(){
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

	$(document).keydown(function(event){
		if ( event.which == 88 ){
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
		} else {
			$('.ryu-still').show();
		}
	})

	.keyup(function(event){
		$('.ryu-cool').hide();
		$('.ryu-still').show();
		event.preventDefault();
	})

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};



});
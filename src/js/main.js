(function(){

	$('#iphone_home_button').on('click', function(){
		//Home button click callhandler
		handleHomeClick();
	});

	$('.app-box').on('click', function(){
		//Home button click callhandler
		handleAppClick(this);
	});

}());

function handleHomeClick (){
	alert("Hello");
};

function handleAppClick (element){
	showApp(element);
}

function showApp (app) {

alert("func");

	var position = $(this).offset();

		var xPosSTR = position.left+'px';
		var yPosSTR = position.top+'px';

		$('.app-detail').css({
			'transform-origin':         '' + xPosSTR + ' ' + yPosSTR + ' 0px',
			'-webkit-transform-origin': '' + xPosSTR + ' ' + yPosSTR + ' 0px'
		});

		$('.app-detail').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){  
		    $(".app-detail").addClass("app-reveal-prop"); 
		 });

}
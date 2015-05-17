var activeApp;

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
	hideActiveApp(activeApp);
	hideHomeButton();
};

function handleAppClick (element){
	showApp(element);
	showHomeButton();
}

function showApp (app) {

	$(".app-detail").addClass("app-reveal-prop"); 

}

function hideActiveApp (activeApp) {

	$(".app-detail").removeClass("app-reveal-prop");

}

function showHomeButton () {
	$(".section-iPhone-Homebutton").addClass("iPhone-Homebutton-reveal-prop");
}

function hideHomeButton () {
	$(".section-iPhone-Homebutton").removeClass("iPhone-Homebutton-reveal-prop");
}
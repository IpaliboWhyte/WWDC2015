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
};

function handleAppClick (element){
	showApp(element);
}

function showApp (app) {

	$(".app-detail").addClass("app-reveal-prop"); 

}

function hideActiveApp (activeApp) {

	$(".app-detail").removeClass("app-reveal-prop");

}
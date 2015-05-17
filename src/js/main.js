var activeApp;

(function(){

	generateApps(20);

	$('#iphone_home_button').on('click', function(){
		//Home button click callhandler
		handleHomeClick();
	});

	$('.app-box').on('click', function(){
		//Home button click callhandler
		handleAppClick(this);
	});

	$('.app-container').bind('touchstart',handleTouchStart);

}());

/*--------------- Handlers Start ---------------- */

function handleHomeClick () {
	hideActiveApp(activeApp);
	hideHomeButton();
	showAppNav();
};

function handleAppClick (element){
	hideAppNav();
	showApp(element);
	showHomeButton();
}

function handleTouchStart (){
	alert('Hello');
}


/*--------------- Handlers End ---------------- */

function hideAppNav () {
	$(".app-nav-container").removeClass("app-nav-reveal-prop"); 
}

function showAppNav () {
	$(".app-nav-container").addClass("app-nav-reveal-prop");
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

function generateApps (total) {

var screenCount = 0;

	for (var i = 0; i < total; i++) {

		switch(i%20) {

	    	case 0:
	    		screenCount++;
	    		screenCount = screenCount +" Screen"
	    		break;

    		default:
        		break;

		}
		$("<div class='app-box'><div class='app-box-name'>"+screenCount+"</div></div>").clone().appendTo('.app-container');
	};

}
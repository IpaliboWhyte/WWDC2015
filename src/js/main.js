var allUsers;
var currentPage = 0;
var maxPages = 0;
var activeApp;

(function(){

	//generateApps(20); // use this for testing 

	retrieveSource(function(users){

		allUsers = users;
		maxPages = Math.ceil(allUsers.length/20)-1;

		retrieveData(currentPage, function(users){

			populateVector(users);

		});

	});

	$('#iphone_home_button').on('click', function(){
		//Home button click callhandler
		handleHomeClick();
	});

	$('.app-nav-container a i').on('click', function(){
		handlePageNav($(this));
	});

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

function handlePageNav (shifter) {
	switchPages(shifter);
}


/*--------------- Handlers End ---------------- */


/*--------------- Display Functions Start ------------- */

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

/*--------------- Display Functions Ends ------------- */

function switchPages (shifter) {

	switch (shifter.attr('class')) {

		case "icon-right" :
			currentPage++;
			break;

		case "icon-left" :
			currentPage--;
			break;

	}

	if (currentPage > maxPages) {
		currentPage--;
	};

	if (currentPage < 0) {
		currentPage = 0;
	};

	retrieveData(currentPage, function(users){

		populateVector(users);

	});

}

function retrieveSource (callback) {

	$.getJSON("js/mockdata.json", function(json) {
	
		if (callback && typeof(callback) === "function") {

			callback(json.users);

		}

    });

}

function retrieveData (page, callback) {
	console.log("Pages is : " + page);
	var data = 0;

	data = allUsers.slice(20*page, 20*(page+1));

	if (callback && typeof(callback) === "function") {

  		callback(data);

	}

}

function populateVector (users) {

	$('.app-container').removeClass('app-container-reveal-prop');

	$('.app-container').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){ 

    	$('.app-container').empty();

    	for (var user in users) {
			$("<div class='app-box'><div class='app-box-name'>"+users[user].appName+"</div></div>").clone().appendTo('.app-container');
		}

		$('.app-container').addClass('app-container-reveal-prop');

		registerEvent();

	});

	
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

function registerEvent () {

	$('.app-box').on('click', function(){
		//Home button click callhandler
		handleAppClick(this);
	});

}
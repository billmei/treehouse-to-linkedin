function listBadges() {

}

function addLinkedInButton(course) {
	var $badgesList = $('#badges-list');

	var view = {
		course: course,
	};

	var template = '{{badge}} <img src="{{src}}" />';
	var html = Mustache.to_html(template, view);
	$badgesList.html(html);

}




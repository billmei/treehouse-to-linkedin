var view = {
	badge: "Lorem Ipsum",
	src: "http://www.example.com"
};

var template = '{{badge}} <img src="{{src}}" />';

var html = Mustache.to_html(template, view);

$('#badges-list').html(html);




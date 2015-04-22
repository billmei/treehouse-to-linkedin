function listBadges() {

}

function displayCourse(courseName, url) {
  var $badgesList = $('#badges-list');

  var view = {
    course: courseName,
    share_url : url
  };
  
  var template = '<a href="{{share_url}}" rel="nofollow">' +
                 '<span class="course-title">{{course}}</span>' +
                 '<img src="img/linkedin-add-to-profile.png" alt="Add To LinkedIn" class="btn-linkedin"/></a>';
  var html = Mustache.to_html(template, view);
  $badgesList.html(html);
}




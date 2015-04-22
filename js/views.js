function listBadges() {

}

function displayCourse(courseList) {
  var $badgesList = $('#badges-list');
  var $resultList = $('.result-list');

  var view = {
    courses: courseList
  };
  
  var template = '{{#courses}}' +
                 '<a href="{{share_url}}" rel="nofollow">' +
                 '<span class="course-title">{{title}}</span>' +
                 '<img src="img/linkedin-add-to-profile.png" alt="Add To LinkedIn" class="btn-linkedin"/></a>' +
                 '{{/courses}}';
  var html = Mustache.to_html(template, view);
  $badgesList.html(html);
  $resultList.slideDown();
}




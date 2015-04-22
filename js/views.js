function listBadges() {

}

// Hides the list of coureses currently displayed
function hideCourses() {
  var $resultList = $('.result-list');
  $resultList.slideUp();
}

// Displays and shows the provided list of courses
function displayCourses(courseList) {
  var $badgesList = $('#badges-list');
  var $resultList = $('.result-list');

  var view = {
    courses: courseList
  };
  
  var template = '{{#courses}}' +
                 '<li><a href="{{share_url}}" rel="nofollow">' +
                 '<img src="img/linkedin-add-to-profile.png" alt="Add To LinkedIn" class="btn-linkedin"/>' +
                 '<span class="course-title">{{title}}</span>' +
                 '</a></li>{{/courses}}';
  var html = Mustache.to_html(template, view);
  $badgesList.html(html);
  $resultList.slideDown();
}




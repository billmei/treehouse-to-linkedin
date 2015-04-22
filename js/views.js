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
  scrollIntoView($resultList);
}


// Start the loading spinner
function startLoadingSpinner() {
  $('.loading-spinner').addClass('loading-enabled');
  $('#search-username').addClass('loading-disabled');
}

// Stop the loading spinner
function stopLoadingSpinner() {
  $('.loading-spinner').removeClass('loading-enabled');
  $('#search-username').removeClass('loading-disabled');
}

// Scroll to the specified element
function scrollIntoView(el) {
  $('html,body').animate({
    scrollTop: el.offset().top
  }, 500);
}
$(document).ready(function() {
  $('#search-username').on('click', function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var treehouseURL = 'http://teamtreehouse.com/';

    $.ajax({
      url: treehouseURL + username + '.json',
      type: 'GET',
    }).done(function(data) {

      var points = data.points;
      var highEXPlangs = [];

      for (var language in points) {
        if (points[language] > 1000) {
          highEXPlangs.push(language);
        }
      }

      var badges = data.badges;
      var completedTracks = [];
      var availableTracks = {
        "Advanced Sass Concepts" : "Web Design",
        "Combine and Minify Assets" : "Front-End Web Development",
        "Password Resets and Testing" : "Rails Development",
        "Finishing the User Interface" : "Implementing Designs For iPhone",
        "Adding Push Notifications from Parse.com" : "Android Development",
        "Inheritance, Interfaces, and Exceptions" : "PHP Development",
        "Launching and Supporting a WordPress Plugin" : "Wordpress Development",
        "Video Marketing" : "Starting A Business",
        "Finding Good WordPress Plugins and Themes" : "Learn Wordpress",
        "Displaying Our Weather Data" : "iOS Development With Swift",
        "Gettin' CRUD-y With It" : "Learn Python",
        "Blocks Practice" : "Learn Ruby",
        "Efficiency!" : "Learn Java"
      };

      for (var j = 0; j < badges.length; j++) {
        if (badges[j].name in availableTracks) {
          completedTracks.push(availableTracks[badges[j].name]);
        }
      }

/*
web-design > Sass basics > Advanced Sass Concepts
front-end-web-development > Front End Performance Optimization > Combine and Minify Assets
rails-development > User Authentication with Rails > Password Resets and Testing
implementing-designs-for-iphone > Implementing Designs for iPhone > Finishing the User Interface
android-development > Implementing Designs for Android > Adding Push Notifications from Parse.com
php-development > Object-Oriented PHP Basics > Inheritance, Interfaces, and Exceptions
wordpress-development > How to Build a WordPress Plugin > Launching and Supporting a WordPress Plugin
starting-a-business > How to Market Your Business > Video Marketing
learn-wordpress > How to Build a WordPress Blog Without Coding > Finding Good WordPress Plugins and Themes
ios-development-with-swift > Build a Weather App with Swift > Displaying Our Weather Data
learn-python > Using Databases in Python > Gettin' CRUD-y With It
learn-ruby > Ruby Blocks > Blocks Practice
learn-java > Java Data Structures > Efficiency!

*/

    }).fail(function(data) {
      alertModal('User does not exist', 'Sorry! We coudn\'t find that username on Treehouse. Did your subscription expire, or did you spell the username correctly?');
    });

  });
});

function alertModal(title, body) {
  // Display error message to the user in a modal
  $('#alert-modal-title').html(title);
  $('#alert-modal-body').html(body);
  $('#alert-modal').modal('show');
}

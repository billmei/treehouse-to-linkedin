$(document).ready(function() {
  $('#search-username').on('click', function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var treehouseURL = 'http://teamtreehouse.com/';

    $.ajax({
      url: treehouseURL + username + '.json',
      type: 'GET',
    }).done(function(data) {

      var highEXPlangs = findHighEXPLangs(data.points);
      var completedTracks = findCompletedTracks(data.badges);

      if (completedTracks.length === 0 && highEXPlangs.length === 0) {
        // "It looks like you haven't completed any tracks yet. Want to add your work in progress badges instead?"
        // Let the user choose their badge
      } else if (completedTracks.length === 0 && highEXPlangs.length > 1) {
        // We have a many high EXP languages, but haven't completed a track yet.
        // Let the user choose their badge
      } else if (completedTracks.length === 0 && highEXPlangs.length === 1) {
        // We have one high EXP language, but haven't completed a track yet.

      } else if (completedTracks.length > 1) {
        // We've completed multiple tracks.
        // Let the user choose their badge.

      } else { // completedTracks.length === 1
        // We've completed one track.

      }

    }).fail(function(data) {
      alertModal('User does not exist', 'Sorry! We coudn\'t find that username on Treehouse. Did your subscription expire, or did you spell the username correctly?');
    });
  });
});

// Get all languages where the user has attained more than 1000 points
function findHighEXPLangs(points) {
  var highEXPlangs = [];

  for (var language in points) {
    if (points[language] > 1000 && language != 'total') {
      highEXPlangs.push(language);
    }
  }

  return highEXPlangs;
}

// Get all the tracks that the user has completed
function findCompletedTracks(badges) {
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

  return completedTracks;
}



function shareBadgeToLinkedIn(badge) {

}


function alertModal(title, body) {
  // Display error message to the user in a modal
  $('#alert-modal-title').html(title);
  $('#alert-modal-body').html(body);
  $('#alert-modal').modal('show');
}

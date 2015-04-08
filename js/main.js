$(document).ready(function() {
  $('#search-username').on('click', function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var treehouseURL = 'http://teamtreehouse.com/';

    $.ajax({
      url: treehouseURL + username + '.json',
      type: 'GET',
    }).done(function(data) {
      console.log("success");
    }).fail(function(data) {
      alertModal('User does not exist', 'Sorry! It looks like that user doesn\'t exist on Treehouse. Did your subscription expire, or did you spell the username correctly?');
    });

  });
});

function alertModal(title, body) {
  // Display error message to the user in a modal
  $('#alert-modal-title').html(title);
  $('#alert-modal-body').html(body);
  $('#alert-modal').modal('show');
}

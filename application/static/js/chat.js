// This file manages JS script.

// Function to initialise map
function initMap(latitude, longitude) {
    // The location of Paris
    const position = { lat: latitude, lng: longitude};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: position
    });
    // The marker, positioned at Paris
    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });
};

function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

//
$(document).ready(function() {
	$('form').on('submit', function(event) {
	    // Avoid page reload
        event.preventDefault();

    // Get message and avoid XSS
    let getMessage = $('input').val();
    let text = escapeHtml(getMessage)

    // If message not empty
    if(text !== '') {

      // Prepare message
      let newMessage = "<p class='message'>" + text + " </p>";

      // Append the message to box
      $('.box .inner').append(newMessage);

      // Clear form field that was submitted
      $('Input').val("");

      // Move scroll to end after message submission
      $('.box .inner').scrollTop( $('.box .inner')[0].scrollHeight );

      $.ajax({
        data: {
            input: getMessage,
        },
        type: 'POST',
        // url: 'https://127.0.0.1:5000/process',
        url: 'https://powerful-savannah-98354.herokuapp.com/process',

        beforeSend: function(){
          $("#loader").show();
        },
      })
        .done(function (data) {
            if (data.error) {
              let newMessage ="<p class='noTextAlert'> Je n'ai pas trouvé d'informations </p>";
              $('.box .inner').append(newMessage);
              $('Input').val("");
            }
            else{
                // Wiki response management
                let wiki = data.wiki_info
                if( wiki !== '' ) {
                    let wiki_message = "<p class='successAlert'>" +
                    wiki.title + " 🧐" +"<br>" + "<br>" +
                    "<strong> Alors ! Voici ce que que je peux te raconter à ce sujet mon petit ... </strong>"
                    + wiki.description + "<br>" + "<br>" +
                    "<a href=" + wiki.url + " target=_blank> En savoir plus 📖 </a>"
                    "</p>";
                    $('.box .inner').append(wiki_message);
                    $('.box .inner').scrollTop( $('.box .inner')[0].scrollHeight );
                }
                    // Map management
                    let map = data.map
                    let latitude = parseFloat(map["latitude"])
                    let longitude = parseFloat(map["longitude"])
                    initMap(latitude, longitude)
                    $("#loader").hide();
            }
        });
    }

    else{
      let newMessage =
      "<p class='noTextAlert'>Je n'ai pas compris, peux-tu répéter stp ? 👴🏼"
      "</p>";
      $('.box .inner').append(newMessage);
      $('Input').val("");
      $('.box .inner').scrollTop( $('.box .inner')[0].scrollHeight );
    }
  });

});

(function(){

    var topicIndex = 0;
    var topicArticles = undefined;


    function updatePageState( id ) {

        var sessionTitle = document.title.substr(0, document.title.lastIndexOf("|")).trim();
        var topicTitle = $( "#"+id ).children("h3").text();
        var newTitle = sessionTitle + " | " + topicTitle;

        // update browser address bar URL & history
        History.pushState({ }, newTitle, "?topic="+id);

    }

    function loadTopic( id ) {

        var url = "../topics/" + id + ".html";

        $.get( url, function( data ) {

            var selector = "#" + id + " .topic-content"
            $( selector ).html( data );

            loadGists();
            $( "#"+id ).removeClass( "hidden" );
        });
    }

    function updatePrevNextDisplay() {

        if ( topicIndex != 0 ){
            // Enable previous
            $( ".previous" ).removeClass( "disabled" );

            // Check if next is disabled
            if ( topicIndex == topicArticles.length-1 ) {
                $( ".next" ).addClass( "disabled" );
            }

        } else {
            // Disable previous
            $( ".previous" ).addClass( "disabled" );

        }
    }

    $( ".previous" ).click( function(e) {

        e.preventDefault();

        // Hide the current topic
        $( '#topics article' ).eq(topicIndex).addClass( "hidden" );

        // Move the index, disable previous if first topic
        topicIndex--;
        if ( topicIndex == 0 ) {
            $( ".previous" ).addClass( "disabled" );
        }

        // Enable next
        $( ".next" ).removeClass( "disabled" )

        // Trigger state change for topic display
        var newId = $( '#topics article' ).eq(topicIndex).attr( "id" );
        updatePageState( newId );

        $( this ).blur();
    });

    $( ".next" ).click( function(e) {

        e.preventDefault();

        // Hide the current topic
        $( '#topics article' ).eq(topicIndex).addClass( "hidden" );

        // Move the index, disable next if last topic
        topicIndex++;
        if ( topicIndex == topicArticles.length-1 ) {
            $( ".next" ).addClass( "disabled" );
        }

        // Enable previous
        $( ".previous" ).removeClass( "disabled" )

        // Trigger state change for topic display
        var newId = $( '#topics article' ).eq(topicIndex).attr( "id" );
        updatePageState( newId);

        $( this ).blur();
    });

    // Bind to StateChange Event
    History.Adapter.bind(window, 'statechange', function() {

      var State = History.getState();
      var paramTopic = State.url.split( '?topic=' )[1];

      if ( paramTopic != undefined ) {

          topicArticles = $( '#topics article' );
          for ( i=0; i < topicArticles.length; i++ ) {

              var topic = topicArticles[i];
              if ( $( topic ).attr( "id" ) == paramTopic ) {
                  topicIndex = i;
              } else {
                  // Hide other topics
                  $( topicArticles[i] ).addClass( "hidden" );
              }
          }

          // Load topic data
          var id = $( topicArticles[topicIndex] ).attr( "id" );
          loadTopic( id );
          updatePrevNextDisplay();
      }
    });


    // When page is ready...
    $(function (){

        // Get all the topics
        topicArticles = $( '#topics article' );

        // Check for topic on request
        var paramTopic = document.URL.split( '?topic=' )[1];
        if ( paramTopic != undefined ) {
            for ( i=0; i < topicArticles.length; i++ ) {
                topic = topicArticles[i];
                if ( $( topic ).attr( "id" ) == paramTopic ) {
                    topicIndex = i;
                } else {
                    $( topicArticles[i] ).addClass( "hidden" );
                }

            }

            // Check current state

            var id = $( topicArticles[topicIndex] ).attr( "id" );
            var State = History.getState();
            var currTopic = State.url.split( '?topic=' )[1];
            if (currTopic == paramTopic) {
                loadTopic ( id )
            } else {
                updatePageState( id );
            }

            updatePrevNextDisplay();

        } else {

            // Trigger state change for topic display
            var id = $( topicArticles[topicIndex] ).attr( "id" );
            updatePageState( id );
        }

    });

}())

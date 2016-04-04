console.log("Sanity Check: JS is working!");

// var allBooks = [];
var template;
var $quotesList;
var allQuotes = [];

$(document).ready(function(){

  $quotesList = $('#quotesTarget');
  var source = $('#quotesTemplate').html();
  template = Handlebars.compile(source);


// your code
//............testing I understand the wiring
  $.ajax({
    method: 'GET',
    url: '/api/profile',
    success: handleProfile,
    error: handleError
  });

  function handleProfile(json){
    $('.go').append('<div>'+json[0].pets[1].name+'</div>');
    console.log("ajax success, yay!", json[0]);
  }

  function handleError(err){
    console.log(err);
  }

  $.ajax({
    method: 'GET',
    url: '/api/quotes',
    success: handleQuotes,
    error: handleQuotesError
  });

  function handleQuotes(json){
    console.log(json);
    allQuotes.unshift(json);
    allQuotes = json;
    render();
  }

  function handleQuotesError(err){
    console.log("handleQuotesError " + err);
  }
//................testing^

//adding/listing quote
$('#newQuoteForm').on('submit', function(e){
  e.preventDefault();
  console.log('new quote', $(this).serialize());
  $.ajax({
    method: 'POST',
    url: '/api/quotes',
    data: $(this).serialize(),
    success: newQuoteSuccess,
    error: newQuoteError
  });
});

  function newQuoteSuccess(json){
    //$('#newSongForm input').val('');
    allQuotes.unshift(json);
    render();
  }

  function newQuoteError(err){
    console.log("newQuoteError " + err);
  }

  $quotesList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/quotes/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/quotes/'+$(this).attr('data-id'),
      success: deleteQuoteSuccess,
      error: deleteQuoteError
    });
  });

  function deleteQuoteSuccess(json){
    console.log(json);
    for(var t = 0; t < allQuotes.length; t++){
      if(allQuotes[t]._id === json._id) {
        allQuotes.splice(t, 1);
        break;
      }
    }
    render();
  }

  function deleteQuoteError(err){
    console.log(err);
  }

  function render() {
    // empty existing posts from view
    $quotesList.empty();

    // pass `allBooks` into the template function
    var quotesHtml = template({ quotes: allQuotes });

    // append html to the view
    $quotesList.append(quotesHtml);
  }

  // helper function to render all posts to view
  // note: we empty and re-render the collection each time our post data changes
  // function render () {
  //   // empty existing posts from view
  //   $booksList.empty();
  //
  //   // pass `allBooks` into the template function
  //   var booksHtml = template({ books: allBooks });
  //
  //   // append html to the view
  //   $booksList.append(booksHtml);
  // }
  //
  // function handleSuccess(json) {
  //   allBooks = json;
  //   render();
  // }


});//doc ready end

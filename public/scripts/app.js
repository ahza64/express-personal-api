console.log("Sanity Check: JS is working!");

// var allBooks = [];
var template;
var $quoteslist;
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
    allQuotes.unshift(json);
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

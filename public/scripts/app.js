console.log("Sanity Check: JS is working!");

// var allBooks = [];
var template;
var $quoteslist;
var allQuotes = [];

$(document).ready(function(){

  $quotesList = $('#quoteTarget');

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
//................testing^

//adding/listing quote
  $.ajax({
    method: 'POST',
    url: '/api/quotes',
    success: newQuoteSuccess,
    error: newQuoteError
  });

  function handleQuote(json){

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

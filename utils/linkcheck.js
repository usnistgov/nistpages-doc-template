
$(':header').each((id, el) => {
var id = $(el).attr('id');

 console.log(id);
 if (!id) {
   return;
 }

 $('a[href="#' + id + '"]:not(".header-link")').each(function(i, a) {
 var _a = a;
   console.log($(_a).text());
   $(el).append('<button style="background: #fec" key="' + i + '"> | <b style="color: red">' + $(_a).text() + '</b> | </button>').on('click', 'button[key="' + i + '"]', function(e) {
     console.log("Click!", _a); _a.scrollIntoView()});

})

});


$("a[href*='#']").each((id, el) => {
 const target = $($(el).prop('hash'));
   $(el).append('<button style="background: #fec" > | <b style="color: red">' + $(target).data('section') + ' ' + $(target).text() + '</b> | </button>').on('click', function(e) {
     console.log("Click!", target); target.scrollIntoView()});
  
});





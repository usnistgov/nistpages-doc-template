
/*
 * Header Link Check
 * 
 * Run against the single-page view.
 *
 * Loop through all the headers in the document and find the links that target that header.
 * For each link, append a text block to the header element with the link's text.
 * 
 * For correctly formatted header links, the text from the link will match the section number:
 * 
 *   2.2 Section Title | Sec 2.2 || Sec 2.2 |
 * 
 * For incorrectly formatted links, the text in the link will be something different:
 * 
 *   2.2 Section Title | Sec 2.3 || Sec 3.1 |
 *
 * Clicking on the link box takes you to the link element itself, to show where to fix it.
 */

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




/*
 * Reference Link Check
 * 
 * Run against the single-page view.
 *
 * Loop through all the references in the document and find the links that target that reference.
 * For each link, append a text block to the reference's anchor element with the link's text.
 * 
 * For correctly formatted reference links, the text from the link will match the reference text:
 * 
 *   [SP800-123] | [SP800-123] || [SP800-123] |
 * 
 * For incorrectly formatted links, the text in the link will be something different:
 * 
 *   [SP800-123] | [SP800-123rev1] || [SP800-12] |
 *
 * Clicking on the link box takes you to the link element itself, to show where to fix it.
 */

$('a[name*="ref-"]').each((id, el) => {
var id = $(el).attr('name');

 console.log(id);
 if (!id) {
   return;
 }

 $('a[href="#' + id + '"]:not(a[name="' + id + '"])').each(function(i, a) {
 var _a = a;
   console.log($(_a).text());
   $(el).append('<button style="background: #fec" key="' + i + '"> | <b style="color: red">' + $(_a).text() + '</b> | </button>').on('click', 'button[key="' + i + '"]', function(e) {
     console.log("Click!", _a); _a.scrollIntoView()});

})

});




/*
 * Section Link Check
 * 
 * Run against the single-page view.
 *
 * Loop through all the internal links in the document and the targets.
 * Take the "data-section" value from the target and append a data box with the section number to the link.
 * The data box only has the broad section and not the full subsection number reference.
 * 
 * For correctly formatted reference links, the text from the link will match the section:
 * 
 *   Sec 6.2 | Section 6 |
 * 
 * For incorrectly formatted links, the text in the link will be something different:
 * 
 *   Sec 6.2 | Section 3 |
 *
 * Clicking on the link box takes you to the link element itself, to show where to fix it.
 * Links that do not go to section headers show up as "undefined" false positives.
 */


$("a[href*='#']").each((id, el) => {
 const target = $($(el).prop('hash'));
   $(el).append('<button style="background: #fec" > | <b style="color: red">' + $(target).data('section') + ' ' + $(target).text() + '</b> | </button>').on('click', function(e) {
     console.log("Click!", target); target.scrollIntoView()});
  
});





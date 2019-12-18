// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } 
    // else {
    //   element.classList.remove('is-visible');
    // }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Revised is-visible function, object should be completely in view
function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  var pageHeight = window.innerHeight;
  var topElement = rect.top;
  var botElement = rect.bottom;
  var heightElement = rect.height;
  return ( ((rect.top - (2 * window.innerHeight / 3)) <= 0) || ((rect.bottom - (window.innerHeight)) <= 0) );
  // return ( (rect.top >= 0) && (rect.top <= (window.innerHeight - rect.height)) ||
  //   (rect.top <= (window.innerheight / 2))
  // );
}

// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return ((rect.bottom >= rect.height) && (rect.top <= rect.height));
// }

// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0
//       && rect.bottom >= 0)
//     ||
//     (rect.bottom >= (window.outerHeight || document.documentElement.clientHeight) &&
//       rect.top <= (window.outerHeight || document.documentElement.clientHeight))
//     ||
//     (rect.top >= 0 &&
//       rect.bottom <= (window.outerHeight || document.documentElement.clientHeight))
//   );
// }


// var offset = $('.navigation').offset();
// var navParent = $('.navigation');
// var nav = navParent.find('nav');
// var tmp = navParent.find('nav').clone().attr('class', 'tmp').css('visibility', 'hidden');

// window.addEventListener('scroll', function() {
//   if (window.pageYOffset > offset.top) {
//     navParent.append(tmp);
//     nav.css({'position': 'fixed', 'top': 0});
//     console.log("add tmp")
//   } else {
//     navParent.find('.tmp').remove();
//     nav.css({'position': 'static', 'top': ''});
//     console.log("remove tmp")
//   }
// });

// window.onscroll = function(e) {
//   // print "false" if direction is down and "true" if up
//   console.log(this.oldScroll > this.scrollY);
//   this.oldScroll = this.scrollY;
// }
//
// console.log("sticky scroll")

// It can be detected by storing the previous scrollTop value and comparing the current scrollTop value with it.
//
// JavaScript :

// var lastScrollTop = 0;
//
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
// getElementById("nav").addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//    if (st > lastScrollTop){
//       // downscroll code
//        return true
//       })
//    } else {
//       // upscroll code
//       return false
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);

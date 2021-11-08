class TempScrollBox {
  constructor() {
    this.scrollBarWidth = 0;
    this.measureScrollbarWidth();
  }
  measureScrollbarWidth() {
    // Add temporary box to wrapper
    let scrollbox = document.createElement('div');
    // Make box scrollable
    scrollbox.style.overflow = 'scroll';
    // Append box to document
    document.body.appendChild(scrollbox);
    // Measure inner width of box
    this.scrollBarWidth = scrollbox.offsetWidth - scrollbox.clientWidth;
    // Remove box
    document.body.removeChild(scrollbox);
  }
  get width() {
    return this.scrollBarWidth;
  }
}

// Stores the variable returned from the class so that scroll bar width can be
// calculated.
let scrollbox = new TempScrollBox();

/*
Due to the width being browser depedent, none of the sidebar width or
transform values are stored within the css selectors and are defined via JS.
This solution has meant that I have to calculate the widths as and when I need
them in locally stored variables wherever a size screen is determined/changed.
*/

window.onload = function() {
  var width = $(window).width();
  // transform and transition times are added as 0s and linear so they don't
  // trigger an animation when the sidebar is added.
  $(".sb").css("transition", `0s`);
  $(".sb").css("transition-timing-function", `linear`);
  if (width >= 975) {
    // Allows the sidebar size to be determined, using the scroll bar calculator
    //
    var transformValue = `${scrollbox.width + 333}`;
    $(".sb").css("transform", `translateX(${transformValue}px)`);
    $(".sb").css("width", `${transformValue}px`);
    console.log(transformValue);
    }
  else if (width <975) {
    var transformValue = `${scrollbox.width + 257}`;
    $(".sb").css("transform", `translateX(${transformValue}px)`);
    $(".sb").css("width", `${transformValue}px`);
    console.log(transformValue);
    }
  };

$(window).resize(function() {
  //window width has to be locally scoped as it changing dynamically with resize
  var width = $(window).width();
  const shiftBody = $("#nav, main, footer");
  if (width >= 992) {
    /* This detects whether the burger menu is active or not
    (hamburger-mask being present = menu active). if the sidebar properties are
    changed while the menu is active, the sidebar disappears, so only the
    variable is defined when it is active
    */
    if (document.getElementById('mask').classList.contains("hamburger-mask")) {
      var transformValue = `${scrollbox.width + 333}`;
      let transformStart  = `translateX(-${transformValue}px)`;
      $(".sb").css("transform", `translateX(0)`);
      $(".sb").css("width", `${transformValue}px`);
      shiftBody.css("transition", `0s`);
      shiftBody.css("transition-timing-function", `linear`);
      shiftBody.css("transform", `${transformStart}`);
  } else {
      var transformValue = `${scrollbox.width + 333}`;
      $(".sb").css("transform", `translateX(${transformValue})`);
      $(".sb").css("transition", `0s`);
      $(".sb").css("transition-timing-function", `linear`);
      $(".sb").css("width", `${transformValue}px`);
    }
  }
  else if (width <992) {
    if (document.getElementById('mask').classList.contains("hamburger-mask")) {
      var transformValue = `${scrollbox.width + 257}`;
      let transformStart  = `translateX(-${transformValue}px)`;
      $(".sb").css("transform", `translateX(0)`);
      $(".sb").css("width", `${transformValue}px`);
      shiftBody.css("transition", `0s`);
      shiftBody.css("transition-timing-function", `linear`);
      shiftBody.css("transform", `${transformStart}`);
    }
    else {
      var transformValue = `${scrollbox.width + 257}`;
      $(".sb").css("transform", `translateX(${transformValue}px)`);
      $(".sb").css("transition", `0s`);
      $(".sb").css("transition-timing-function", `linear`);
      $(".sb").css("width", `${transformValue}px`);
      }
    }
  }
);

// Called shiftbody, because it shifts all in the body apart from the sidebar
const shiftBody = $("#nav, main, footer");

//Hamburger menu button is clicked
$(".hamburger").click(function () {
  //Scrollbar is removed from body.
  $("#sb-width").removeClass("no-scroll");
  $("body").addClass("no-scroll");
  // Variables are declared locally to call on the current sidebar width
  // defined by onload or the window size listener.
  var transformValue = $(".sb").width();
  let transformStart  = `translateX(-${transformValue}px)`;
  let transformIn = `translateX(0)`;
  $(".sb").css("transition", "transform 0.4s");
  $(".sb").css("transition-timing-function", "ease-in");
  //this class is from the hamburger animation script to trigger the animation.
  $(".hamburger").addClass("is-active");
  // the 'nav' main and footer is shifted left.
  shiftBody.css("transform", `${transformStart}`);
  // the class that darkens the 'body' is added.
  $(".mask-click").addClass("hamburger-mask");
  // the sidebar is transformed Into view
  $(".sb").css("transform", `${transformIn}`);
  // Fires carousel the next slide so a visual glitch doesn't occur on it.
  $('.carousel').slick('slickNext');
});

$(".mask-click").click(function () {
  // the scrollbar is added back to the body
  $("#sb-width").addClass("no-scroll");
  $("body").removeClass("no-scroll");
  // Variables are declared locally to call on the current sidebar width
  // defined by onload or the window size listener.
  var transformValue = $(".sb").width();
  let transformStart  = `translateX(-${transformValue}px)`;
  let transformIn = `translateX(0)`;
  $(".sb").css("transition", "transform 0.4s");
  $(".sb").css("transition-timing-function", "ease-in");
  shiftBody.css("transition", "transform 0.4s");
  shiftBody.css("transition-timing-function", "ease-in");
  //the animation state is removed from the hamburger icon
  $(".hamburger").removeClass("is-active");
  // the 'body' is moved back to its original position
  shiftBody.css("transform", `${transformIn}`);
  // the sidebar (sb) is moved off screen.
  $(".sb").css("transform", `translateX(${transformValue}px)`);
  // the dark overlay (aka mask) is removed from the 'body'.
  $(".mask-click").removeClass("hamburger-mask");
});

$('.sb--ul-2').hover(
  function() {
  $(this).siblings().children().css(
  'background-color', 'rgba(102,102,102, 0.15)');
  }, function(){
  $(this).siblings().children().css('background-color', '#2333645');}
);

$('.sb--ul').hover(
  function() {
  $(this).siblings().children().css(
  'background-color', 'rgba(102,102,102, 0.15)');
  },function(){
    $(this).siblings().children().css('background-color', '#2333645');
  }
);

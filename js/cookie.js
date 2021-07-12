if(localStorage.getItem("cookieClicked") === "true") {
  $(".pref__wrapper").delay(100).fadeOut();
  $(".cookie").delay(100).fadeOut();
  $("body").removeClass("no-scroll");
  console.log("Cookie remembered");
} else {
  console.log("Cookie not accepted");
};

$(".close").click(function() {
  $(".pref__wrapper").delay(200).fadeOut();
  $(".cookie").fadeOut();
  $("body").removeClass("no-scroll");
  localStorage.setItem("cookieClicked", "true")
});

$(".preferences").click(function() {
  $(".pref__wrapper").fadeIn();
});

$(".cancel").click(function() {
  $(".pref__wrapper").fadeOut();
});

const classToggles = 'pref--btn-white pref--btn-purple';
function registerToggleButton(thisButton, otherButton) {
    $(thisButton).click(function () {
        if($(thisButton).hasClass('pref--btn-white')) {
            $(thisButton).toggleClass(classToggles);
            $(otherButton).toggleClass(classToggles);
        };
    });
};

registerToggleButton(".pref__sect-2-btn-1", ".pref__sect-2-btn-2");
registerToggleButton(".pref__sect-2-btn-2", ".pref__sect-2-btn-1");

registerToggleButton(".pref__sect-3-btn-1", ".pref__sect-3-btn-2");
registerToggleButton(".pref__sect-3-btn-2", ".pref__sect-3-btn-1");

// if(localStorage.getItem('cookieSeen') != 'shown'){
//     $(".cookie").delay(2000).fadeIn();
//     localStorage.setItem('cookieSeen','shown')
// };
//
//
// $(".pref__sect-2-btn-1").click(function () {
//   if ($(".pref__sect-2-btn-1").hasClass("pref--btn-white")) {
//   $(".pref__sect-2-btn-1").toggleClass('pref--btn-white pref--btn-purple')
//   $(".pref__sect-2-btn-2").toggleClass('pref--btn-purple pref--btn-white')
//   } else {
//   console.log("button 1 pressed")
//   };
// });
//
// $(".pref__sect-2-btn-2").click(function () {
//   if ($(".pref__sect-2-btn-2").hasClass("pref--btn-white")) {
//   $(".pref__sect-2-btn-2").toggleClass('pref--btn-white pref--btn-purple')
//   $(".pref__sect-2-btn-1").toggleClass('pref--btn-purple pref--btn-white')
//   } else {
//   console.log("button 1 pressed")
//   };
// });
//
// $(".pref__sect-3-btn-1").click(function () {
//   if ($(".pref__sect-3-btn-1").hasClass("pref--btn-white")) {
//   $(".pref__sect-3-btn-1").toggleClass('pref--btn-white pref--btn-purple')
//   $(".pref__sect-3-btn-2").toggleClass('pref--btn-purple pref--btn-white')
//   } else {
//   console.log("button 1 pressed")
//   };
// });
//
// $(".pref__sect-3-btn-2").click(function () {
//   if ($(".pref__sect-3-btn-2").hasClass("pref--btn-white")) {
//   $(".pref__sect-3-btn-2").toggleClass('pref--btn-white pref--btn-purple')
//   $(".pref__sect-3-btn-1").toggleClass('pref--btn-purple pref--btn-white')
//   } else {
//   console.log("button 1 pressed")
//   };
// });

// function setupEnableDisable(button, callback) {
//   let enable = $(button).hasClass("pref--btn-white");
//   $(button).click( => () {
//     if (enable === true) {
//       toggleButtonColor(button)
//     }
//   }
// }

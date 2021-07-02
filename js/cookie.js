if(localStorage.getItem('cookieSeen') != 'shown'){
    $(".cookie").delay(2000).fadeIn();
    localStorage.setItem('cookieSeen','shown')
};

$(".close").click(function() {
  $(".pref__wrapper").delay(200).fadeOut();
  $(".cookie").fadeOut();
  console.log("Close Clicked")
  localStorage.setItem('cookieSeen','shown')
});

$(".preferences").click(function() {
  $(".pref__wrapper").fadeIn();
  console.log("Preferences Clicked")
});

$(".cancel").click(function() {
  $(".pref__wrapper").fadeOut();
  console.log("Cancel Clicked")
});

$(".pref__sect-2-btn-1").click(function () {
  if ($(".pref__sect-2-btn-1").hasClass("pref--btn-white")) {
  $(".pref__sect-2-btn-1").toggleClass('pref--btn-white pref--btn-purple')
  $(".pref__sect-2-btn-2").toggleClass('pref--btn-purple pref--btn-white')
  } else {
  console.log("button 1 pressed")
  };
});

$(".pref__sect-2-btn-2").click(function () {
  if ($(".pref__sect-2-btn-2").hasClass("pref--btn-white")) {
  $(".pref__sect-2-btn-2").toggleClass('pref--btn-white pref--btn-purple')
  $(".pref__sect-2-btn-1").toggleClass('pref--btn-purple pref--btn-white')
  } else {
  console.log("button 1 pressed")
  };
});

$(".pref__sect-3-btn-1").click(function () {
  if ($(".pref__sect-3-btn-1").hasClass("pref--btn-white")) {
  $(".pref__sect-3-btn-1").toggleClass('pref--btn-white pref--btn-purple')
  $(".pref__sect-3-btn-2").toggleClass('pref--btn-purple pref--btn-white')
  } else {
  console.log("button 1 pressed")
  };
});

$(".pref__sect-3-btn-2").click(function () {
  if ($(".pref__sect-3-btn-2").hasClass("pref--btn-white")) {
  $(".pref__sect-3-btn-2").toggleClass('pref--btn-white pref--btn-purple')
  $(".pref__sect-3-btn-1").toggleClass('pref--btn-purple pref--btn-white')
  } else {
  console.log("button 1 pressed")
  };
});

// function setupEnableDisable(button, callback) {
//   let enable = $(button).hasClass("pref--btn-white");
//   $(button).click( => () {
//     if (enable === true) {
//       toggleButtonColor(button)
//     }
//   }
// }

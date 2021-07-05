$(".hamburger").click(function () {
  console.log("Hamburger Clicked");
  if ($(".hamburger").hasClass("is-active")) {
    $(".hamburger").removeClass("is-active");
    console.log("Class should be removed")
    $("header, main, footer").removeClass("burger-shift-left");
    $("header, main, footer").addClass("burger-shift-right");
  } else {
    $(".hamburger").addClass("is-active");
    console.log("Class should be added")
    $("header, main, footer").removeClass("burger-shift-right");
    $("header, main, footer").addClass("burger-shift-left");
    $(".mask-click").addClass("hamburger-mask");
  };
});

$(".mask-click").click(function () {
  if ($(".hamburger").hasClass("is-active")) {
    $(".hamburger").removeClass("is-active");
    console.log("Class should be removed")
    $("header, main, footer").removeClass("burger-shift-left");
    $("header, main, footer").addClass("burger-shift-right");
    $(".mask-click").removeClass("hamburger-mask");
  } else {
    $(".hamburger").addClass("is-active");
    console.log("Class should be added")
    $("header, main, footer").removeClass("burger-shift-right");
    $("header, main, footer").addClass("burger-shift-left");
    $(".mask-click").addClass("hamburger-mask");
  };
});

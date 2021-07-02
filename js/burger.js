$(".hamburger").click(function () {
  console.log("Hamburger Clicked");
  if ($(".hamburger").hasClass("is-active")) {
    $(".hamburger").removeClass("is-active");
    console.log("Class should be removed")
    $("body").removeClass("burger-shift-left");
    $("body").addClass("burger-shift-right");
  } else {
    $(".hamburger").addClass("is-active");
    console.log("Class should be added")
    $("body").removeClass("burger-shift-right");
    $("body").addClass("burger-shift-left");
    $(".mask-click").addClass("hamburger-mask");
  };
});

$(".hamburger-mask").click(function () {
  if ($(".hamburger").hasClass("is-active")) {
    $(".hamburger").removeClass("is-active");
    console.log("Class should be removed")
    $("body").removeClass("burger-shift-left");
    $("body").addClass("burger-shift-right");
  } else {
    $(".hamburger").addClass("is-active");
    console.log("Class should be added")
    $("body").removeClass("burger-shift-right");
    $("body").addClass("burger-shift-left");
    $(".mask-click").addClass("hamburger-mask");
  };
});

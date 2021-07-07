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

// class MeasureSidebar {
//   constructor() {
//     this.sidebarWidth = 0;
//     this.measureSidebarWidth();
//   }
//   measureSidebarWidth(){
//     let sidebar = document.getElementById("sb-width");
//     this.sidebarWidth = sidebar.offsetWidth - sidebar.clientWidth;
//   }
//   get widthTwo() {
//     return this.sidebarWidth;
//   }
// }

let scrollbox = new TempScrollBox();
let transformStart  = `translateX(${scrollbox.width}px + 257px)`;
let transformLeft = `translateX(0)`;



console.log(scrollbox.width); //-> 17 (Windows, Chrome)
console.log(transformStart); //-> translateX(17px + 257px) (Windows, Chrome)

const shiftContent = $("header, main, footer");

$(".hamburger").click(function () {
  $(".hamburger").addClass("is-active");
  shiftContent.removeClass("burger-shift-right");
  shiftContent.addClass("burger-shift-left");
  $(".mask-click").addClass("hamburger-mask");
  $("body").addClass("no-scroll");
  $(".sb").css("transform", `${transformLeft}`);


});

$(".mask-click").click(function () {
  $(".hamburger").removeClass("is-active");
  shiftContent.removeClass("burger-shift-left");
  shiftContent.addClass("burger-shift-right");
  $(".mask-click").removeClass("hamburger-mask");
  $("body").removeClass("no-scroll");
  $(".sb").css("transform", `0`);

});

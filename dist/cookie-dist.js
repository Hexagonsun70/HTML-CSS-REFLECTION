!function(){$(".close").click((function(){$(".pref__wrapper").delay(200).fadeOut(),$(".cookie").fadeOut(),$("body").removeClass("no-scroll")})),$(".preferences").click((function(){$(".pref__wrapper").fadeIn()})),$(".cancel").click((function(){$(".pref__wrapper").fadeOut()}));var e="pref--btn-white pref--btn-purple";function t(t,c){$(t).click((function(){$(t).hasClass("pref--btn-white")&&($(t).toggleClass(e),$(c).toggleClass(e))}))}t(".pref__sect-2-btn-1",".pref__sect-2-btn-2"),t(".pref__sect-2-btn-2",".pref__sect-2-btn-1"),t(".pref__sect-3-btn-1",".pref__sect-3-btn-2"),t(".pref__sect-3-btn-2",".pref__sect-3-btn-1")}();
//# sourceMappingURL=cookie-dist.js.map
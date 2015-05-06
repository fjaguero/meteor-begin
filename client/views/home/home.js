Template.home.rendered = function() {
  var options, w, winHeight, winWidth;
  w = new WOW().init();
  winWidth = $(window).width();
  winHeight = $(window).height();
  $("#intro").css({
    width: winWidth,
    height: winHeight
  });
  $(window).resize(function() {
    return $("#intro").css({
      width: $(window).width(),
      height: $(window).height()
    });
  });
  if (!Utils.isMobile) {
    options = {
      forceHeight: false,
      smoothScrolling: false
    };
    return skrollr.init(options).refresh();
  }
};

Template.home.destroyed = function() {
  return $('body').attr('style', '');
};
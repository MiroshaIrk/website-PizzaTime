; (function () {
  var scroll = function (item) {
    var targetTop = item.getBoundingClientRect().top;
    var scrollTop = window.pageYOffset;
    var targetOffsetTop = targetTop + scrollTop;
    var headerOffset = document.querySelector('.header-page').clientHeight;

    window.scrollTo(0, targetOffsetTop - headerOffset);
    console.log(headerOffset);
  }

  myLib.body.addEventListener('click', function (e) {
    var target = e.target;
    var scrollToItemClass = myLib.closestAttr(target, 'data-scroll-to');

    if (scrollToItemClass === null) {
      return;
    }

    e.preventDefault();
    var scrollToItem = document.querySelector('.' + scrollToItemClass);

    if (scrollToItem) {
      scroll(scrollToItem);
    }
  });
})();
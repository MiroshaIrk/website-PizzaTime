; (function () {
  var catalog = document.querySelector('.catalog');

  if (catalog === null) {
    return;
  }

  var changeProductSize = function (target) {
    var product = myLib.closestItemByClass(target, 'product')

    console.log(product);
  };

  catalog.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('product__size')) {
      e.preventDefault();
      changeProductSize(target);
    }
  });

})();
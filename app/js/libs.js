
/** Выполняется проверка браузера на возможность поддержки webp
 *  callback_enter - заменяет data-bg аттрибут у элемента
 */
var canUseWebp = function () {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {

    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  else {
    return false;
  }
};

var checkWebp = function () {
  var isWebpSupported = canUseWebp();

  if (!isWebpSupported) {
    var lazyItems = document.querySelectorAll('[data-bg-replace-webp]')

    for (let item of lazyItems) {
      var dataBgReplaceWebp = item.getAttribute('data-bg-replace-webp');

      if (dataBgReplaceWebp !== null) {
        item.setAttribute('data-bg', dataBgReplaceWebp)
      }
    }
  }
}

checkWebp();
/**************************************************************************** */
var lazyLoadInstance = new LazyLoad({

});

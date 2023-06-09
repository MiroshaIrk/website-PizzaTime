; (function () {

  var ymapInit = function () {

    if (typeof ymaps === 'undefined') return;

    ymaps.ready(function () {
      var myMap = new ymaps.Map('ymap', {
        center: [52.282974, 104.280581],
        zoom: 16
      }, {
        searchControlProvider: 'yandex#search'
      }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Пиццерия PizzaTime',
          balloonContent: 'г. Иркутск, Ленина, д. 22, тел: +7 (999) 888-77-66'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../images/common/marker.svg',
          // Размеры метки.
          iconImageSize: [40, 63.2],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
        });

      myMap.geoObjects.add(myPlacemark)

      myMap.behaviors.disable('scrollZoom');
    });
  };

  /************************************************************************* */
  /**
   * Ниже код для отложенной загрузки карты
   */

  var sectionContacts = document.querySelector('.section-contacts');
  var body = document.querySelector('body');

  var ymapLoad = function () {
    var script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    body.appendChild(script);
    script.addEventListener('load', ymapInit);
  };

  var checkYmapInit = function () {
    var sectionContactsTop = sectionContacts.getBoundingClientRect().top;
    var scrollTop = window.pageYOffset;
    var sectionContactsOffsetTop = scrollTop + sectionContactsTop;


    if (scrollTop + window.innerHeight > sectionContactsOffsetTop) {
      ymapLoad();
      window.removeEventListener('scroll', checkYmapInit)
    }
  }

  window.addEventListener('scroll', checkYmapInit);
  checkYmapInit();

})();
window.onload = () => {
    // Запрет "отскока" страницы при клике по пустой ссылке с href="#"
    document.querySelectorAll('[href="#"]').forEach((item, i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
        });
    });

    // GoogleMap
    function initGoogleMap() {

        var map = new google.maps.Map(document.getElementById('googleMap'), {
            center: { lat: 55.75210932500735, lng: 37.595878592627436 }, // Центр карты
            zoom: 17, // Масштаб
        });
        // Стили карты
        var styles = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ];
        map.setOptions({ styles: styles });
        // Контент метки
    //  var htmlContent = '<div class="yandex-baloon">';
    //  htmlContent += '<img src="http://blog.karmanov.ws/files/APIYaMaps1/min_image.png" alt="" />';
    //  htmlContent += '<div class="yandex-baloon_text">';
    //  htmlContent += '<p>The Victoria Tower Gardens</p>';
    //  htmlContent += '<p>Millbank</p>';
    //  htmlContent += '<p>City of London </p>';
    //  htmlContent += '<p>SW1P 3SF</p>';
    //  htmlContent += '<p>United Kingdom</p>';
    //  htmlContent += '<p>020 7641 5264</p>';
    //  htmlContent += '</div>';
    //  htmlContent += '</div>';
    //  var infowindow = new google.maps.InfoWindow({
    //      content: htmlContent
    //  });
        // Добавить метку
    //  var marker = new google.maps.Marker({
    //      position: { lat: 55.753281, lng: 37.622543 },
    //      map: map,
    //      // animation: google.maps.Animation.DROP // Анимация маркера "BOUNCE-подпрыгивает" "DROP-падает сверху после загрузки карты"
    //      icon: 'http://blog.karmanov.ws/files/APIYaMaps1/min_marker.png', // Изображение маркера
    //  });
        // Контент метки всегда открыт
        // infowindow.open(map, marker);
        // Контент метки открывается при клике
    //  marker.addListener('click', function () {
    //      infowindow.open(map, marker);
    //  });
    }
    initGoogleMap();

    function openMobileNav() {
        document.querySelector('.navbar__toggle').addEventListener('click', ev => {
            document.querySelector('.nav').classList.toggle('open');
            document.body.classList.toggle('navbar__open');
            ev.target.classList.toggle('active');
        });
    }
    openMobileNav();
    
};

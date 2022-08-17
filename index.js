window.addEventListener('load', function() {
    let menuBtn = document.getElementById('menu-btn');
    let closeBtn = document.getElementById('close-btn');
    let mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.style.display = 'block';
    });

    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.style.display = 'none';
    });

    let mobileMenuItems = [...mobileMenu.getElementsByTagName('a')];
    if(mobileMenuItems.length != 0) {
        mobileMenuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
            });
        });
    }

    //for header

    let heroSection = document.getElementById('hero-section');
    let heroSectionHeight = heroSection.clientHeight;

    let header = heroSection.previousElementSibling;

    document.addEventListener('scroll', function() {
        if(document.documentElement.scrollTop > heroSectionHeight) {
            if(!header.classList.contains('solid-header')) {
                header.classList.add('solid-header');
            }

        } else {
            if(header.classList.contains('solid-header')) {
                header.classList.remove('solid-header');
            }
        }
    });

    let map = L.map('map').setView([40.741770, -73.983090], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    let myIcon = L.icon({
        iconUrl: 'img/map-icon.png'
    });

    let marker = L.marker([40.741770, -73.983090], {
        icon: myIcon
    }).addTo(map);

    marker.bindPopup('We are here!');

});


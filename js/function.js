window.onload = () => {
    // Запрет "отскока" страницы при клике по пустой ссылке с href="#"
    document.querySelectorAll('[href="#"]').forEach((item, i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
        });
    });

    function openMobileNav() {
        document.querySelector('.navbar__toggle').addEventListener('click', ev => {
            document.querySelector('.nav').classList.toggle('open');
            document.body.classList.toggle('navbar__open');
            ev.target.classList.toggle('active');
        });
    }
    openMobileNav();

};

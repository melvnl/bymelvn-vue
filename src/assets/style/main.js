function toggleMenu() {
    var menu = document.querySelector('.navbar-nav');
    menu.classList.toggle('activated')

    var closed = document.querySelector('.fas');
    closed.classList.toggle('fa-bars')
    closed.classList.toggle('fa-times')
    document.body.classList.toggle('lock-scroll');
}
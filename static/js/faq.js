document.addEventListener('click', function (event) {
    var content = document.querySelector(event.target.hash),
        icon = event.target.querySelector('.accordion__icon'),
        target = 'accordion__content',
        activeContentClass = 'accordion__content--active',
        activeIconClass = 'accordion__icon--active';

    if (!event.target.classList.contains('accordion__title') || !content) return;
    event.preventDefault();

    icon.classList.toggle(activeIconClass);

    if (content.classList.contains(activeContentClass)) {
        content.classList.remove(activeContentClass);
        return;
    }

    var accordions = document.querySelectorAll(target + activeContentClass);
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove(activeContentClass);
    }

    content.classList.toggle(activeContentClass);
})
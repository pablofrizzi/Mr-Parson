function classToggleEventHandler(event) {
    var target = $(event.target);
    if (target.is('h2')) {
        target.parent()
            .find('.article-content')
            .toggleClass('hidden');
        console.log(target);
    }
}

$('.text-box-container').click(classToggleEventHandler);


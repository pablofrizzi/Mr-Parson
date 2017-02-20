var header = $('h2');

function classToggleEventHandler(event) {
    var target = $(event.target);
    if (target.is('h2')) {
        header.parent()
            .find('.article-content')
            .toggleClass('hidden');
        console.log(target);
    }
}

header.click(classToggleEventHandler);


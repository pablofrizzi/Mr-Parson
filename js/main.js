function clickEventHandler(event) {
    var target = $(event.target);
    var content;
    var contentLength;
    if (target.is('h2')) {
        content = target.parent().find('.article-content');
        contentLength = content.text().length;
        content.slideToggle(contentLength);
        content.toggleClass('hidden');
    }
}

function registerEventHandler() {
    $('.text-box-container').on('click', clickEventHandler);                       
}

function main() {
    registerEventHandler();
}

$(document).ready(main);

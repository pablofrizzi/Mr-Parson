var header = $('h2');
var txt = $('.article-content');

function prepareEventHandler(event) {
    var target = $(event.target);
    txt.addClass('hidden');
    if (target.is('h2')) {
        target.next().removeClass('hidden');
    }  
}

function registerClickEventHandler() { 
    header.click(prepareEventHandler);
}

function main() {
    registerClickEventHandler();
}

$(document).ready(main);
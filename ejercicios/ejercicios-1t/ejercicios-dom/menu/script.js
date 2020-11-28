const viewName = document.getElementById('viewName');
const options = document.getElementsByClassName('options');

function showView(element) {
    const option = element.getAttribute("value");
    for (optionItem of options) {
        optionItem.style.background = 'gray'
    }
    element.style.background = 'blue';
    viewName.innerText = option;
}
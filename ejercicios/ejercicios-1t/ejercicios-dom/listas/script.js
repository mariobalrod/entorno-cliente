const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');

function move(element) {
    if (element.getAttribute("value") === 'list1') {
        element.setAttribute("value", "list2");
        list2.appendChild(element)
    } else {
        element.setAttribute("value", "list1");
        list1.appendChild(element);
    }
}
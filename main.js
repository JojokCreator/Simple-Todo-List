let importantThings = [];

// let thing = document.querySelector('#important-thing')
// let priority = document.querySelector('#value')


document.querySelector('#add-to-list').addEventListener('click', pushToArray)
document.querySelector('#order').addEventListener('click', sortList)

function pushToArray() {
    let obj = {
        Text: document.querySelector('#important-thing').value,
        Priority: document.querySelector('#value').value,
    }

    importantThings.push(obj)
    
    var list = document.querySelector('ol');
    var newEl = document.createElement('li');
    list.appendChild(newEl).innerHTML = document.querySelector('#important-thing').value;

}

function sortList() {
    importantThings.sort(function (x, y) {
        return (x.Priority - y.Priority);
    });
    
    for (i = 0; i < importantThings.length; i++) {
    document.querySelectorAll('li')[i].innerText = importantThings[i].Text
    }
}


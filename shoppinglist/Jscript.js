const shoppingList = document.getElementById("shoppingList"); 
const input = document.querySelector("input");
const addItemBtn = document.querySelector("#addItemBtn"); 
const reverseTextBtn = document.querySelector("#reverseTextBtn"); 

addItemBtn.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';
    const list = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    list.appendChild(span);
    span.textContent = myItem;

    list.appendChild(btn);
    btn.textContent = "Delete";

    shoppingList.appendChild(list);
    btn.addEventListener('click', () => {
        shoppingList.removeChild(list);
    });

    input.focus();
});

reverseTextBtn.addEventListener('click', () => { 
    const listItems = document.querySelectorAll("ul#shoppingList li span");
    listItems.forEach(item => {
        item.textContent = item.textContent.split('').reverse().join('');
    });
});
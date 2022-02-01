// const listItems = document.querySelectorAll("li:nth-child(even)");
const listItems = document.querySelectorAll("li");
const colours = 
['red', 
'yellow', 
'goldenrod', 
'lightgreen', 
'blue', 
'purple'];

// console.log(listItems);
// console.log(listItems.length);


for(let i=0; i < listItems.length; i++){
    listItems[i].style.color = colours[x];
    x++
    if (x == colours.length){
        x = 0
    }
}

console.log(listItems)



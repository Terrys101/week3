const letters = document.getElementsByTagName("li")
// for (let i = 0; i< letters.length; i++){
//     letters[i].style.color = "orange";
// }


// console.log(letters.length)


const notOrange = document.getElementsByClassName("not-orange");

for (let i = 0; i< notOrange.length; i++){
    notOrange[i].style.color = "red";
}


for (let i = 0; i< notOrange.length; i++){
    if(letters[i].className =="not-orange"){

    }else{
        letters[i].style.color ="orange"

    }
}

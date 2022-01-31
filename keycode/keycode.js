let list = document.getElementsByTagName("li");


document.addEventListener("keypress", (hello) => {
     console.log(hello);
    list[0].textContent = hello.which;
    list[1].textContent = hello.key;
    list[2].textContent = hello.code;
    list[3].textContent = hello.which;

    console.log("Press a key to see the event keycode")
});


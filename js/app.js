// Global  Variables
const menuIcon = document.querySelector("#menu_icon");
const moveBar = document.querySelector(".moveBar");
const menuList = document.querySelector("#menu_list");
const ListItems = document.querySelectorAll("#menu_list li");

// add click event to menu icon replacement hover
menuIcon.addEventListener("click", () => {
    moveBar.classList.toggle("anime");
    menuList.classList.toggle("show");
    
});

//  add click event to list item
ListItems.forEach((li) => {
    li.addEventListener("click", (e) => {
        ListItems.forEach((li) => {
          li.classList.remove("moveItem");
        });
        li.classList.add("moveItem");
    }); 
});



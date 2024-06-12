const Menu = $("#menu")
const closeMenuBtn = $("#close-menu-btn")
const MenuBtn = $("#menu-btn")

MenuBtn.on("click",function(){
    Menu.toggleClass("show-mobile-menu");
});

closeMenuBtn.on("click",function(){
    MenuBtn.click();
});
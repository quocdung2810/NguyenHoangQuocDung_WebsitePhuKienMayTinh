function toggleMenu() {
    var menu = document.getElementById("menu-responsive");
    
    // Kiểm tra xem class hiện tại có phải chỉ là sub-menu-responsive không
    if (menu.className === "sub-menu-responsive") {
        menu.className += " responsive";
    } else {
        menu.className = "sub-menu-responsive";
    }
}
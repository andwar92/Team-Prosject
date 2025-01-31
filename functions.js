


function showandhideinventory() {
    let inventory = document.getElementById("inventory");
    inventory.classList.toggle("hidden");
}

function showandhideshop() {
    let shop = document.getElementById("shop");
    shop.classList.toggle("hidden");
}
function transfer(item) {
    let inventory = document.getElementById("inventory");
    let shop = document.getElementById("shop");

    if(item.parentElement.id === "shop") {
        inventory.appendChild(item);
    } else {
        shop.appendChild(item);
    }
}

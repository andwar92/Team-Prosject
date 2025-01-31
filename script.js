function transfer(item) {
    let inventory = document.getElementById("inventory");
    let shop = document.getElementById("shop");

    if(item.parentElement.id === "shop") {
        inventory.appendChild(item);
    } else {
        shop.appendChild(item);
    }
}
function showandhide(){
    document.getElementById("header").innerHTML
}
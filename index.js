function openProduct(title, description, price, image) {

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalDescription").textContent = description;

    document.getElementById("modalPrice").textContent = price;

    document.getElementById("modalImage").src = image;

    document.getElementById("productModal").classList.add("active");
}


function closeProduct() {

    document.getElementById("productModal").classList.remove("active");
}


/* إغلاق النافذة عند الضغط خارج المنتج */

document.getElementById("productModal").addEventListener("click", function(event) {

    if (event.target === this) {

        closeProduct();

    }

});
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.onclick = function () {
    menu.classList.toggle("active");
};
const largeProductImg = document.querySelector(".active-img");
const incrementCart = document.querySelector("img.increment");
const decrementFromCart = document.querySelector("img.decrement");
let plusValue = Number(incrementCart.dataset.plus);
let cartValue = document.querySelector("i");
let lightBoxModal = document.querySelector(".modal");
const closeModalIcon = document.querySelector(".close-modal img");
let shoppingCartIcon = document.querySelector(".shopping-cart-icon");
let carouselImages = document.querySelectorAll(".img-carousel span");
let carousel = document.querySelector(".img-carousel");
let activeImage = document.querySelector(".active-img img");
let userInfo = document.querySelector(".user-info");
let itemsCounter = document.querySelector(".items-counter");
let sideMenu = document.querySelector(".side-menu");
let sideNav = document.querySelector("#side-nav");
let exitNav = document.getElementById("exit-nav");

let addToCartBtn = document.querySelector(".add-to-cart button");

let itemQuantity = Number(cartValue.innerText);
let itemCount = document.querySelector(".shopping-cart-icon").dataset.itemsCount;

let modalCarouselImages = document.querySelectorAll(".modal-img-carousel span");
let modalCarousel = document.querySelector(".modal-img-carousel");
let modalActiveImage = document.querySelector(".modal-active-img > img");

let currentIndex = 0;

let previousIcon = document.querySelector(".previous-image img");
let nextIcon = document.querySelector(".next-image img");

function toggleActive() {
    if(this.clientWidth < 376) {

        lightBoxModal.style.display = "none";
    
    }

    lightBoxModal.classList.toggle("inactive");
}

largeProductImg.addEventListener("click", toggleActive);

incrementCart.addEventListener("click", () => {

    plusValue += 1;
    cartValue.textContent = plusValue;
    itemsCounter.innerText = plusValue;

    itemQuantity = plusValue;
    itemCount = itemQuantity;

});

decrementFromCart.addEventListener("click", () => {

    Number(cartValue.textContent) > 0 ? plusValue -= 1 : "";
    cartValue.textContent = plusValue;
    itemsCounter.textContent = plusValue;

    itemQuantity = plusValue;
    itemCount = itemQuantity;
    
    if(itemCount <= 0) {
        itemsCounter.classList.add("show");
    }

});

closeModalIcon.addEventListener("click", () => {

    lightBoxModal.classList.toggle("inactive");

});

let cartTitle = document.createElement("div");
let h4 = document.createElement("h4");
h4.textContent = "Cart";
cartTitle.appendChild(h4);
let cartBody = document.createElement("div");
cartBody.classList.add("cart-body");
cartTitle.appendChild(cartBody);
cartTitle.classList.add("cart-title");
cartTitle.classList.add("show");
document.body.appendChild(cartTitle);

let h3 = document.createElement("h3");
cartBody.appendChild(h3);

let deleteButtons = [];

let productContainer = document.createElement("div");
let productInfo = document.createElement("div");
productInfo.classList.add("product-container");
let productDets = document.createElement("div");
productDets.classList.add("product-details");
let productName = document.createElement("p");
productName.classList.add("product-name");
let productAmount = document.createElement("p");
let bold = document.createElement("strong");
productDets.append(productName);
productDets.append(productAmount);
let img = document.createElement("img");
img.src = "images/image-product-1.jpg";
img.alt = "A pair of shoes";
img.classList.add("product-img");
let deleteProduct = document.createElement("img");
deleteProduct.src = "images/icon-delete.svg";
deleteProduct.classList.add("delete-icon");
deleteButtons.push(deleteProduct);
let checkoutBtn = document.createElement("button");
checkoutBtn.classList.add("checkout-btn");
productInfo.appendChild(img);
productInfo.appendChild(productDets);
productInfo.appendChild(deleteProduct);
productContainer.appendChild(productInfo);
productContainer.appendChild(checkoutBtn);

if(Number(itemsCounter.innerText) !== "0") {
    cartBody.appendChild(productContainer);
}

shoppingCartIcon.addEventListener("click", () => {

    cartTitle.classList.toggle("show");

    if(itemsCounter.innerText === "0") {
        
        h3.innerText = "Your cart is empty.";
        productContainer.style.display = "none";

    } else {

        h3.innerText = "";
        productName.innerText = "Fall Limited Edition Sneakers";
        img.src = "images/image-product-1-thumbnail.jpg";
        checkoutBtn.textContent = "Checkout";
        productContainer.style.display = "flex";
        productContainer.style.flexDirection = "column";
        productContainer.style.justifyContent = "space-around";
        productInfo.style.marginBottom = "2rem";
        bold.textContent = " $" + (plusValue * 125);
        productAmount.textContent = "$125.00 x " + plusValue;
        productAmount.append(bold);

    }

});

carouselImages.forEach((image, index) => {

    image.addEventListener("click", () => {
            
        Array.from(carousel.children).forEach(child => {

            child.dataset.active = "false";
            
        });

        Array.from(modalCarousel.children).forEach(child => {

            child.dataset.active = "false";
            
        });

        image.dataset.active = "true";
        modalCarouselImages[index].dataset.active = "true";

        activeImage.src = `images/image-product-${index + 1}.jpg`;
        modalActiveImage.src = `images/image-product-${index + 1}.jpg`;

    });

});

modalCarouselImages.forEach((image, index) => {

    image.addEventListener("click", () => {
            
        Array.from(modalCarousel.children).forEach(child => {

            child.dataset.active = "false";
            
        });

        image.dataset.active = "true";

        modalActiveImage.src = `images/image-product-${index + 1}.jpg`;

        currentIndex = index;

    });

});

nextIcon.addEventListener("click", () => {

    currentIndex = currentIndex + 1;

    if(currentIndex === modalCarouselImages.length) {
        currentIndex = 0;
    }

    modalCarouselImages.forEach(image => {
        image.dataset.active = "false";
    });

    modalCarouselImages[currentIndex].dataset.active = "true";
    modalActiveImage.src = `images/image-product-${currentIndex + 1}.jpg`;

});

previousIcon.addEventListener("click", () => {

    currentIndex = currentIndex - 1;

    if(currentIndex < 0) {
        currentIndex = modalCarouselImages.length - 1;
    }

    modalCarouselImages.forEach(image => {
        image.dataset.active = "false";
    });

    modalCarouselImages[currentIndex].dataset.active = "true";
    modalActiveImage.src = `images/image-product-${currentIndex + 1}.jpg`;

});

addToCartBtn.addEventListener("click", () => {

    if(itemCount >= 1) {
        itemsCounter.classList.remove("show");
    }

});

sideMenu.addEventListener("click", () => {

    sideNav.classList.remove("inactive");

});

exitNav.addEventListener("click", () => {

    sideNav.classList.add("inactive");

});
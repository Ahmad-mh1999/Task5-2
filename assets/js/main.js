// fetch the flags from the api
const flags = fetch("https://restcountries.com/v3.1/all") 
    .then(function (flags) {
        return flags.json();
    }) // convert it to json after fetch
    .then(function (flags) {
        displayFlags(flags);
        
    });
// display flags and country sympol
const menuflags = document.querySelector('.menuflags')
function displayFlags(flags) {
    let ul ="";
    flags.forEach(function (flag ,index) {
        ul += `<li class="dropdown-item ">${flags[index].cca2}<img src="${flags[index].flags.png}" </li>`;
        menuflags.innerHTML = ul;
    });
}
// right sidebar menu
const toggleBtn = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.menu');
const aside = document.querySelector('.Sidbar');


toggleBtn.addEventListener('click', function () {
    if (!sidebar.classList.contains('active')) {
        sidebar.classList.add('active');
        aside.classList.add('d-block');
        console.log(toggleBtn);
    }
    else {
        sidebar.classList.remove('active');
        aside.classList.remove('d-block');
    }
})
// left sidebar menu

const toggleShopBtn = document.querySelector('.toggle-shopping');

const sidebarRight = document.querySelector('.Sidbar-right');
toggleShopBtn.addEventListener('click', function () {
    if (!sidebarRight.classList.contains('active')) {
        console.log(sidebarRight)
        sidebarRight.classList.add('active');
        sidebarRight.classList.add('d-block');
    }
    else {
        sidebarRight.classList.remove('active');
        sidebarRight.classList.remove('d-block');
    }

})
const salesclose=document.getElementById('sales-close');
const sales= document.querySelector('.sales');
salesclose.addEventListener('click',() =>{
    sales.classList.add('d-none');
});


// right sidebar close button

const closeShopBtn = document.querySelector('.close-button');
closeShopBtn.addEventListener('click', () => {
    sidebarRight.classList.remove('active');
})
// left sidebar close button
const closeButtonLeft = document.querySelector('.close-button-left');
closeButtonLeft.addEventListener('click', () => {
    sidebar.classList.remove('active');
    aside.classList.remove('d-block');
});
// buttons to remove Cookies section
const cookiesBtnAccept = document.getElementById('accept-button');
const cookiesBtnDeclinet = document.getElementById('decline-button');
const cookies =document.querySelector('.Cookies');
cookiesBtnAccept.addEventListener('click', () => {
    console.log('cookies');
    cookies.classList.add('d-none');
});
cookiesBtnDeclinet.addEventListener('click', () => {
    console.log('cookies');
    cookies.classList.add('d-none');
});
// fetch the data from the api
const result = fetch("https://dummyjson.com/products") 
    .then(function (result) {
        return result.json();
    }) // convert it to json after fetch
    .then(function (result) {
        displayData(result.products);
    });



// calc new price after discount
function discount(arr, index) {
    var discountProduct = arr[index].discountPercentage;
    console.log(discountProduct);
    var discountPercentage = arr[index].price * discountProduct / 100;
    var newPrice = Math.floor(arr[index].price - discountPercentage);
    console.log(newPrice);
    return newPrice;
}
// display products that we bring from API in section New Arrivels
function displayData(arr) {
    const products = document.querySelector(".new-arrivel-content");
    for (let index = 0; index < 6; index++) {
        const child = document.createElement("div");
        child.className =
            "card  ";
        // index + 4 because some images is interpreted so i take the index from 3
        child.innerHTML = `
            <div class="card-img-top position-relative">
                <img src=`+ arr[index + 4].images[0] + `  class="card-img-top">
                <h3 class="add-to-cart ">Add To Cart</h3>
            </div>
            <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title pb-3">`+ arr[index + 4].title + `</h5>
                    </div>
                    <div class="d-flex align-items-center justify-content-evenly flex-column">
                    <div class="d-flex align-items-center justify-content-evenly pt-2"  style="color: gold;">
                            ` + rate(arr, index + 4) + `
                        </div>
                        <div  class="pt-4">
                            <p> Old Price : <span class="oldPrice">`+ arr[index + 4].price + `$</span></p>
                        </div>
                        <div>
                            <p> After Discount : <span class="newPrice">`+ discount(arr, index + 4) + `$</span></p>
                        </div>
                        
                    </div>
            </div>
        </div>
        `;
        products.appendChild(child);
    }

}
// perv and next button in slider
const products = document.querySelector(".new-arrivel-content");
const arrowbtns = document.querySelectorAll('i.navigation')
const cardWidth = '360';
const smallCardWidth = '297';
arrowbtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (screen.width < 786){
            products.scrollLeft += btn.id === "left" ? -smallCardWidth : smallCardWidth;
        }else{
            products.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth;
        }
        
    });
})

// show the rate of product depending on the rating valuefrom APT as icon star
function rate(arr, index) {
    var ratingApi = Math.round(arr[index].rating);
    var stars = "";
    for (let i = 0; i < ratingApi; i++) {
        stars += "<i class='fa fa-star'></i> ";
    }
    return stars;
}
const plus1 = document.querySelector('.accordion-button1 i');
const plus2 = document.querySelector('.accordion-button2 i');
const plus3 = document.querySelector('.accordion-button3 i');
const plus4 = document.querySelector('.accordion-button4 i');
const accordion1 = document.querySelector('.accordion-button1');
const accordion2 = document.querySelector('.accordion-button2');
const accordion3 = document.querySelector('.accordion-button3');
const accordion4 = document.querySelector('.accordion-button4');



accordion1.addEventListener('click', () =>{
    if (!accordion1.classList.contains('collapsed')){
        plus1.classList.remove('fa-plus');
        plus1.classList.add('fa-minus');
    }else{
        plus1.classList.remove('fa-minus');
        plus1.classList.add('fa-plus');
    }
    
});
accordion2.addEventListener('click', () =>{
    if (!accordion2.classList.contains('collapsed')){
        plus2.classList.remove('fa-plus');
        plus2.classList.add('fa-minus');
    }
    else{
        plus2.classList.remove('fa-minus');
        plus2.classList.add('fa-plus');
    }
});


accordion3.addEventListener('click', () =>{
    if (!accordion3.classList.contains('collapsed')){
        plus3.classList.remove('fa-plus');
        plus3.classList.add('fa-minus');
    }
    else{
        plus3.classList.remove('fa-minus');
        plus3.classList.add('fa-plus');
    }
});
accordion4.addEventListener('click', () =>{
    if (!accordion4.classList.contains('collapsed')){
        plus4.classList.remove('fa-plus');
        plus4.classList.add('fa-minus');
    }
    else{
        plus4.classList.remove('fa-minus');
        plus4.classList.add('fa-plus');
    }
});

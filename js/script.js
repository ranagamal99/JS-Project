// start slider
var slider_img = document.querySelector('.slider-img');
var img = [ 'p1.jpeg', 'p2.jpeg', ];
var i = 0;
var myInterval;
function prev(){
	if(i <= 0) i = img.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= img.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "img/"+img[i]);
	
}
//end slider


//start product

// 
const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart')
const closeIcon = document.querySelector('#close-cart')
const span = document.getElementById("increment");
let count = 0;


// increment
function increament() {
    count++;
    document.getElementById("increment").innerHTML = count;
}

// open cart
cartIcon.onclick = function () {
    cart.classList.add('active');
   

  
    

}
// close cart
closeIcon.onclick = function () {
    cart.classList.remove('active')
   
}
// working in cart

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    // quantity change
    var quantityInputs = document.getElementsByClassName("cart-qunatity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChange)
    }
    // add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addToCart)

    }
    // buy button
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyNow)
    console.log(document.getElementsByClassName("btn-buy")[0])
}

function removeCartItem(e) {
    alert("are you sure to clear that order")
    var buttonClicked = e.target;
    console.log(buttonClicked)
    buttonClicked.parentElement.remove()
    updateTotal()
}
// buy Now
function buyNow() {
    alert('your order is placed');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    console.log(cartContent)
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal()
}

// quantity changed
function quantityChange(e) {
    var input = e.target;
    console.log(input)
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()
}
// add to cart
function addToCart(e) {
    var button = e.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price = shopProduct.getElementsByClassName("price")[0].innerText;
    var img = shopProduct.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, img)
    updateTotal()
    increament()

}

function addProductToCart(title, price, img) {
    var shopCartBox = document.createElement("div")
    shopCartBox.classList.add('cart-box');
    var shopContentBox = document.getElementsByClassName('cart-content')[0];
    var cartItems = shopContentBox.getElementsByClassName('cart-product-title')
    console.log(shopCartBox)
    console.log(cartItems)
    var cartBoxContent = `  
     <img src=${img} alt="" class="cart-img">
     <div class="detail-box">
           <h2 class="cart-product-title">${title}</h2>
           <span class="cart-price">${price}</span>
           <input type="number" value="2" class="cart-qunatity" />
     </div>
    <!-- remove-cart -->
    <i class='bx bx-trash-alt cart-remove '></i>`

    shopCartBox.innerHTML = cartBoxContent;
    shopContentBox.appendChild(shopCartBox)
    shopCartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    shopCartBox.getElementsByClassName('cart-qunatity')[0].addEventListener('click', quantityChange)
    console.log(shopContentBox)

    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].innerText === title) {
            alert("are you sure to add this items to cart");
            return;


        }




    }


}





// update cart
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-qunatity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ""))
        console.log(price)
        var quantity = quantityElement.value
        total = total + (price * quantity);
    }
    // if price contain some double value;
    total = Math.round(total * 100) / 100;


    document.getElementsByClassName('total-price')[0].innerText = "$" + total;



}
document.getElementById("add-cart").addEventListener("click", increament)

//end product
 ///


 //start catogry

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card ");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("four-buttons");
var btns = btnContainer.getElementsByClassName("four-btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




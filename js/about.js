//start  catgory
new WOW().init();
const arrayOfImages_1 = ["product3.jpg", "product3.jpg"];
const arrayOfImages_2 = ["product2.jpg", "product2.jpg", "product2.jpg"];
const arrayOfImages_3 = ["product4.jpg", "product4.jpg", "product4.jpg"];
const arrayOfImages_4 = ["product4.jpg", "product4.jpg", "product4.jpg"];


function displayOfImages_1(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_1.length; i++){
   cartonaa+=` <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s *${i}">
   <img src="img/${arrayOfImages_1[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}
function displayOfImages_2(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_2.length; i++){
   cartonaa+=` <div class="col-md-4 wow fadeIn" data-wow-delay="0.5s*${i}">
   <img src="img/${arrayOfImages_2[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}
function displayOfImages_3(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_3.length; i++){
   cartonaa+=` <div class="col-md-4 wow fadeInLeft" data-wow-delay="0.5s*${i}">
   <img src="img/${arrayOfImages_3[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}
function displayOfImages_4(){
  let cartonaa = ``
  for(let i = 0; i<arrayOfImages_4.length; i++){
  cartonaa+=` 
  <div class="col-md-4 wow fadeInRight mb-3" data-wow-delay= "0.5s*${i}">
   <img src="img/${arrayOfImages_4[i]}" alt="" srcset="" class="img-fluid">
</div>`
  }
  document.getElementById("row").innerHTML = cartonaa
}




//end  catgory

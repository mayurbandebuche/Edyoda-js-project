var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}

let left = document.getElementById("left");
let right = document.getElementById("right");
let selectedImage = "image0"

function imageClicked(i){
  document.getElementById(selectedImage).classList.remove("active")
  let id = "image"+i
  
  selectedImage = id
  document.getElementById(id).classList.add("active")
  document.querySelector("#left img").src = productData.photos[i];
}

left.innerHTML += `<img id="productImg" src=${productData.preview} alt=""/>`
right.innerHTML += 
`
<div class="product-description" >
<h1 id="name">${productData.name}</h1>
<h4 id="brand">${productData.brand}</h4>
<h3>Price: Rs <span id="price">${productData.price}</span></h3>
<div class="description">
  <h3>Description</h3>
  <p id="description">${productData.description}</p>
</div>
<div class="product-preview">
  <h3>Product Preview</h3>
  <div id="previewImg" class="previewImg">
   
  </div>
  </div>
`
for(let i=0; i<productData.photos.length; i++){
  if(i==0){
    document.getElementById("previewImg").innerHTML += 
  `
  <img class="active" src=${productData.photos[i]} alt="" id="image${i}" onclick="imageClicked(${i})">
  `
  }else{
    document.getElementById("previewImg").innerHTML += 
  `
  <img src=${productData.photos[i]} alt="" id="image${i}" onclick="imageClicked(${i})">
  `
  }
  
}

right.innerHTML += 
` 
  <div class="btn">
  <button id="add-to-cart">Add to Cart</button>
  </div>
`

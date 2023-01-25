// VARIABLES GLOBALES
let cart = [];
const availableProducts = [
  {
    img: {
      src: "crocs",
      alt: "",
    },
    reference: "RF053",
    name: "CLASSIC UNISEX - Mules",
    size: 42,
    color: "Noir",
    composition: "Coton",
    price: 59.99,
  },
  {
    img: {
      src: "nikeAir",
      alt: "",
    },
    reference: "RF293",
    name: "Nike Air Force 1",
    size: 38,
    color: "Blanc",
    composition: "Coton",
    price: 119.99,
  },
  {
    img: {
      src: "lacoste",
      alt: "",
    },
    reference: "RF368",
    name: "Lacoste Twin Serve",
    size: 39,
    color: "Noir",
    composition: "Cuir",
    price: 104.99,
  },
];

// DISPLAY PRODUCTS
let articlesSection = document.querySelector("#articles");

function displayAvailableProducts() {
  for (let i = 0; i < availableProducts.length; i++) {
    let templateArticles = document.createElement("div");
    templateArticles.classList.add("shoes");
    templateArticles.innerHTML = `
    
    <img src="./img/${availableProducts[i].img.src}" alt="${availableProducts[i].img.alt}" />
    <div class="infos">
        <div class="title">
            <p>${availableProducts[i].reference}</p>
            <h4>${availableProducts[i].name}</h4>
        </div>
        <div class="description">
            <ul>
                <li>Taille : ${availableProducts[i].size}</li>
                <li>Couleur : ${availableProducts[i].color}</li>
                <li>Composition 100% : ${availableProducts[i].composition}</li>
            </ul>
        </div>
        <div id="btnAdd">
            <button onclick="addProductToCart(${i})" type="button">Ajouter au panier</button>
        </div>
    </div>
    <div class="quantity_price">
        <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <p><b>${availableProducts[i].price}€</b></p>
    </div>
`;
    articlesSection.append(templateArticles);
  }
}

// ADD PRODUCT
function addProductToCart(productId) {
  cart.push(availableProducts[productId]);
  displayCart(productId);
}

// DISPLAY CART
function displayCart(productId) {
  let panierSection = document.querySelector(".contentbasket");
  let templatePanier = document.createElement("div");
  templatePanier.innerHTML = `
    <div>
      <div class="article">
        <span class="productname">${availableProducts[productId].name}</span>
        <span class="price">${availableProducts[productId].price}€</span>
      </div>
      <div class="number-delete">
      <select name="quantity" id="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>
      <button class="buttondelete"type="#"><ion-icon name="trash-outline"></ion-icon></button>
    </div>`;
  panierSection.append(templatePanier);
}

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
  let product = availableProducts[productId];
  // find index
  let positionInCart = -1;
  for (let c = 0; c < cart.length; c++) {
    if (cart[c].reference == product.reference) {
      positionInCart = c;
    }
  }
  /* Si le produit n'est pas dans le panier*/
  if (positionInCart == -1) {
    product.nb = 1;
    cart.push(product);
  } else {
    cart[positionInCart].nb++;
  }

  displayCart(productId);
}

// DISPLAY CART
function displayCart() {
  let panierSection = document.querySelector(".contentbasket");
  panierSection.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let templatePanier = document.createElement("div");
    templatePanier.innerHTML = `
    <div>
      <div class="article">
        <span class="productname">${cart[i].name}</span>
        <span class="price">${cart[i].price}€</span>
      </div>
      <div class="number-delete">
      <select name="quantity" id="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>
      <button onclick="removeProductFromCart(${i})" class="buttondelete"type="#"><ion-icon name="trash-outline"></ion-icon></button>
    </div>`;
    panierSection.append(templatePanier);
    displayTotalAmount();
  }
}

// DISPLAY TOTAL AMOUNT
function displayTotalAmount() {
  let titre = document.querySelector("#panier h2");
  titre.textContent = "Mon panier " + "(" + cart.length + ")";

  let soustotal = document.querySelector("#infosprix span");
  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum = sum + cart[i].price;
  }

  soustotal.textContent = sum.toFixed(2) + "€";



  let tva = document.querySelector("#pourcentage");
  let sumtva = 0;

  for (let i = 0; i < cart.length; i++) {
    sumtva = sumtva + cart[i].price * (20 / 100);
  }

  tva.textContent = sumtva.toFixed(2);



  let total = document.querySelector("#total");
  let sumtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    sumtotal = sumtva + sum;
  }

  total.textContent = sumtotal.toFixed(2);
}

// DELETE PRODUCT
function removeProductFromCart(productId) {
  cart.splice(productId, 1);
  displayCart();
}

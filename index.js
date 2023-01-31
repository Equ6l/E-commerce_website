// VARIABLES GLOBALES
let cart = [];
const availableProducts = [
  {
    img: {
      src: "crocs",
      alt: "CLASSIC UNISEX - Mules",
    },
    reference: "RF053",
    name: "CLASSIC UNISEX - Mules",
    size: 42,
    color: "Noir",
    composition: "Coton",
    price: 59.99,
    clickedOnce: false,
  },
  {
    img: {
      src: "nikeAir",
      alt: "Nike Air Force 1",
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
      alt: "Lacoste Twin Serve",
    },
    reference: "RF368",
    name: "Lacoste Twin Serve",
    size: 39,
    color: "Noir",
    composition: "Cuir",
    price: 104.99,
  },
];

let searchbar = document.querySelector("#research");
searchbar.addEventListener("input", function () {
  displayAvailableProducts();
});

// DISPLAY PRODUCTS
let articlesSection = document.querySelector("#articles");

function displayAvailableProducts() {
  articlesSection.innerHTML = "";
  for (let i = 0; i < availableProducts.length; i++) {
    let productNameUC = availableProducts[i].name.toUpperCase();
    let searchUC = searchbar.value.toUpperCase();
    if (productNameUC.includes(searchUC.toUpperCase())) {
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
        <p><b>${availableProducts[i].price}€</b></p>
    </div>
`;
      articlesSection.append(templateArticles);
    }
  }
}

// ADD PRODUCT
function addProductToCart(productId) {
  // let getValue = document.getElementById("quantity").selectedOptions[0].value;
  // getValue = parseInt(getValue);
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
  console.log(cart);
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
        <select name="quantity" id="quantity"></select>
        <button onclick="removeProductFromCart(${i})" class="buttondelete"type="#"><ion-icon name="trash-outline"></ion-icon></button>
      </div>
    </div>`;
    panierSection.append(templatePanier);

    let selectQuantity = templatePanier.querySelector("select");
    selectQuantity.addEventListener("change", function () {
      cart[i].nb = parseInt(selectQuantity.value);
      displayTotalAmount();
    });
    for (let b = 1; b <= 5; b++) {
      let option = document.createElement("option");
      option.value = b;
      option.textContent = b;
      selectQuantity.append(option);
      if (b == cart[i].nb) {
        option.selected = true;
      }
      displayTotalAmount();
    }
  }
}

// DISPLAY TOTAL AMOUNT
function displayTotalAmount() {
  let titre = document.querySelector("#panier h2");
  titre.textContent = "Mon panier " + "(" + cart.length + ")";

  if (cart.length == 0) {
    titre.textContent = "Mon panier";
  }

  let soustotal = document.querySelector("#infosprix span");
  let livraison = document.querySelector("#infosprix span#gratuit");
  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    // sum = sum + cart[i].price;
    sum = sum + cart[i].price * cart[i].nb;

    if (cart[i].price > 20) {
      livraison.textContent = `Gratuit`;
    } else {
      livraison.innerHTML = `Payante`;
    }
  }

  soustotal.textContent = sum.toFixed(2) + " €";

  let tva = document.querySelector("#pourcentage");
  let sumtva = 0;

  for (let i = 0; i < cart.length; i++) {
    sumtva = sumtva + cart[i].price * (20 / 100);
  }

  tva.textContent = sumtva.toFixed(0) + " €";

  let total = document.querySelector("#total");
  let sumtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    sumtotal = sumtva + sum;
  }

  total.textContent = sumtotal.toFixed(2) + " €";
}

// DELETE PRODUCT
function removeProductFromCart(productId) {
  cart.splice(productId, 1);
  displayCart();
  displayTotalAmount();
}

// TOGGLE MENU

const burgerMenu = document.querySelector(".burger");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

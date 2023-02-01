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

const availableProductsMan = [
  {
    img: {
      src: "1 - Nike Air Max Terrascape Plus [Noir].webp",
      alt: "Nike Air Max Terrascape Plus",
    },
    reference: "DQ3977-001",
    name: "Nike Air Max Terrascape Plus",
    Description:
      "Style rebelle des années 90 revisité. Les détails robustes, notamment des pointes renforcées et une cage en plastique résistante, renforcent votre esprit aventurier avec un style inspiré des grands espaces. Et pour une plus grande stabilité, la semelle intermédiaire innovante en mousse Crater rehausse encore votre expérience Tuned Air.",
    size: 42,
    color: "3 Couleurs",
    colorimg: {
      src1: "1 - Nike Air Max Terrascape Plus [Noir].webp",
      src2: "1 - Nike Air Max Terrascape Plus [Blanc].webp",
      src3: "1 - Nike Air Max Terrascape Plus [Tricolor].webp",
    },
    price: 199.99,
  },
  {
    img: {
      src: "1 - Nike Air Force 1 '07 [Noir].webp",
      alt: "Nike Air Force 1 '07",
    },
    reference: "DV0788-001",
    name: "Nike Air Force 1 '07",
    Description:
      "La légende perdure avec cette chaussure emblématique du basketball. Alliant le confort d'une sneaker taillée pour les parquets et le style d'une chaussure du quotidien, elle revisite ses éléments les plus emblématiques : conception inspirée des années 80, détails audacieux et style « 100 % basket ».",
    size: 39,
    color: "Noir",
    colorimg: {
      src1: "1 - Nike Air Force 1 '07 [Noir].webp",
      src2: "1 - Nike Air Force 1 '07 [Blanc].webp",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Nike Dunk Low.webp",
      alt: "Nike Dunk Low",
    },
    reference: "FD0661-100",
    name: "Nike Dunk Low",
    Description:
      "Affirmez votre style basketball rétro avec la Nike Dunk Low. Créée pour les parquets mais revisitée pour le quotidien, l'icône du basketball des années 80 revient avec une empeigne en cuir résistant et des logos Swoosh superposés inspirés des graffitis. Inspiré des codes vintage, son col bas rembourré offre un confort exceptionnel pour jouer sans limites.",
    size: 39,
    color: "Gris",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Nike Air Force 1 '07 LV8.webp",
      alt: "Nike Air Force 1 '07 LV8",
    },
    reference: "FB8971-100",
    name: "Nike Air Force 1 '07 LV8",
    Description:
      "La légende perdure avec la Nike Air Force 1 '07 LV8. Alliant le confort d'une sneaker taillée pour les parquets et le style d'une chaussure du quotidien, cette légende du basket revisite la AF1 avec brio. La conception emblématique des années 80 s'associe à un cuir blanc éclatant et à des logos Swoosh réfléchissants pour un style 100 % basket.",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 129.99,
  },
  {
    img: {
      src: "1 - Air Jordan 1 Mid [Blanc].webp",
      alt: "Air Jordan 1 Mid",
    },
    reference: "554724-136",
    name: "Air Jordan 1 Mid",
    Description:
      "Inspirée de la AJ1 d’origine, la Air Jordan 1 Mid permet aux fans de suivre les traces de MJ. Grâce à sa nouvelle couleur, ce modèle aux matières classiques et épurées revient dans la tendance.",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "1 - Air Jordan 1 Mid [Blanc].webp",
      src2: "1 - Air Jordan 1 Mid [Noir].webp",
      src3: "",
    },
    price: 129.99,
  },
  {
    img: {
      src: "1 - Air Jordan 1 Low.webp",
      alt: "Air Jordan 1 Low",
    },
    reference: "553558-412",
    name: "Air Jordan 1 Low",
    Description:
      "Inspirée du modèle d'origine lancé en 1985, la Air Jordan 1 Low affiche un look classique et épuré, à la fois familier et très actuel. Avec son design emblématique qui s'associe à toutes vos tenues, cette sneaker vous permet de rester au top en toutes circonstances.",
    size: 39,
    color: "Bleu",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Nike Air Max Excee.webp",
      alt: "Nike Air Max Excee",
    },
    reference: "CD4165-003",
    name: "Nike Air Max Excee",
    Description:
      "Inspirée de la Nike Air Max 90, la Nike Air Max Excee réinvente un classique et le présente sous un nouveau jour. Les lignes allongées et les proportions déformées sur l'empeigne rehaussent son look des années 90 d'une touche moderne aux accents stellaires.",
    size: 39,
    color: "Noir",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Nike Air More Uptempo '96.webp",
      alt: "Nike Air More Uptempo '96",
    },
    reference: "FB1380-100",
    name: "Nike Air More Uptempo '96",
    Description:
      "Audacieuse et originale, elle fait partie de la famille AIR ! Avec un design inspiré du basketball de haut vol et des graffitis des années 90, cette sneaker ne passera pas inaperçue en dehors des terrains. De plus, les unités MaxAir à l'avant-pied, au milieu du pied et au talon offrent un amorti exceptionnel pour un look à la fois stylé et confortable.",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 179.99,
  },
  {
    img: {
      src: "1 - Nike Wearallday.webp",
      alt: "Nike Wearallday",
    },
    reference: "CJ1682-004",
    name: "Nike Wearallday",
    Description:
      "Que ressentiriez-vous si vous laciez une paire de nuages à vos pieds ? Vous ne le saurez jamais, mais nous croyons que la Nike WearAllDay s'en approche vraiment. Rembourrée et moelleuse autour de la cheville, avec une languette épaisse et duveteuse ainsi qu'une mousse incroyablement douce sous le pied, la chaussure d'inspiration sportive est le confort incarné. Le mesh sur l’empeigne assure une respirabilité accrue et durable, tandis que la semelle extérieure en caoutchouc à motif gaufré vous offre une bonne adhérence au quotidien.",
    size: 39,
    color: "Noir/Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 69.99,
  },
];

const availableProductsWoman = [
  {
    img: {
      src: "1 - Nike Air Force 1 '07 Next Nature [Blanc].webp",
      alt: "Nike Air Force 1 '07 Next Nature",
    },
    reference: "DC9486-101",
    name: "Nike Air Force 1 '07 Next Nature",
    Description:
      "Place au jeu. Confectionnée avec au moins 20 % de son poids en matières recyclées, elle revisite une légende de l'histoire des sneakers avec un cuir synthétique.",
    size: 42,
    color: "2 Couleurs",
    colorimg: {
      src1: "1 - Nike Air Max Terrascape Plus [Noir].webp",
      src2: "1 - Nike Air Max Terrascape Plus [Blanc].webp",
      src3: "1 - Nike Air Max Terrascape Plus [Tricolor].webp",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Air Jordan 1 Elevate Low SE.webp",
      alt: "Nike Air Force 1 '07",
    },
    reference: "DV0788-001",
    name: "Nike Air Force 1 '07",
    Description:
      "La légende perdure avec cette chaussure emblématique du basketball. Alliant le confort d'une sneaker taillée pour les parquets et le style d'une chaussure du quotidien, elle revisite ses éléments les plus emblématiques : conception inspirée des années 80, détails audacieux et style « 100 % basket ».",
    size: 39,
    color: "Noir",
    colorimg: {
      src1: "1 - Nike Air Force 1 '07 [Noir].webp",
      src2: "1 - Nike Air Force 1 '07 [Blanc].webp",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Nike Air Max Dawn Next Nature.webp",
      alt: "Nike Dunk Low",
    },
    reference: "FD0661-100",
    name: "Nike Dunk Low",
    Description:
      "Affirmez votre style basketball rétro avec la Nike Dunk Low. Créée pour les parquets mais revisitée pour le quotidien, l'icône du basketball des années 80 revient avec une empeigne en cuir résistant et des logos Swoosh superposés inspirés des graffitis. Inspiré des codes vintage, son col bas rembourré offre un confort exceptionnel pour jouer sans limites.",
    size: 39,
    color: "Gris",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Nike Go FlyEase [Beige].webp",
      alt: "Nike Air Force 1 '07 LV8",
    },
    reference: "FB8971-100",
    name: "Nike Air Force 1 '07 LV8",
    Description:
      "La légende perdure avec la Nike Air Force 1 '07 LV8. Alliant le confort d'une sneaker taillée pour les parquets et le style d'une chaussure du quotidien, cette légende du basket revisite la AF1 avec brio. La conception emblématique des années 80 s'associe à un cuir blanc éclatant et à des logos Swoosh réfléchissants pour un style 100 % basket.",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 129.99,
  },
  {
    img: {
      src: "1 - Nike Air Max Plus PRM.webp",
      alt: "Air Jordan 1 Mid",
    },
    reference: "554724-136",
    name: "Air Jordan 1 Mid",
    Description:
      "Inspirée de la AJ1 d’origine, la Air Jordan 1 Mid permet aux fans de suivre les traces de MJ. Grâce à sa nouvelle couleur, ce modèle aux matières classiques et épurées revient dans la tendance.",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "1 - Air Jordan 1 Mid [Blanc].webp",
      src2: "1 - Air Jordan 1 Mid [Noir].webp",
      src3: "",
    },
    price: 129.99,
  },
  {
    img: {
      src: "1 - Nike Dunk High.webp",
      alt: "Air Jordan 1 Low",
    },
    reference: "553558-412",
    name: "Air Jordan 1 Low",
    Description:
      "Inspirée du modèle d'origine lancé en 1985, la Air Jordan 1 Low affiche un look classique et épuré, à la fois familier et très actuel. Avec son design emblématique qui s'associe à toutes vos tenues, cette sneaker vous permet de rester au top en toutes circonstances.",
    size: 39,
    color: "Bleu",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Air Jordan 11 CMFT Low [Blanc].webp",
      alt: "Nike Air Max Excee",
    },
    reference: "CD4165-003",
    name: "Nike Air Max Excee",
    Description:
      "Inspirée de la Nike Air Max 90, la Nike Air Max Excee réinvente un classique et le présente sous un nouveau jour. Les lignes allongées et les proportions déformées sur l'empeigne rehaussent son look des années 90 d'une touche moderne aux accents stellaires.",
    size: 39,
    color: "Noir",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 119.99,
  },
  {
    img: {
      src: "1 - Nike SB Chron 2.webp",
      alt: "Nike Air More Uptempo '96",
    },
    reference: "FB1380-100",
    name: "Nike Air More Uptempo '96",
    Description:
      "Audacieuse et originale, elle fait partie de la famille AIR ! Avec un design inspiré du basketball de haut vol et des graffitis des années 90, cette sneaker ne passera pas inaperçue en dehors des terrains. De plus, les unités MaxAir à l'avant-pied, au milieu du pied et au talon offrent un amorti exceptionnel pour un look à la fois stylé et confortable.",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 179.99,
  },
  {
    img: {
      src: "1 - NikeCourt Zoom Pro [Blanc].webp",
      alt: "Nike Wearallday",
    },
    reference: "CJ1682-004",
    name: "Nike Wearallday",
    Description:
      "Que ressentiriez-vous si vous laciez une paire de nuages à vos pieds ? Vous ne le saurez jamais, mais nous croyons que la Nike WearAllDay s'en approche vraiment. Rembourrée et moelleuse autour de la cheville, avec une languette épaisse et duveteuse ainsi qu'une mousse incroyablement douce sous le pied, la chaussure d'inspiration sportive est le confort incarné. Le mesh sur l’empeigne assure une respirabilité accrue et durable, tandis que la semelle extérieure en caoutchouc à motif gaufré vous offre une bonne adhérence au quotidien.",
    size: 39,
    color: "Noir/Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 69.99,
  },
];

let searchbar = document.querySelector("#research");
searchbar.addEventListener("input", function () {
  displayAvailableProducts();
});

// DISPLAY PRODUCTS (((CART)))
let articlesSection = document.querySelector(".gallery");

// function displayAvailableProducts(products) {
//   articlesSection.innerHTML = "";
//   for (let i = 0; i < products.length; i++) {
//     let productNameUC = products[i].name.toUpperCase();
//     let searchUC = searchbar.value.toUpperCase();
//     if (productNameUC.includes(searchUC.toUpperCase())) {
//       let templateArticles = document.createElement("div");
//       templateArticles.innerHTML = `

//     <img src="./img/articlegalery/${products[i].img.src}" alt="${products[i].img.alt}" />
//     <div class="infos">
//         <div class="title">
//             <p>${products[i].reference}</p>
//             <h4>${products[i].name}</h4>
//         </div>
//         <div class="description">
//             <ul>
//                 <li>Taille : ${products[i].size}</li>
//                 <li>Couleur : ${products[i].color}</li>
//                 <li>Composition 100% : ${products[i].composition}</li>
//             </ul>
//         </div>
//         <div id="btnAdd">
//             <button onclick="addProductToCart(${i})" type="button">Ajouter au panier</button>
//         </div>
//     </div>
//     <div class="quantity_price">
//         <p><b>${products[i].price}€</b></p>
//     </div>
// `;
//       articlesSection.append(templateArticles);
//     }
//   }
// }

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

// DISPLAY PRODUCTS FOR MAN
let gallery = document.querySelector(".gallery");

function displayAvailableProducts(products) {
  gallery.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let productNameUC = products[i].name.toUpperCase();
    let searchUC = searchbar.value.toUpperCase();
    if (productNameUC.includes(searchUC.toUpperCase())) {
      let templateArticles = document.createElement("div");
      templateArticles.innerHTML = `

        <img
          class="product"
          src="/img/articlegalery/${products[i].img.src}"
          alt="${products[i].img.alt}"
        />
        <div class="description">
          <div class="productColor">
            <img
              src="/img/couleursecondaire/${products[i].colorimg.src1}"
              alt=""
            />
            <img
              src="/img/couleursecondaire/${products[i].colorimg.src2}"
              alt=""
            />
            <img
              src="/img/couleursecondaire/${products[i].colorimg.src3}"
              alt=""
            />
          </div>
          <p>${products[i].name}</p>
          <p><b>${products[i].price}€</b></p>
        </div>
      </div>`;

      gallery.append(templateArticles);
    }
  }
}
// TOGGLE MENU
const burgerMenu = document.querySelector(".burger");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

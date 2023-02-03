// VARIABLES GLOBALES
let cart = [];

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
    price: 69.99,
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

const availableProductsChild = [
  {
    img: {
      src: "1 - Jordan Flight Origin 4.webp",
      alt: "Jordan Flight Origin 4",
    },
    reference: "921201-100",
    name: "Jordan Flight Origin 4",
    Description:
      "La chaussure Jordan Flight Origin 4 pour Enfant plus âgé offre un confort durable avec une empeigne procurant un bon maintien fabriquée à partir de matériaux de première qualité et un amorti souple sous le pied.",
    size: 42,
    color: "Blanc/Noir",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 89.99,
  },
  {
    img: {
      src: "1 - Nike Court Borough Low 2 SE.webp",
      alt: "Nike Court Borough Low 2 SE",
    },
    reference: "DQ0493-100",
    name: "Nike Court Borough Low 2 SE",
    Description:
      "La Nike Court Borough Low 2 offre la puissance du rose à toutes les futures stars du basketball. Des lacets au Swoosh, en passant par la semelle, le rose est plus qu'une couleur : c'est un état d'esprit ! Cette paire résistante affiche un look et un confort classiques, qui en font un modèle parfait pour jouer tous les jours.",
    size: 39,
    color: "Blanc/Rose mousse",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 39.99,
  },
  {
    img: {
      src: "1 - Nike Dunk Low.webp",
      alt: "Nike Dunk Low",
    },
    reference: "FD1233-002",
    name: "Nike Dunk Low",
    Description:
      "Avec la Nike Dunk Low, votre enfant brillera comme une All-Star. Cette chaussure a un passé incroyable. Elle a d'abord été adoptée par les joueurs de basketball dans les années 80. Avant de devenir une icône du skateboard. Pour être aujourd'hui considérée comme une légende du streetwear. Le cuir résistant permet à ces sneakers de durer et la semelle en caoutchouc offre une meilleure adhérence qui permet aux enfants de jouer n'importe où, des trottoirs aux terrains de jeu, en passant par le parc.",
    size: 39,
    color: "Gris",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 59.99,
  },
  {
    img: {
      src: "1 - Nike Air Max Bolt.webp",
      alt: "Nike Air Max Bolt",
    },
    reference: "CW1627-100",
    name: "Nike Air Max Bolt",
    Description:
      "La Nike Air Max Bolt se distingue par son unité Air difficile à manquer. Elle offre un amorti moelleux et un bon maintien (grâce à ses lacets élastiques !) pour accompagner votre enfant dans toutes ses aventures",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 64.99,
  },
  {
    img: {
      src: "1 - Jordan Flight Origin 4[Jeune enfant].webp",
      alt: "Jordan Flight Origin 4",
    },
    reference: "921197-100",
    name: "Jordan Flight Origin 4",
    Description:
      "La chaussure Jordan Flight Origin 4 pour Jeune enfant offre un confort durable avec une empeigne procurant un bon maintien fabriquée à partir de matériaux premium et un amorti souple sous le pied.",
    size: 39,
    color: "Blanc",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 64.99,
  },
  {
    img: {
      src: "1 - Nike Air Zoom Crossover.webp",
      alt: "Nike Air Zoom Crossover",
    },
    reference: "DC5216-004",
    name: "Nike Air Zoom Crossover",
    Description:
      "Notre première chaussure de basketball inspirée des plus grandes joueuses de la ligue a été conçue pour TOUTES et TOUS les jeunes athlètes qui veulent perfectionner leur jeu. Tirant son nom d'un mouvement célèbre, la Nike Air Zoom Crossover apporte plus de rebond sur le terrain grâce à l'unité Zoom Air, pour survoler votre match.",
    size: 39,
    color: "Noir",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 84.99,
  },
  {
    img: {
      src: "1 - Nike Team Hustle D 10 FlyEase [Noir].webp",
      alt: "Nike Team Hustle D 10 FlyEase",
    },
    reference: "DD7303-004",
    name: "Nike Team Hustle D 10 FlyEase",
    Description:
      "Pour les matchs entre amis ou la compétition, la Nike Team Hustle D 10 FlyEase a été conçue pour booster les joueurs de tous niveaux. Avec une adhérence optimisée sur la semelle, un système d'enfilage ultra-facile et une conception alliant durabilité et maintien, cette chaussure est votre meilleure alliée pour marquer des paniers ou remonter le terrain à toute vitesse.",
    size: 39,
    color: "Noir",
    colorimg: {
      src1: "1 - Nike Team Hustle D 10 FlyEase - [Rouge].webp",
      src2: "",
      src3: "",
    },
    price: 54.99,
  },
  {
    img: {
      src: "1 - Nike Huarache Run.webp",
      alt: "Nike Huarache Run",
    },
    reference: "DX3065-100",
    name: "Nike Huarache Run",
    Description:
      "En 1991, les publicités mémorables scandaient : « Avez-vous chouchouté vos pieds aujourd'hui ? ». Aujourd'hui encore, l'inimitable Nike Huarache Run inspirée des chaussons de ski nautique, enveloppe ton pied, pour une tenue confortable. Sans oublier sa sangle emblématique au talon. Attrapez-la et glissez votre pied directement dans la chaussure. Ajustée, confortable et classique, elle est conçue pour être portée au quotidien.",
    size: 39,
    color: "Blanc/Vert gorge/Beige clair/Orange sécurité",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 114.99,
  },
  {
    img: {
      src: "1 - Nike Air Max Plus 3.webp",
      alt: "Nike Air Max Plus 3",
    },
    reference: "FB8026-001",
    name: "Nike Air Max Plus 3",
    Description:
      "Dépensez-vous sans compter sur le terrain de jeu avec la Nike Air Max Plus 3. Dotées de la technologie Tuned Air visible sous le pied, ces sneakers apportent une touche futuriste à la Air Max Plus. Le mesh respirant et les détails en plastique sur l'empeigne rendent hommage au modèle d'origine et les lignes futuristes autour du talon les ancrent dans un style ultramoderne.",
    size: 39,
    color: "Noir/Gris loup/Volt",
    colorimg: {
      src1: "",
      src2: "",
      src3: "",
    },
    price: 149.99,
  },
];

let searchbar = document.querySelector("#research");
searchbar.addEventListener("input", function () {
  displayAvailableProducts();
});

function displayProductsInCart() {
  let articlesSection = document.querySelector("section#articles");
  articlesSection.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    let templateArticles = document.createElement("div");
    templateArticles.classList.add("shoes");
    templateArticles.innerHTML = `
    
    <img src="./img/1 - Nike Air Max Terrascape Plus/Noir/${cart[i].img.src}" alt="${cart[i].img.alt}" />
    <div class="infos">
        <div class="title">
            <p>${cart[i].reference}</p>
            <h4>${cart[i].name}</h4>
        </div>
        <div class="descriptionCart">
            <ul>
                <li>Taille : ${cart[i].size}</li>
                <li>Couleur : ${cart[i].color}</li>
            </ul>
        </div>
    </div>
    <div class="quantity_price">
        <p><b>${cart[i].price}€</b></p>
    </div>
`;
    articlesSection.append(templateArticles);
  }
}

// ADD PRODUCT
function addProductToCart(product) {
  // let getValue = document.getElementById("quantity").selectedOptions[0].value;
  // getValue = parseInt(getValue);

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
  displayCart();
  displayProductsInCart();
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

// DISPLAY TOTAL AMOUNT CART
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

// DELETE PRODUCT CART
function removeProductFromCart(productId) {
  cart.splice(productId, 1);
  displayCart();
  displayTotalAmount();
}

// DISPLAY GALLERY PRODUCTS
let gallery = document.querySelector(".gallery");

function displayAvailableProducts(products) {
  gallery.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let productNameUC = products[i].name.toUpperCase();
    let searchUC = searchbar.value.toUpperCase();
    if (productNameUC.includes(searchUC.toUpperCase())) {
      let templateArticles = document.createElement("a");
      templateArticles.href = "articles.html";
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
  updateNbArt(products.length);
}

// TOGGLE MENU
const burgerMenu = document.querySelector("#burger");
const navMenu = document.querySelector("nav ul");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("nav-open");
});

// NOMBRE DE PRODUITS PAR PAGE
function updateNbArt(nbArt) {
  let articleNumber = document.querySelector(".nbArt span");

  if (nbArt == 1) {
    articleNumber.innerHTML = `<span style='font-weight:500'> ${nbArt} article</span>`;
  } else if (nbArt == 0) {
    articleNumber.innerHTML = `<span style='font-weight:500; font-size:17px'><br>Nous n'avons plus d'articles pour le moment...`;
  } else {
    articleNumber.innerHTML = `<span style='font-weight:500;'>${nbArt} articles</span>`;
  }
}

// DISPLAY ARTICLE TYPE

let articleType = document.querySelector("section#articleType");

// function displayArticle(products) {
// articleType.innerHTML = ``;
// for (let i = 0; i < products.length; i++) {
// console.log("bjr");
// let templateArticleType = document.createElement("div");
// templateArticleType.innerHTML = `
//   <div class="galeryShoes">
//   <img
//     src="img/1 - Nike Air Max Terrascape Plus/Blanc/1 - Nike Air Max Terrascape Plus [Blanc].webp"
//     alt=""
//   />
//   <img
//     src="img/1 - Nike Air Max Terrascape Plus/Blanc/2 - Nike Air Max Terrascape Plus - dessous [Blanc].webp"
//     alt=""
//   />
//   <img
//     src="img/1 - Nike Air Max Terrascape Plus/Blanc/3 - Nike Air Max Terrascape Plus - dessus [Blanc].webp"
//     alt=""
//   />
//   <img
//     src="img/1 - Nike Air Max Terrascape Plus/Blanc/4 - Nike Air Max Terrascape Plus - coté [Blanc].webp"
//     alt=""
//   />
// </div>

// <aside>
//   <div class="titleArticle">
//     <h2>Nike Dunk Low</h2>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec in
//       nulla porta lorem rhoncus feugiat.
//     </p>
//     <p>69.99 €</p>
//   </div>

//   <div class="color">
//     <h3>Couleurs</h3>
//     <div class="picture">

//       <img onclick ="pictureColorChange(0)"src="img/1 - Nike Air Max Terrascape Plus/Blanc/1 - Nike Air Max Terrascape Plus [Blanc].webp" alt="" />
//       <img onclick ="pictureColorChange(1)"
//         src="img/1 - Nike Air Max Terrascape Plus/Noir/1 - Nike Air Max Terrascape Plus [Noir].webp"
//         alt=""
//       />
//       <img onclick ="pictureColorChange(2)"
//         src="img/1 - Nike Air Max Terrascape Plus/Tricolor/1 - Nike Air Max Terrascape Plus [Tricolor].webp"
//         alt=""
//       />

//     </div>
//   </div>

//   <div class="size">
//     <h3>Sélectionner une taille</h3>
//     <div class="btnSize">
//       <button>EU 38</button>
//       <button>EU 39</button>
//       <button>EU 40</button>
//       <button>EU 41</button>
//       <button>EU 42</button>
//       <button>EU 43</button>
//       <button>EU 44</button>
//       <button>EU 45</button>
//       <button>EU 46</button>
//       <button>EU 47</button>
//       <button>EU 48</button>
//       <button>EU 49</button>
//     </div>
//   </div>
//   <button onclick="addProductToCart()" id="addToCart">Ajouter au panier</button>
// </aside>`;
// articleType.append(templateArticleType);
// }
// }

// DISPLAY SHOE COLOR

function pictureColorChange(shoeColor) {
  let images = document.querySelectorAll(".galeryShoes img");
  let firstBorder = document.querySelector(".picture img:first-child");
  let secondBorder = document.querySelector(".picture img:nth-child(2)");
  let thirdBorder = document.querySelector(".picture img:last-child");

  if (shoeColor == 0) {
    firstBorder.style.border = "1px solid black";
    secondBorder.style.border = "none";
    thirdBorder.style.border = "none";

    images[0].src =
      "img/1 - Nike Air Max Terrascape Plus/Blanc/1 - Nike Air Max Terrascape Plus [Blanc].webp";
    images[1].src =
      "img/1 - Nike Air Max Terrascape Plus/Blanc/2 - Nike Air Max Terrascape Plus - dessous [Blanc].webp";
    images[2].src =
      "img/1 - Nike Air Max Terrascape Plus/Blanc/3 - Nike Air Max Terrascape Plus - dessus [Blanc].webp";
    images[3].src =
      "img/1 - Nike Air Max Terrascape Plus/Blanc/4 - Nike Air Max Terrascape Plus - coté [Blanc].webp";
  } else if (shoeColor == 1) {
    firstBorder.style.border = "none";
    secondBorder.style.border = "1px solid black";
    thirdBorder.style.border = "none";
    images[0].src =
      "img/1 - Nike Air Max Terrascape Plus/Noir/1 - Nike Air Max Terrascape Plus [Noir].webp";
    images[1].src =
      "img/1 - Nike Air Max Terrascape Plus/Noir/2 - Nike Air Max Terrascape Plus - Dessous[Noir].webp";
    images[2].src =
      "img/1 - Nike Air Max Terrascape Plus/Noir/3 - Nike Air Max Terrascape Plus - dessus[Noir].webp";
    images[3].src =
      "img/1 - Nike Air Max Terrascape Plus/Noir/4 - Nike Air Max Terrascape Plus - coté [Noir].webp";
  } else {
    firstBorder.style.border = "none";
    secondBorder.style.border = "none";
    thirdBorder.style.border = "1px solid black";
    images[0].src =
      "img/1 - Nike Air Max Terrascape Plus/Tricolor/1 - Nike Air Max Terrascape Plus [Tricolor].webp";
    images[1].src =
      "img/1 - Nike Air Max Terrascape Plus/Tricolor/2 - Nike Air Max Terrascape Plus - dessous [Tricolor].webp";
    images[2].src =
      "img/1 - Nike Air Max Terrascape Plus/Tricolor/3 - Nike Air Max Terrascape Plus - dessus[Tricolor].webp";
    images[3].src =
      "img/1 - Nike Air Max Terrascape Plus/Tricolor/4 - Nike Air Max Terrascape Plus - coté[Tricolor].webp";
  }
}

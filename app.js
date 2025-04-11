const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "PAINTINGS",
    price: "11,000",
    colors: [
      {
        code: "black",
        img: "./img/painting.jpg",
      },
      {
        code: "darkblue",
        img: "./img/PAINTING.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "ARCHITECTURE",
    price: "13,000",
    colors: [
      {
        code: "lightgray",
        img: "./img/ARCHITECTURE.jpeg",
      },
      {
        code: "green",
        img: "./img/arch.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "SCULPTURE",
    price: "14,000",
    colors: [
      {
        code: "lightgray",
        img: "./img/SCULPTURE.jpeg",
      },
      {
        code: "green",
        img: "./img/scu.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "LITERATURE",
    price: "13,000",
    colors: [
      {
        code: "black",
        img: "./img/lit.jpeg",
      },
      {
        code: "lightgray",
        img: "./img/LITERATURE.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "MUSIC",
    price: "16,00,000",
    colors: [
      {
        code: "gray",
        img: "./img/mu.jpeg",
      },
      {
        code: "black",
        img: "./img/MUSIC.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
// Automatic product change
setInterval(() => {
  const currentColorIndex = choosenProduct.colors.indexOf(choosenProduct.colors.find(color => color.img === currentProductImg.src));
  const nextColorIndex = (currentColorIndex + 1) % choosenProduct.colors.length;
  const nextColor = choosenProduct.colors[nextColorIndex];

  currentProductImg.src = nextColor.img;
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
  });
}, 5000);

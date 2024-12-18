const MENUITEMS = document.querySelectorAll(".text-color");
const MENU= document.querySelectorAll(".color-label");
const GAMINGMENU = document.querySelector("#gaming");
const SUPPORTMENU = document.querySelector("#support");
const IMAGES = document.querySelectorAll("img");
const menu = document.querySelectorAll(".menu");
const items = document.querySelectorAll(".text-decoration");
let isHovering = false; 



for (let i = 0; i < 4; i++) {
  const IMG = IMAGES[i];
  const ORGINAL = IMG.src;
  const HOVER = IMG.src.replace(".svg", "-hover.svg");

  IMG.addEventListener("mouseenter", function () {
    IMG.setAttribute("src", HOVER); 
  });

  IMG.addEventListener("mouseleave", function () {
    IMG.setAttribute("src", ORGINAL);
  });
}


for (let i = 0; i < MENUITEMS.length; i++) {
  const ITEM = MENUITEMS[i];
  ITEM.addEventListener("mouseenter", function () {
    for (let k = 0; k < MENUITEMS.length; k++) {
      MENUITEMS[k].classList.remove("active");
    }

    ITEM.classList.add("active");

    if (ITEM.innerText === "Gaming") {
      GAMINGMENU.classList.add("show");
    }
  });

  ITEM.addEventListener("mouseleave", function () {
    if (ITEM.innerText === "Gaming") {
      setTimeout(function () {
        if (!isHovering) {
          GAMINGMENU.classList.remove("show");
          ITEM.classList.remove("active");
        }
      }, 100);
    } else {
      GAMINGMENU.classList.remove("show");
      ITEM.classList.remove("active");
    }
  });
}

GAMINGMENU.addEventListener("mouseenter", function () {
  isHovering = true; 
  for (let i = 0; i < MENUITEMS.length; i++) {
    if (MENUITEMS[i].innerText === "Gaming") {
      MENUITEMS[i].classList.add("active");
      break;
    }
  }
  GAMINGMENU.classList.add("show");
});
GAMINGMENU.addEventListener("mouseleave", function () {
  isHovering = false;
  for (let i = 0; i < MENUITEMS.length; i++) {
    if (MENUITEMS[i].innerText === "Gaming") {
      MENUITEMS[i].classList.remove("active");
      break;
    }
  }
  GAMINGMENU.classList.remove("show");
});

for (let i = 0; i < MENU.length; i++) {
  const ITEM = MENU[i];
  ITEM.addEventListener("mouseenter", function () {
    for (let k = 0; k < MENU.length; k++) {
      MENU[k].classList.remove("active");
    }

    ITEM.classList.add("active");

    if (ITEM.innerText === "Support") {
      SUPPORTMENU.classList.add("show");
    }
  });

  ITEM.addEventListener("mouseleave", function () {
    if (ITEM.innerText === "Support") {
      setTimeout(function () {
        if (!isHovering) {
          SUPPORTMENU.classList.remove("show");
          ITEM.classList.remove("active");
        }
      }, 100);
    } else {
      SUPPORTMENU.classList.remove("show");
      ITEM.classList.remove("active");
    }
  });
}

SUPPORTMENU.addEventListener("mouseenter", function () {
  isHovering = true; 
  for (let i = 0; i < MENU.length; i++) {
    if (MENU[i].innerText === "Support") {
      MENU[i].classList.add("active");
      break;
    }
  }
  SUPPORTMENU.classList.add("show");
});

SUPPORTMENU.addEventListener("mouseleave", function () {
  isHovering = false;
  for (let i = 0; i < MENU.length; i++) {
    if (MENU[i].innerText === "Support") {
      MENU[i].classList.remove("active");
      break;
    }
  }
  SUPPORTMENU.classList.remove("show");
});


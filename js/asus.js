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
const menubar=document.querySelectorAll(".menubar");
const titel=document.querySelectorAll(".cruser");

/*------------------------------------------*/
items[0].addEventListener("mouseenter",function(){
  menu[1].classList.remove("show");
  menu[2].classList.remove("show");
  menu[3].classList.remove("show");
  menu[4].classList.remove("show");
  menu[5].classList.remove("show");
  menu[0].classList.add("show");
  titel[0].classList.add("defult");
  isHovering=false;
  titel[0].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[0].classList.remove("defult");
    titel[1].classList.remove("defult");
    titel[2].classList.remove("defult");
    titel[3].classList.remove("defult");
    menubar[1].innerHTML=` <ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Zenfon</a></li>
              <li class="menu-padding color-item"><a href="">ROG Phone</a></li>
              <li class="menu-padding color-item"><a href="">Smartphone for Snapdragon Insiders</a></li>
            </ul>`;
    menubar[2].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/zenfon.webp" alt="" />
                    <p>Zenfon 11 Ultra</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/rog.webp" alt="" />
                    <p>ROG Phone 9</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[2].addEventListener("mouseenter",function(){
      titel[0].classList.add("cruser-hover");});
    menubar[2].addEventListener("mouseleave",function(){
      titel[0].classList.remove("cruser-hover");});
  });
  titel[0].addEventListener("mouseleave",function(){
    titel[0].classList.add("defult");
  });
  /*-------------------------------*/
  titel[1].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[0].classList.remove("defult");
    titel[1].classList.remove("defult");
    titel[2].classList.remove("defult");
    titel[3].classList.remove("defult");
    menubar[1].innerHTML=`<ul>
              <li id="titer" class="menu-padding">FEATURED</li>
              <li class="menu-padding color-item"><a href="">ASUS VivoWatch</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Handheld Ultrasound Solution</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Endoscophy AI EndoAim</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Blood Pressure App</a></li>
            </ul>`
    menubar[2].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/6.webp" alt="" />
                    <p>ASUS VivoWatch 6(HC-D06)</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/5.webp" alt="" />
                    <p>ASUS VivoWatch 5(HC-B05)</p>
                  </article>
                </a>
              </li>
            </ul>`
  });
  titel[1].addEventListener("mouseleave",function(){
    titel[1].classList.add("defult");
  });
  /*------------------------------*/
  titel[2].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[0].classList.remove("defult");
    titel[1].classList.remove("defult");
    titel[2].classList.remove("defult");
    titel[3].classList.remove("defult");
    menubar[1].innerHTML=`<ul>
              <li id="titer" class="menu-padding">FEATURED</li>
              <li class="menu-padding color-item"><a href="">ROG Ally </a></li>
              <li class="menu-padding color-item"><a href="">ROG Ally travel Case</a></li>
              <li class="menu-padding color-item"><a href="">ROG Ally X</a></li>
              <li class="menu-padding color-item"><a href="">ROG Ally Permium Hard Case</a></li>
            </ul>`
    menubar[2].innerHTML=``
  });
  titel[2].addEventListener("mouseleave",function(){
    titel[2].classList.add("defult");
  });
  /*------------------------------*/
  titel[3].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[0].classList.remove("defult");
    titel[1].classList.remove("defult");
    titel[2].classList.remove("defult");
    titel[3].classList.remove("defult");
    menubar[1].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item"><a href="">
              <img src="../images/asus/case.svg" alt="" class="color-icon"> Case and Protection</a></li>
              <li class="menu-padding color-item"><a href="">
              <img src="../images/asus/adapters.svg" alt="" class="color-icon"> Adapters and Chargers</a</li>
              <li class="menu-padding color-item"><a href="">
              <img src="../images/asus/wireless.svg" alt="" class="color-icon"> Wireless Chaeger</a></li>
              <li class="menu-padding color-item"><a href="">
              <img src="../images/asus/powerbank.svg" alt="" class="color-icon"> Power Banks</a></li>
              <li class="menu-padding color-item"><a href="">
              <img src="../images/asus/docks.svg" alt="" class="color-icon"> Docks Dongles and Cables</a></li>
              <li class="menu-padding color-item"><a href="">
              <img src="../images/asus/headsets.svg" alt="" class="color-icon"> Headsets</a></li>
              <li class="menu-padding color-item"><a href="">
              <img src="../images/asus/gimbal.svg" alt="" class="color-icon"> Gimbal</a></li>
            </ul>`
    menubar[2].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/glass.webp" alt="" />
                    <p>Zenfone 11 UItra Antibacterial Glass Screen Protector(HC-D06)</p>
                  </article>
                </a>
              </li>
            </ul>`
  });
  titel[3].addEventListener("mouseleave",function(){
    titel[3].classList.add("defult");
  }); 
});
/*---------------------------------------*/





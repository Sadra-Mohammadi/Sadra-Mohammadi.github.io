
const menubar=document.querySelectorAll(".menubar");
const titel=document.querySelectorAll(".cruser");

items[0].addEventListener("mouseenter",function(){
  menu[1].classList.remove("show");
  menu[2].classList.remove("show");
  menu[3].classList.remove("show");
  menu[4].classList.remove("show");
  menu[5].classList.remove("show");
  menu[0].classList.add("show");
  titel[0].classList.add("active");
  titel[0].classList.add("defult");
  isHovering = false;
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
items[1].addEventListener("mouseenter",function(){
  menu[0].classList.remove("show");
  menu[2].classList.remove("show");
  menu[3].classList.remove("show");
  menu[4].classList.remove("show");
  menu[5].classList.remove("show");
  menu[1].classList.add("show");
  titel[4].classList.add("defult");
  isHovering=false;
  titel[4].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/copilet.svg" alt="" class="color-icon"> Copilot+ PC devices</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/tabletandlaptop.svg" alt="" class="color-icon">  Tablet and 2-in-1 laptop</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/thin.svg" alt="" class="color-icon"> Thin and light</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/high.svg" alt="" class="color-icon"> High Perfomance</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/everyday.svg" alt="" class="color-icon"> Everyday use</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/oled.svg" alt="" class="color-icon"> OLED dispaly</a></li>
            </ul>`;
    menubar[5].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">Zenbook</a></li>
              <li class="menu-padding color-item"><a href="">Vivobook</a></li>
              <li class="menu-padding color-item"><a href="">Chromebook</a></li>
            </ul>`;
    menubar[6].innerHTML=` <ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/s16.webp" alt="" />
                    <p>ASUS Zenbook S 16 (UM5606); Copilot+ PC</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/s15.webp" alt="" />
                    <p>ASUS Vivobook S 15 (S5507); Copilot+ PC</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[4].addEventListener("mouseleave",function(){
    titel[4].classList.add("defult");
  });
  /*-------------------------------*/
  titel[5].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/2in1.svg" alt="" class="color-icon"> 2-in-1 laptop</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/thin.svg" alt="" class="color-icon">  Thin and ligth</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/discrete.svg" alt="" class="color-icon"> Discrete graphics</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/always.svg" alt="" class="color-icon"> Always connected</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/oled.svg" alt="" class="color-icon"> OLED dispaly</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/long.svg" alt="" class="color-icon"> Long battery life</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/everyday.svg" alt="" class="color-icon"> Everyday use</a></li>
            </ul>`
    menubar[5].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Expertbook</a></li>
              <li class="menu-padding color-item"><a href="">Chromebook</a></li>
            </ul>`
    menubar[6].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/b5.webp" alt="" />
                    <p>ASUS ExpertBook B5 (B5404)</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/cx54.webp" alt="" />
                    <p>ASUS ExpertBook CX54 Chromebook Plus Enterpris (CX5403)</p>
                  </article>
                </a>
              </li>
            </ul>`
  });
  titel[5].addEventListener("mouseleave",function(){
    titel[5].classList.add("defult");
  });
  /*------------------------------*/
  titel[6].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/video.svg" alt="" class="color-icon"> Video editing</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/streming.svg" alt="" class="color-icon">  Streaming</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/photo.svg" alt="" class="color-icon"> Photograpy</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/graphic.svg" alt="" class="color-icon"> Graphic design</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/game.svg" alt="" class="color-icon"> Animation and game design</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/product.svg" alt="" class="color-icon"> Product design</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/archive.svg" alt="" class="color-icon"> Architecture</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/oled.svg" alt="" class="color-icon"> OLED dispaly</a></li>
            </ul>`
    menubar[5].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">Zenbook</a></li>
              <li class="menu-padding color-item"><a href="">Vivobook</a></li>
            </ul>`
    menubar[6].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/p16.webp" alt="" />
                    <p>ProArt P16 (H7606); Copilot+ PC</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/pz13.webp" alt="" />
                    <p>ProArt PZ23 (HT5306); Copilot+ PC</p>
                  </article>
                </a>
              </li>
            </ul>`
  });
  titel[6].addEventListener("mouseleave",function(){
    titel[6].classList.add("defult");
  });
  /*------------------------------*/
  titel[7].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/2in1.svg" alt="" class="color-icon"> 2-in-1 laptop</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/ruggedized.svg" alt="" class="color-icon"> Ruggedized laptop</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/thin.svg" alt="" class="color-icon">  Thin and ligth</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/high.svg" alt="" class="color-icon"> High Perfomanc</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/everyday.svg" alt="" class="color-icon"> Everyday use</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/oled.svg" alt="" class="color-icon"> OLED display</a></li>
            </ul>`
    menubar[5].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Vivobook</a></li>
              <li class="menu-padding color-item"><a href="">Chromebook</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">Zenbook</a></li>
              <li class="menu-padding color-item"><a href="">Expertbook</a></li>
              <li class="menu-padding color-item"><a href="">BR Series</a></li>
            </ul>`
    menubar[6].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/s15.webp" alt="" />
                    <p>ASUS Vivobook S 15 (S5507);Copilot+ PC</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/14x.webp" alt="" />
                    <p>ASUS Zenbook 14X OLED (UX3404)</p>
                  </article>
                </a>
              </li>
            </ul>`
  });
  titel[7].addEventListener("mouseleave",function(){
    titel[7].classList.add("defult");
  });
  /*------------------------------*/
  titel[8].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/copilet.svg" alt="" class="color-icon"> Copilot+ PC devices</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/gaming.svg" alt="" class="color-icon"> Gaming 2-in1 laptop</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/thin.svg" alt="" class="color-icon">  Ultra-slim designs</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/asd.svg" alt="" class="color-icon"> Always connected</a></li>
            </ul>`
    menubar[5].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG-Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
            </ul>`
    menubar[6].innerHTML=``
  });
  titel[8].addEventListener("mouseleave",function(){
    titel[8].classList.add("defult");
  });
  /*------------------------------*/
  titel[9].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/adapters.svg" alt="" class="color-icon"> Adapters and Chargers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/docks.svg" alt="" class="color-icon"> Docks Dongles and Cables</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/bags.svg" alt="" class="color-icon"> Bags</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/headsets.svg" alt="" class="color-icon"> Headset and Audio</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/mouse.svg" alt="" class="color-icon"> Mice and Mouse Pads</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/keyboard.svg" alt="" class="color-icon"> Keyboards</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/pen.svg" alt="" class="color-icon"> Stylus</a></li>
            </ul>`;
    menubar[5].innerHTML=``;
    menubar[5].classList.add("list");
    menubar[6].innerHTML=``;
  });
  titel[9].addEventListener("mouseleave",function(){
    titel[9].classList.add("defult");
  });
  /*------------------------------*/
  titel[10].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">Featured Apps</li>
              <li class="menu-padding color-item"><a href="">ScreenXpert for ASUS PCs</a></li>
              <li class="menu-padding color-item"><a href="">ScreenXpert on ScreenPad<sup>TM</sup> Plus</a></li>
              <li class="menu-padding color-item"><a href="">ScreenXpert on ScreenPad<sup>TM</sup></a></li>
              <li class="menu-padding color-item"><a href="">ProArt Creator Hub</a></li>
              <li class="menu-padding color-item"><a href="">MuseTree</a></li>
              <li class="menu-padding color-item"><a href="">StoryCube</a></li>
              <li class="menu-padding color-item"><a href="">Armory Crate</a></li>
              <li class="menu-padding color-item"><a href="">GlideX</a></li>
              <li class="menu-padding color-item"><a href="">McAfee</a></li>
              <li class="menu-padding color-item"><a href="">Windows Autopilot</a></li>
            </ul>`;
    menubar[5].innerHTML=``;
    menubar[5].classList.add("list");
    menubar[6].innerHTML=``;
  });
  titel[10].addEventListener("mouseleave",function(){
    titel[10].classList.add("defult");
  });
  /*------------------------------*/
  titel[11].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">Featured</li>
              <li class="menu-padding color-item"><a href="">ASUS OLED laptops</a></li>
              <li class="menu-padding color-item"><a href="">Eco-friendly laptops</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Antimicrobial Technology</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Military Grade Durability</a></li>
            </ul>`;
    menubar[5].innerHTML=``;
    menubar[5].classList.add("list");
    menubar[6].innerHTML=``;
  });
  titel[11].addEventListener("mouseleave",function(){
    titel[11].classList.add("defult");
  });
  /*------------------------------*/
  titel[12].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[4].classList.remove("defult");
    titel[5].classList.remove("defult");
    titel[6].classList.remove("defult");
    titel[7].classList.remove("defult");
    titel[8].classList.remove("defult");
    titel[9].classList.remove("defult");
    titel[10].classList.remove("defult");
    titel[11].classList.remove("defult");
    titel[12].classList.remove("defult");
    menubar[4].innerHTML=`<ul>
              <li id="titer" class="menu-padding">Featured</li>
              <li class="menu-padding color-item"><a href="">Copilot+ PC</a></li>
            </ul>`;
    menubar[5].innerHTML=``;
    menubar[5].classList.add("list");
    menubar[6].innerHTML=``;
  });
  titel[12].addEventListener("mouseleave",function(){
    titel[5].classList.add("defult");
  });
  /*------------------------------*/  
});
/*---------------------------------------*/
items[2].addEventListener("mouseenter",function(){
  menu[0].classList.remove("show");
  menu[1].classList.remove("show");
  menu[3].classList.remove("show");
  menu[4].classList.remove("show");
  menu[5].classList.remove("show");
  menu[2].classList.add("show");
  titel[13].classList.add("defult");
  isHovering=false;
  titel[13].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SCREEN SIZE</li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/17.9.svg" alt="" class="color-icon"> 17.9" and below</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/18.svg" alt="" class="color-icon"> 18" -22.9"</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/23.svg" alt="" class="color-icon"> 23" -26.9"</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/27.svg" alt="" class="color-icon"> 27" -30.9"</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/31.svg" alt="" class="color-icon"> 31" -34.9"</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/35.svg" alt="" class="color-icon"> 35" and abov</a></li>
            </ul>`;
    menubar[9].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ROG-Reppublic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">ZenScreen</a></li>
              <li class="menu-padding color-item"><a href="">Eye Care</a></li>
              <li class="menu-padding color-item"><a href="">Business</a></li>
              <li class="menu-padding color-item"><a href="">Healthcare</a></li>
              <li class="menu-padding color-item"><a href="">Medical</a></li>
              <li class="menu-padding color-item"><a href="">Display Accessories-Arm/Light Bar / Others</a></li>
            </ul>`;
    menubar[9].classList.remove("last");
    menubar[10].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ergp.webp" alt="" />
                    <p>ROG Ergo Monitor Arm AAS01</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/aura.webp" alt="" />
                    <p>ROG Aura Monitor Light Bar ALB01</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[13].addEventListener("mouseleave",function(){
    titel[13].classList.add("defult");
  });
  /*-------------------------------*/
  titel[14].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">Portable</a></li>
              <li class="menu-padding color-item"><a href="">Entertainment</a></li>
              <li class="menu-padding color-item"><a href="">Business</a></li>
            </ul>`;
    menubar[9].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/l2.webp" alt="" />
                    <p>ZenBeam L2</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/a1.webp" alt="" />
                    <p>ProArt Projector A1</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[9].classList.add("list");
    menubar[10].innerHTML=``;
  });
  titel[14].addEventListener("mouseleave",function(){
    titel[14].classList.add("defult");
  });
  /*------------------------------*/
  titel[15].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY USE</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/home.svg" alt="" class="color-icon"> For Home</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/work.svg" alt="" class="color-icon">  For Work</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/study.svg" alt="" class="color-icon"> For Students</a></li>
            </ul>`;
    menubar[9].classList.remove("last");
    menubar[9].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Zen AiO</a></li>
              <li class="menu-padding color-item"><a href="">Everyday use</a></li>
              <li class="menu-padding color-item"><a href="">ExpertCenter AiO</a></li>
            </ul>`;
    menubar[10].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/a54.webp" alt="" />
                    <p>Zen AiO 24 A5401</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/e5.webp" alt="" />
                    <p>ExpertCenter E5 AiO 27 (E5702)</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[15].addEventListener("mouseleave",function(){
    titel[15].classList.add("defult");
  });
  /*------------------------------*/
  titel[16].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY USE</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/home.svg" alt="" class="color-icon"> For Home</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/work.svg" alt="" class="color-icon">  For Work</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/study.svg" alt="" class="color-icon"> For Students</a></li>
            </ul>`;
    menubar[9].classList.remove("last");            
    menubar[9].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Everyday use</a></li>
              <li class="menu-padding color-item"><a href="">ExpertCenter</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
            </ul>`;
    menubar[10].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/s500.webp" alt="" />
                    <p>ASUS S500MC</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/d9.webp" alt="" />
                    <p>ASUS ExpertCenter D9 Mini Tower (D901MDR)</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[16].addEventListener("mouseleave",function(){
    titel[16].classList.add("defult");
  });
  /*------------------------------*/
  titel[17].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG</a></li>
              <li class="menu-padding color-item"><a href="">ROG Strix</a></li>
            </ul>`;
    menubar[9].innerHTML=``;
    menubar[9].classList.add("list");
    menubar[10].innerHTML=``;
  });
  titel[17].addEventListener("mouseleave",function(){
    titel[17].classList.add("defult");
  });
  /*------------------------------*/
  titel[18].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">By SERIES</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/nucpro.svg" alt="" class="color-icon"> NUC Pro</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/nucrugged.svg" alt="" class="color-icon"> NUC Pro</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/nucessential.svg" alt="" class="color-icon"> NUC Essential</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/nucextreme.svg" alt="" class="color-icon"> NUC Extreme</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/nucenthusiast.svg" alt="" class="color-icon"> NUC Extreme</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/high.svg" alt="" class="color-icon"> NUC Performance</a></li>
            </ul>`;
    menubar[9].classList.remove("last");            
    menubar[9].innerHTML=`<ul>
              <li id="titer" class="menu-padding">By Product Type</li>
              <li class="menu-padding color-item"><a href="">NUC Overview</a></li>
              <li class="menu-padding color-item"><a href="">AI NUC</a></li>
              <li class="menu-padding color-item"><a href="">NUC Mini PCs</a></li>
              <li class="menu-padding color-item"><a href="">NUC Kits</a></li>
              <li class="menu-padding color-item"><a href="">NUC Boards</a></li>
              <li class="menu-padding color-item"><a href="">NUC Elements</a></li>
              <li class="menu-padding color-item"><a href="">ROG NUC</a></li>
            </ul>`;
    menubar[10].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/14pro.webp" alt="" />
                    <p>ASUS NUC 14 Pro</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/14pro+.webp" alt="" />
                    <p>ASUS NUC 14 Pro+</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[18].addEventListener("mouseleave",function(){
    titel[18].classList.add("defult");
  });
  /*------------------------------*/
  titel[19].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">PN series</a></li>
              <li class="menu-padding color-item"><a href="">PB Series</a></li>
              <li class="menu-padding color-item"><a href="">NUCS</a></li>
              <li class="menu-padding color-item"><a href="">Chrome OS devices</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
            </ul>`;
    menubar[9].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/pn.webp" alt="" />
                    <p>ASUS ExpertCenter PN65</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/5a.webp" alt="" />
                    <p>ASUS Chromebox 5a</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[9].classList.add("list");
    menubar[10].innerHTML=``;
  });
  titel[19].addEventListener("mouseleave",function(){
    titel[19].classList.add("defult");
  });
  /*------------------------------*/
  titel[20].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CHIPSET BRAND</li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/intel.svg" alt="" class="color-icon"> intel</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/amd.svg" alt="" class="color-icon"> AMD</a></li>
            </ul>`;
    menubar[9].classList.remove("last");            
    menubar[9].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Performance</a></li>
              <li class="menu-padding color-item"><a href="">Advanced</a></li>
              <li class="menu-padding color-item"><a href="">Essential</a></li>
            </ul>`;
    menubar[10].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/x9.webp" alt="" />
                    <p>ExpertCenter Pro ET900A X9</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/w7.webp" alt="" />
                    <p>ExpertCenter Pro ET7001 W7</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[20].addEventListener("mouseleave",function(){
    titel[20].classList.add("defult");
  });
  /*------------------------------*/
  titel[21].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/mouse.svg" alt="" class="color-icon"> Mice and Mouse Pads</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/keyboard.svg" alt="" class="color-icon">  Keyboards</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/docks.svg" alt="" class="color-icon"> Docks, Dongles and Cable</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/headsets.svg" alt="" class="color-icon"> Headsets</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/display.svg" alt="" class="color-icon"> Display Accessories(Arm/ Light Bar / Others)</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/pen.svg" alt="" class="color-icon"> Stylus</a></li>
            </ul>`;
    menubar[9].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/mts.webp" alt="" />
                    <p>ASUS ZenScreen Stand MTSO2D</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/aura.webp" alt="" />
                    <p>ROG Aura Monitor Light Bar ALB01</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[9].classList.add("list");
    menubar[10].innerHTML=``;
  });
  titel[21].addEventListener("mouseleave",function(){
    titel[21].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[22].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`<ul>
              <li id="titer" class="menu-padding">FEATURED</li>
              <li class="menu-padding color-item"><a href="">MyASUS</a></li>
              <li class="menu-padding color-item"><a href="">ProArt Creator Hub</a></li>
              <li class="menu-padding color-item"><a href="">McAfee</a></li>
              <li class="menu-padding color-item"><a href="">Windows Autopilot</a></li>
              <li class="menu-padding color-item"><a href="">Al Recovery</a></li>
            </ul>`;
    menubar[9].innerHTML=``;
    menubar[9].classList.add("list");
    menubar[10].innerHTML=``;
  });
  titel[22].addEventListener("mouseleave",function(){
    titel[22].classList.add("defult");
  });
  /*------------------------------*/
  titel[23].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].classList.remove("last");
    menubar[8].innerHTML=`
            <ul>
              <li id="titer" class="menu-padding">FEATURED</li>
              <li class="menu-padding color-item"><a href="">ASUS Premium Care For Desktops</a></li>
            </ul>`
    menubar[9].innerHTML=``;
    menubar[9].classList.add("list");
    menubar[8].classList.remove("last");
    menubar[10].innerHTML=``;
  });
  titel[23].addEventListener("mouseleave",function(){
    titel[23].classList.add("defult");
  });
  /*------------------------------*/
  titel[24].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[13].classList.remove("defult");
    titel[14].classList.remove("defult");
    titel[15].classList.remove("defult");
    titel[16].classList.remove("defult");
    titel[17].classList.remove("defult");
    titel[18].classList.remove("defult");
    titel[19].classList.remove("defult");
    titel[20].classList.remove("defult");
    titel[21].classList.remove("defult");
    titel[22].classList.remove("defult");
    titel[23].classList.remove("defult");
    titel[24].classList.remove("defult");
    menubar[8].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/m1.webp" alt="" />
                    <p>ASUS AirVision M1</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[8].classList.add("list");
    menubar[9].classList.add("list");
  });
  titel[24].addEventListener("mouseleave",function(){
    titel[24].classList.add("defult");
  });
  /*------------------------------*/
});
/*---------------------------------------*/
items[3].addEventListener("mouseenter",function(){
  menu[0].classList.remove("show");
  menu[1].classList.remove("show");
  menu[2].classList.remove("show");
  menu[4].classList.remove("show");
  menu[5].classList.remove("show");
  menu[3].classList.add("show");
  titel[25].classList.add("defult");
  isHovering=false;
  titel[25].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CHIPSET BRAND</li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/intel.svg" alt="" class="color-icon"> intel</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/amd.svg" alt="" class="color-icon"> AMD</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG-Reppublic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">PRIME</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">BTF Hidden-Connector</a></li>
              <li class="menu-padding color-item"><a href="">Workstation</a></li>
              <li class="menu-padding color-item"><a href="">CSM</a></li>
              <li class="menu-padding color-item"><a href="">Business</a></li>
              <li class="menu-padding color-item"><a href="">Expedition</a></li>
              <li class="menu-padding color-item"><a href="">Others</a></li>
              <li class="menu-padding color-item"><a href="">Accessories</a></li>
            </ul>`;
    menubar[13].classList.remove("last");
    menubar[14].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/x870.webp" alt="" />
                    <p>ROG CROSSHAIR X870E HERO</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/z890.webp" alt="" />
                    <p>ROG MAXIMUS Z890 EXTREME</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[25].addEventListener("mouseleave",function(){
    titel[25].classList.add("defult");
  });
  /*-------------------------------*/
  titel[26].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CHIPSET BRAND</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/amd.svg" alt="" class="color-icon"> AMD</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/nvidia.svg" alt="" class="color-icon"> NVIDIA</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">PRIME</a></li>
              <li class="menu-padding color-item"><a href="">Optical Drives</a></li>
              <li class="menu-padding color-item"><a href="">KO</a></li>
              <li class="menu-padding color-item"><a href="">Dual</a></li>
              <li class="menu-padding color-item"><a href="">Turbo</a></li>
              <li class="menu-padding color-item"><a href="">Dual Mini</a></li>
              <li class="menu-padding color-item"><a href="">Phoenix</a></li>
              <li class="menu-padding color-item"><a href="">Cerberus</a></li>
              <li class="menu-padding color-item"><a href="">ASUS</a></li>
            </ul>`;
    menubar[13].classList.remove("last");            
    menubar[14].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/gdr.webp" alt="" />
                    <p>ROG Strix GeForce RTX<sup>TM</sup> 4080 SUPER 16GB GDDR6X OC Edition</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/tuf.webp" alt="" />
                    <p>ASUS TUF Gaming Radeon<sup>TM</sup> RX 7600 XT OC Edition 16GB GDDR6</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[26].addEventListener("mouseleave",function(){
    titel[26].classList.add("defult");
  });
  /*------------------------------*/
  titel[27].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">Gaming Case Accessories</a></li>
              <li class="menu-padding color-item"><a href="">PRIME</a></li>
              <li class="menu-padding color-item"><a href="">ASUS</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/gr701.webp" alt="" />
                    <p>ROG Hyperion GR701</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/w7.webp" alt="" />
                    <p>ProArt PA602</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[13].classList.add("list");
    menubar[14].innerHTML=``;
  });
  titel[27].addEventListener("mouseleave",function(){
    titel[27].classList.add("defult");
  });
  /*------------------------------*/
  titel[28].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/cooler.svg" alt="" class="color-icon"> CPU Liquid cooler</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/custom.svg" alt="" class="color-icon"> Custom Cooling</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/thermal.svg" alt="" class="color-icon"> Thermal Pastes</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/fan.svg" alt="" class="color-icon"> Fan</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
              <li class="menu-padding color-item"><a href="">Prime</a></li>
              <li class="menu-padding color-item"><a href="">ASUS</a></li>
            </ul>`;
    menubar[13].classList.remove("last");
    menubar[14].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/360.webp" alt="" />
                    <p>TUF Gaming LC II 360 ARGB</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/420.webp" alt="" />
                    <p>ProArt LC 420</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[28].addEventListener("mouseleave",function(){
    titel[28].classList.add("defult");
  });
  /*------------------------------*/
  titel[29].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 1600W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 1200W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 1000W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 850W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 750W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 650W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 550W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> 450W</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/w.svg" alt="" class="color-icon"> Uninterruptible Power Supplies</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">Prime</a></li>
            </ul>`;
    menubar[13].classList.remove("last");
    menubar[14].innerHTML=``;
  });
  titel[29].addEventListener("mouseleave",function(){
    titel[29].classList.add("defult");
  });
  /*------------------------------*/
  titel[30].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CONNECTIVITY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/pcle.svg" alt="" class="color-icon"> PCle</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/usb.svg" alt="" class="color-icon"> USB</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Gaming</a></li>
              <li class="menu-padding color-item"><a href="">Hi-Fi</a></li>
            </ul>`;
    menubar[13].classList.remove("last");
    menubar[14].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/u7.png" alt="" />
                    <p>Xonar U7 MKII</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[30].addEventListener("mouseleave",function(){
    titel[30].classList.add("defult");
  });
  /*------------------------------*/
  titel[31].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Expertbook</a></li>
              <li class="menu-padding color-item"><a href="">Chromebook</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/u9m.png" alt="" />
                    <p>ZenDrive U9M (SDRW-08U9M-U)</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/u7m.png" alt="" />
                    <p>ZenDrive U7M (SDRW-08U7M-U)</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[13].classList.add("list");
    menubar[14].innerHTML=``;
  });
  titel[31].addEventListener("mouseleave",function(){
    titel[31].classList.add("defult");
  });
  /*------------------------------*/
  titel[32].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/hard.svg" alt="" class="color-icon"> External Hard Drive</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/ssd.svg" alt="" class="color-icon"> External SSD Enclosure</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/ssd.svg" alt="" class="color-icon"> External SSD</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">ASUS product</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
            </ul>`;
    menubar[13].classList.remove("last");
    menubar[14].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/hhd.png" alt="" />
                    <p>ASUS FX HDD (EHD- A1T/EHD-A2T)</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[32].addEventListener("mouseleave",function(){
    titel[32].classList.add("defult");
  });
  /*------------------------------*/
  titel[33].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">FEATURED</li>
              <li class="menu-padding color-item"><a href="">XG STATION PRO</a></li>
              <li class="menu-padding color-item"><a href="">ROG XG STATION 2</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
            </ul>`;
    menubar[13].innerHTML=``;
    menubar[13].classList.add("list");
    menubar[14].innerHTML=``;
  });
  titel[33].addEventListener("mouseleave",function(){
    titel[33].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[34].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PLATFORM</li>
              <li class="menu-padding color-item"><a href="">Tinker Board Website</a></li>
            </ul>`;
    menubar[13].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/t.png" alt="" />
                    <p>Tinker Edge T</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/s.png" alt="" />
                    <p>Tinker Board S</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[13].classList.add("list");
    menubar[14].innerHTML=``;
  });
  titel[34].addEventListener("mouseleave",function(){
    titel[34].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[35].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[25].classList.remove("defult");
    titel[26].classList.remove("defult");
    titel[27].classList.remove("defult");
    titel[28].classList.remove("defult");
    titel[29].classList.remove("defult");
    titel[30].classList.remove("defult");
    titel[31].classList.remove("defult");
    titel[32].classList.remove("defult");
    titel[33].classList.remove("defult");
    titel[34].classList.remove("defult");
    titel[35].classList.remove("defult");
    menubar[12].innerHTML=`<ul>
              <li class="menu-padding color-item"><a href="">GPU Tweak III</a></li>
            </ul>`;
    menubar[13].innerHTML=``;
    menubar[13].classList.add("list");
    menubar[14].innerHTML=``;
  });
  titel[35].addEventListener("mouseleave",function(){
    titel[35].classList.add("defult");
  });
});
/*---------------------------------------*/
items[4].addEventListener("mouseenter",function(){
  menu[0].classList.remove("show");
  menu[2].classList.remove("show");
  menu[3].classList.remove("show");
  menu[1].classList.remove("show");
  menu[5].classList.remove("show");
  menu[4].classList.add("show");
  titel[36].classList.add("defult");
  isHovering=false;
  titel[36].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/wifi.svg" alt="" class="color-icon"> WiFi Routers</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/wifisystem.svg" alt="" class="color-icon"> Whole Home Mesh WiFi System</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/wirelessadapters.svg" alt="" class="color-icon">  Wireless Adapters</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SOLUTION</li>
              <li class="menu-padding color-item"><a href="">ROG-Reppublic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">Extendable Router</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Router App</a></li>
              <li class="menu-padding color-item"><a href="">Network Security</a></li>
              <li class="menu-padding color-item"><a href="">Best Gaming Router</a></li>
              <li class="menu-padding color-item"><a href="">ASUS ZenWiFi Series</a></li>
              <li class="menu-padding color-item"><a href="">AiMesh Technology</a></li>
              <li class="menu-padding color-item"><a href="">SMB Network Solution</a></li>
            </ul>`;
    menubar[17].classList.remove("last");
    menubar[18].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/be96.webp" alt="" />
                    <p>RT-BE96U</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/be98.webp" alt="" />
                    <p>ROG Rapture GT-BE98</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[36].addEventListener("mouseleave",function(){
    titel[36].classList.add("defult");
  });
  /*-------------------------------*/
  titel[37].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wifi.svg" alt="" class="color-icon"> WiFi Routers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wifisystem.svg" alt="" class="color-icon"> Whole Home Mesh WiFi System</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wirelessadapters.svg" alt="" class="color-icon"> Wireless Adapters</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/rangeextenders.svg" alt="" class="color-icon"> Range Extenders</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SOLUTION</li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">Extendable Router</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Router App</a></li>
              <li class="menu-padding color-item"><a href="">Network Security</a></li>
              <li class="menu-padding color-item"><a href="">Best Gaming Router</a></li>
              <li class="menu-padding color-item"><a href="">ASUS ZenWiFi Series</a></li>
              <li class="menu-padding color-item"><a href="">AiMesh Technology</a></li>
              <li class="menu-padding color-item"><a href="">SMB Network Solution</a></li>
            </ul>`;
    menubar[17].classList.remove("last");        
    menubar[18].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ax82.webp" alt="" />
                    <p>RT-AX82U</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/rtax86.webp" alt="" />
                    <p>RT-AX86 Series(RT- AX86U/RT-AX865)</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[37].addEventListener("mouseleave",function(){
    titel[37].classList.add("defult");
  });
  /*------------------------------*/
  titel[38].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Gaming Routers</a></li>
              <li class="menu-padding color-item"><a href="">ASUS WiFi Routers</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ax54.webp" alt="" />
                    <p>TUF Gaming AX5400 (TUF-AX5400)</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ax82.webp" alt="" />
                    <p>RT-AX82U</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("list");
    menubar[18].innerHTML=``;
  });
  titel[38].addEventListener("mouseleave",function(){
    titel[38].classList.add("defult");
  });
  /*------------------------------*/
  titel[39].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">AiMesh WiFi Routers and Systems</a></li>
              <li class="menu-padding color-item"><a href="">ZenWiFi WiFi Systems</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/xt12.webp" alt="" />
                    <p>ASUS ZenWiFi Pro XT12</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/xt8.webp" alt="" />
                    <p>ASUS ZenWiFi AX (XT8)</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("list");
    menubar[18].innerHTML=``;
  });
  titel[39].addEventListener("mouseleave",function(){
    titel[39].classList.add("defult");
  });
  /*------------------------------*/
  titel[40].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wifi.svg" alt="" class="color-icon"> WiFi Routers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wired.svg" alt="" class="color-icon"> Wired Routers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wifisystem.svg" alt="" class="color-icon"> Mesh WiFi System</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/rangeextenders.svg" alt="" class="color-icon"> Access Point</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/switch.svg" alt="" class="color-icon"> Switch</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ASUS ExpertWiFi</a></li>
            </ul>`;
    menubar[17].classList.remove("last");
    menubar[18].innerHTML=``;
  });
  titel[40].addEventListener("mouseleave",function(){
    titel[40].classList.add("defult");
  });
  /*------------------------------*/
  titel[41].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/rangeextenders.svg" alt="" class="color-icon"> Range Extenders</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/powerlin.svg" alt="" class="color-icon"> Powerline Adapters</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ax56.png" alt="" />
                    <p>RP-AX56</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ac55.png" alt="" />
                    <p>RP-AC55</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("list");
    menubar[18].innerHTML=``;
  });
  titel[41].addEventListener("mouseleave",function(){
    titel[41].classList.add("defult");
  });
  /*------------------------------*/
  titel[42].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/modems.svg" alt="" class="color-icon"> Cable Modems</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/modems.svg" alt="" class="color-icon"> DSL Modems</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/mobilebroadband.svg" alt="" class="color-icon"> Mobile Broadband</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ax56.webp" alt="" />
                    <p>4G-AX56</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ax82.webp" alt="" />
                    <p>DSL-AX82U</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("list");
    menubar[18].innerHTML=``;
  });
  titel[42].addEventListener("mouseleave",function(){
    titel[42].classList.add("defult");
  });
  /*------------------------------*/
  titel[43].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wirelessadaptersa.svg" alt="" class="color-icon"> 2-in-1 laptop</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/usbax.webp" alt="" />
                    <p>USB-AX56</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ax58.png" alt="" />
                    <p>PCE-AX58BT</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("last");
    menubar[18].innerHTML=``;
  });
  titel[43].addEventListener("mouseleave",function(){
    titel[43].classList.add("defult");
  });
  /*------------------------------*/
  titel[44].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/switch.svg" alt="" class="color-icon"> Switch</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wiredadapters.svg" alt="" class="color-icon"> Wired Adapters</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/c25.png" alt="" />
                    <p>PCE-C2500</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/u20.png" alt="" />
                    <p>XG-U2008</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("list");
    menubar[18].innerHTML=``;
  });
  titel[44].addEventListener("mouseleave",function(){
    titel[44].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[45].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item"><a href="">Industrial Motherboard</a></li>
              <li class="menu-padding color-item"><a href="">Single-Board Computer</a></li>
              <li class="menu-padding color-item"><a href="">Computer-On-Module</a></li>
              <li class="menu-padding color-item"><a href="">Embedded Computer & Edge Al System</a></li>
              <li class="menu-padding color-item"><a href="">Al Software</a></li>
              <li class="menu-padding color-item"><a href="">GPU & Edge Al Accelerator</a></li>
              <li class="menu-padding color-item"><a href="">Tinker Board Website</a></li>
              <li class="menu-padding color-item"><a href="">Tinker Board Forum</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/pe80.webp" alt="" />
                    <p>PE8000G</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/ais.webp" alt="" />
                    <p>AISVision</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("list");
    menubar[18].innerHTML=``;
  });
  titel[45].addEventListener("mouseleave",function(){
    titel[45].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[46].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/density.svg" alt="" class="color-icon"> High-Density Servers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/rack.svg" alt="" class="color-icon"> Rack Servers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/gpu.svg" alt="" class="color-icon"> GPU Servers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/edge.svg" alt="" class="color-icon"> Edge Servers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/tower.svg" alt="" class="color-icon"> Tower Servers</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/server.svg" alt="" class="color-icon"> Server Motherboards</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/serveraccess.svg" alt="" class="color-icon"> Server Accessories</a></li> 
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li id="titer" class="menu-padding">Featured</li>
              <li class="menu-padding color-item"><a href="">Data Center Solution</a></li>
            </ul>`;
    menubar[17].classList.remove("last");
    menubar[18].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/e12.webp" alt="" />
                    <p>ESC8000A-E12</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/e11.webp" alt="" />
                    <p>RS720Q-E11-RS8U</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[46].addEventListener("mouseleave",function(){
    titel[46].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[47].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[36].classList.remove("defult");
    titel[37].classList.remove("defult");
    titel[38].classList.remove("defult");
    titel[39].classList.remove("defult");
    titel[40].classList.remove("defult");
    titel[41].classList.remove("defult");
    titel[42].classList.remove("defult");
    titel[43].classList.remove("defult");
    titel[44].classList.remove("defult");
    titel[45].classList.remove("defult");
    titel[46].classList.remove("defult");
    titel[47].classList.remove("defult");
    menubar[16].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">Security Camera</a></li>
            </ul>`;
    menubar[17].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/eye.webp" alt="" />
                    <p>ASUS ZenEye</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[17].classList.add("last")
    menubar[18].innerHTML=``;
  });
  titel[47].addEventListener("mouseleave",function(){
    titel[47].classList.add("defult");
  });
});
/*---------------------------------------*/
items[5].addEventListener("mouseenter",function(){
  menu[0].classList.remove("show");
  menu[2].classList.remove("show");
  menu[3].classList.remove("show");
  menu[4].classList.remove("show");
  menu[1].classList.remove("show");
  menu[5].classList.add("show");
  titel[48].classList.add("defult");
  isHovering=false;
  titel[48].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/wirekeyboard.svg" alt="" class="color-icon"> Wired Keyboards</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/wirelesskeyboard.svg" alt="" class="color-icon"> Wireless Keyboards</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/mechanicalkey.svg" alt="" class="color-icon"> Mechanical Keyboards</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/membranekkey.svg" alt="" class="color-icon"> Membrane Keyboards</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/kbmicecombo.svg" alt="" class="color-icon"> Keyboard and Mouse Combos</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG-Reppublic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Keyboard</a></li>
              <li class="menu-padding color-item"><a href="">Accessories</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/k3.webp" alt="" />
                    <p>TUF Gaming K3</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/k1.webp" alt="" />
                    <p>TUF Gaming K1</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[48].addEventListener("mouseleave",function(){
    titel[48].classList.add("defult");
  });
  /*-------------------------------*/
  titel[49].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/micewire.svg" alt="" class="color-icon"> Wired Mice</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/micewireless.svg" alt="" class="color-icon"> Wireless Mice</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/mousepad.svg" alt="" class="color-icon"> Mouse Pads</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Mouse and Mouse Pad</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/m3.webp" alt="" />
                    <p>ASUS TUF Gaming M3 Gen II</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/lab.webp" alt="" />
                    <p>ROG Harpe Ace Aim Lab Edition</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[49].addEventListener("mouseleave",function(){
    titel[49].classList.add("defult");
  });
  /*------------------------------*/
  titel[50].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/headsets.svg" alt="" class="color-icon"> Wired Headsets</a></li>
              <li class="menu-padding color-item">
                <a href=""> <img src="../images/asus/wirelessheadset.svg" alt="" class="color-icon"> Wireless Headsets</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG-Reppublic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Headset and Audio</a></li>
              <li class="menu-padding color-item"><a href="">Headsets Accessories</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/h1.webp" alt="" />
                    <p>Al Noise-Canceling Mic Adapter</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/gh1.webp" alt="" />
                    <p>TUF GAMING CAPTURE BOX-CU4K30</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[50].addEventListener("mouseleave",function(){
    titel[50].classList.add("defult");
  });
  /*------------------------------*/
  titel[51].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item"><a href="">ASUS Webcam C3</a></li>
              <li class="menu-padding color-item"><a href="">Video Capture/Streaming</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/mic.webp" alt="" />
                    <p>Al Noise-Canceling Mic Adapter</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/box.webp" alt="" />
                    <p>TUF GAMING CAPTURE BOX-CU4K30</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[21].classList.add("list");
    menubar[22].innerHTML=``;
  });
  titel[51].addEventListener("mouseleave",function(){
    titel[51].classList.add("defult");
  });
  /*------------------------------*/
  titel[52].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/bags.svg" alt="" class="color-icon"> Bags</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/apparel.svg" alt="" class="color-icon"> Apparel</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/cap.svg" alt="" class="color-icon"> Cap</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/gear.svg" alt="" class="color-icon"> Gear</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/accessories.svg" alt="" class="color-icon"> Accessories</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">All Brands and Series</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">TUF Gaming</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Apparels Bags and Gears</a></li>
              <li class="menu-padding color-item"><a href="">ROG SLASH</a></li>
              <li class="menu-padding color-item"><a href="">ProArt</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/bag.webp" alt="" />
                    <p>ASUS Triton Backpack</p>
                  </article>
                </a>
              </li>
              <li class="menu-padding"><a href="">Accessory Finder</a></li>
            </ul>`;
  });
  titel[52].addEventListener("mouseleave",function(){
    titel[52].classList.add("defult");
  });
  /*------------------------------*/
  titel[53].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/case.svg" alt="" class="color-icon"> Cases</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/screenprotect.svg" alt="" class="color-icon"> Screen Protectors</a></li>
              </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ZenFone</a></li>
              <li class="menu-padding color-item"><a href="">ROG Phone</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/10.webp" alt="" />
                    <p>Zenfone 10 Connex Accessories Set</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/9.webp" alt="" />
                    <p>Zenfone 9 Smart Backpack Mount</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[53].addEventListener("mouseleave",function(){
    titel[53].classList.add("defult");
  });
  /*------------------------------*/
  titel[54].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/adapters.svg" alt="" class="color-icon"> Adapters</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/carcharger.svg" alt="" class="color-icon"> Thin and ligth</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY BRAND/SERIES</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Adapters and Chargers</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/usbc.webp" alt="" />
                    <p>ASUS 18W Adapter & USB-C Cable</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/nb.webp" alt="" />
                    <p>90W Universal NB Square Adapter</p>
                  </article>
                </a>
              </li>
              <li class="menu-padding color-item"><a href="">Accessory Finder</a></li>
            </ul>`;
  });
  titel[54].addEventListener("mouseleave",function(){
    titel[54].classList.add("defult");
  });
  /*------------------------------*/
  titel[55].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/wireless.svg" alt="" class="color-icon"> Wireless Charger</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/power.webp" alt="" />
                    <p>ASUS Wireless Power Mate (W1G-AWPM)</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[21].classList.add("list");
    menubar[22].innerHTML=``;
  });
  titel[55].addEventListener("mouseleave",function(){
    titel[55].classList.add("defult");
  });
  /*------------------------------*/
  titel[56].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY PRODUCT</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/docks.svg" alt="" class="color-icon"> Docks</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/mobilebroadband.svg" alt="" class="color-icon"> Dongles</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/cables.svg" alt="" class="color-icon"> Cables</a></li>
              </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">All Brands and Series</li>
              <li class="menu-padding color-item"><a href="">All series</a></li>
              <li class="menu-padding color-item"><a href="">ROG - Republic of Gamers</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Docks, Dongles and Cable</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/usbd.webp" alt="" />
                    <p>ASUS OS200 USB-C DONGLE</p>
                  </article>
                </a>
              </li>
              <li class="menu-padding"><a href="">Accessory Finder</a></li>
            </ul>`;
  });
  titel[56].addEventListener("mouseleave",function(){
    titel[56].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[57].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY CATEGORY</li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/powerbank.svg" alt="" class="color-icon"> 10000-15000mAh</a></li>
              <li class="menu-padding color-item">
                <a href=""><img src="../images/asus/powerbank.svg" alt="" class="color-icon"> Under 10000mAh</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY SERIES</li>
              <li class="menu-padding color-item"><a href="">ASUS Power Bank</a></li>
            </ul>`;
    menubar[22].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/q.webp" alt="" />
                    <p>ZenPower 10000 Quick Charge 3.0</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/power.webp" alt="" />
                    <p>ASUS Wireless Power Mate (W1G-AWPM)</p>
                  </article>
                </a>
              </li>
            </ul>`;
  });
  titel[57].addEventListener("mouseleave",function(){
    titel[57].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[58].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">FEATURED</li>
              <li class="menu-padding color-item"><a href="">SA304H</a></li>
              <li class="menu-padding color-item"><a href="">SA204H</a></li>
              <li class="menu-padding color-item"><a href="">SA203H</a></li>
              <li class="menu-padding color-item"><a href="">SA200H ACTIVE STYLUS</a></li>
              <li class="menu-padding color-item"><a href="">SA201H</a></li>
              <li class="menu-padding color-item"><a href="">SA300</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/pen.webp" alt="" />
                    <p>ASUS Pen 2.0 SA203H</p>
                  </article>
                </a>
              </li>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/sa200.webp" alt="" />
                    <p>Active stylus SA200H</p>
                  </article>
                </a>
              </li>
              <li class="menu-padding"><a href="">Accessory Finder</a></li>
            </ul>`;
    menubar[21].classList.add("last");
    menubar[22].innerHTML=``;
  });
  titel[58].addEventListener("mouseleave",function(){
    titel[58].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[59].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY Series</li>
              <li class="menu-padding color-item"><a href="">ROG-Reppublic of Gamers</a></li>
            </ul>`;
    menubar[21].innerHTML=``;
    menubar[21].classList.add("list");
    menubar[22].innerHTML=``;
  });
  titel[59].addEventListener("mouseleave",function(){
    titel[59].classList.add("defult");
  });
  /*------------------------------*/ 
  titel[60].addEventListener("mouseenter",function(){
    isHovering=true;
    titel[48].classList.remove("defult");
    titel[49].classList.remove("defult");
    titel[50].classList.remove("defult");
    titel[51].classList.remove("defult");
    titel[52].classList.remove("defult");
    titel[53].classList.remove("defult");
    titel[54].classList.remove("defult");
    titel[55].classList.remove("defult");
    titel[56].classList.remove("defult");
    titel[57].classList.remove("defult");
    titel[58].classList.remove("defult");
    titel[59].classList.remove("defult");
    titel[60].classList.remove("defult");
    menubar[20].innerHTML=`<ul>
              <li id="titer" class="menu-padding">BY Series</li>
              <li class="menu-padding color-item"><a href="">All Series</a></li>
              <li class="menu-padding color-item"><a href="">ASUS Gimbal</a></li>
            </ul>`;
    menubar[21].innerHTML=`<ul>
              <li>
                <a href="">
                  <article>
                    <img src="../images/asus/gimbal.png" alt="" />
                    <p>ASUS ZenGimbal</p>
                  </article>
                </a>
              </li>
            </ul>`;
    menubar[21].classList.add("list");
    menubar[22].innerHTML=``;
  });
  titel[60].addEventListener("mouseleave",function(){
    titel[60].classList.add("defult");
  });
});
/*---------------------------------------*/

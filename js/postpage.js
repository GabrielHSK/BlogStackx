const html = {
     data_img : document.querySelector("[data_img]"),
     data_date : document.querySelector("[data_date]"),
     data_views : document.querySelector("[data_views]"),
     data_tittle : document.querySelector("[data_tittle]"),
     data_text : document.querySelector("[data_text]"),
     data_link : document.querySelector("[data_link]"),
    
}
const indice = localStorage.getItem("indice") || "0";

const views_card1 = localStorage.getItem("views_card1") || "0";
const views_card2 = localStorage.getItem("views_card2") || "0";
const views_card3 = localStorage.getItem("views_card3") || "0";
const views_card4 = localStorage.getItem("views_card4") || "0";

const date_time_now = {
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
};

switch (indice) {
  case "1":
    // <img src="" alt="imagem sugestiva" data_img></img>
    html.data_img.setAttribute("src", "./img/NuHeu8ho.png_small");

    // <span data_date>data</span>
    html.data_date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;

    // <span>visualização:<span data_views>0</span></span>
    html.data_views.innerHTML = views_card1;

    // <h1 data_tittle>titulo</h1>
    html.data_tittle.innerHTML = "Cameras e lentes";

    // <p data_text>lorem</p>
    html.data_text.innerHTML = "Publicação card1";


    // <a href="" data_link></a>
    html.data_link.setAttribute("href", "https://pt.wikipedia.org/wiki/IPhone_14")

    break;

  case "2":
    // <img src="" alt="imagem sugestiva" data_img></img>
    html.data_img.setAttribute("src", "./img/Vntg3qeX.png_small");

    // <span data_date>data</span>
    html.data_date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;

    // <span>visualização:<span data_views>0</span></span>
    html.data_views.innerHTML = views_card2;

    // <h1 data_tittle>titulo</h1>
    html.data_tittle.innerHTML = "telescópio James Webb";

    // <p data_text>lorem</p>
    html.data_text.innerHTML = "Publicação card2";

    html.data_link.setAttribute("href", "https://pt.wikipedia.org/wiki/Telesc%C3%B3pio_Espacial_James_Webb")

    break;

  case "3":
    // <img src="" alt="imagem sugestiva" data_img></img>
    html.data_img.setAttribute("src", "./img/Cka_58bX.png_small");

    // <span data_date>data</span>
    html.data_date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;

    // <span>visualização:<span data_views>0</span></span>
    html.data_views.innerHTML = views_card3;

    // <h1 data_tittle>titulo</h1>
    html.data_tittle.innerHTML = "AI - Qual o limite?";

    // <p data_text>lorem</p>
    html.data_text.innerHTML = "Publicação card3";

    html.data_link.setAttribute("href", "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial")

    
    break;

  case "4":
    // <img src="" alt="imagem sugestiva" data_img></img>
    html.data_img.setAttribute("src", "./img/Vntg3qeX.png_small");

    // <span data_date>data</span>
    html.data_date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;

    // <span>visualização:<span data_views>0</span></span>
    html.data_views.innerHTML = views_card4;

    // <h1 data_tittle>titulo</h1>
    html.data_tittle.innerHTML = "nova placa de video";

    // <p data_text>lorem</p>
    html.data_text.innerHTML = "Publicação card4";

    html.data_link.setAttribute("href", "https://pt.wikipedia.org/wiki/Placa_de_v%C3%ADdeo")

    break;

  default:
    break;
}

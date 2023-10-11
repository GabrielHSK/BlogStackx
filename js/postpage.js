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
    html.data_img.setAttribute("src", "/BlogStackx/img/GIy-0yOi.png_small");

    // <span data_date>data</span>
    html.data_date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;

    // <span>visualização:<span data_views>0</span></span>
    html.data_views.innerHTML = views_card1;

    // <h1 data_tittle>titulo</h1>
    html.data_tittle.innerHTML = "Cameras";

    // <p data_text>lorem</p>
    html.data_text.innerHTML = "Uma câmera fotográfica (português brasileiro) ou câmara fotográfica (português europeu) é um instrumento óptico para captação de imagens na forma de fotografias individuais, que são armazenadas localmente, transmitidas para outro local, ou ambos.Como capta informações sobre elementos externos sem ter contato físico com eles, tecnicamente é classificada como um dispositivo de sensoriamento remoto.";


    // <a href="" data_link></a>
    html.data_link.setAttribute("href", "https://pt.wikipedia.org/wiki/C%C3%A2mera")

    break;

  case "2":
    // <img src="" alt="imagem sugestiva" data_img></img>
    html.data_img.setAttribute("src", "./img/Vntg3qeX.png_small");

    // <span data_date>data</span>
    html.data_date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;

    // <span>visualização:<span data_views>0</span></span>
    html.data_views.innerHTML = views_card2;

    // <h1 data_tittle>titulo</h1>
    html.data_tittle.innerHTML = "Telescópio Espacial James Webb";

    // <p data_text>lorem</p>
    html.data_text.innerHTML = "A missão primária do JWST é a de examinar a radiação infravermelha resultante da grande expansão (Big Bang) e realizar observações sobre a infância do Universo. Para realizar tais estudos com uma sensibilidade sem precedentes, todo o Observatório é mantido frio, e as grandes fontes de interferência de infravermelho como o Sol, a Terra e a Lua são bloqueados.";

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
    html.data_text.innerHTML = "Inteligência artificial (de sigla: IA; do inglês: Artificial Intelligence, de sigla: AI) é um campo de estudo multidisciplinar que abrange varias áreas do conhecimento.[1] Embora seu desenvolvimento tenha avançado mais na ciência da computação, sua abordagem interdisciplinar envolve contribuições de diversas disciplinas. ";

    html.data_link.setAttribute("href", "https://pt.wikipedia.org/wiki/Intelig%C3%AAncia_artificial")

    
    break;

  case "4":
    // <img src="" alt="imagem sugestiva" data_img></img>
    html.data_img.setAttribute("src", "/BlogStackx/img/melhor-placa-de-v-deo-barata.webp");

    // <span data_date>data</span>
    html.data_date.innerHTML = `${date_time_now.date} ${date_time_now.time}`;

    // <span>visualização:<span data_views>0</span></span>
    html.data_views.innerHTML = views_card4;

    // <h1 data_tittle>titulo</h1>
    html.data_tittle.innerHTML = "Raytracing acelerado por hardware";

    // <p data_text>lorem</p>
    html.data_text.innerHTML = "A série GeForce 40 é uma família de unidades de processamento gráfico desenvolvida pela Nvidia, sucedendo a série GeForce 30. A série foi anunciada em 20 de setembro de 2022, no evento GPU Technology Conference (GTC) 2022; o RTX 4090 foi lançado em 12 de outubro de 2022, o RTX 4080 de 16 GB foi lançado em 16 de novembro de 2022 e o RTX 4070 Ti - originalmente anunciado como RTX 4080 de 12 GB - foi lançado em 5 de janeiro de 2023, com várias GPUs móveis a seguir em fevereiro de 2023. As placas são baseadas na arquitetura Ada Lovelace e apresentam raytracing acelerado por hardware (RTX) com os núcleos RT de terceira geração da Nvidia e os Tensor Cores de quarta geração.";

    html.data_link.setAttribute("href", "https://pt.wikipedia.org/wiki/GeForce_40")

    break;

  default:
    break;
}

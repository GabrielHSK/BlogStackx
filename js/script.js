const data_all_category = document.querySelector("[data_all_category]");
const data_technology_category = document.querySelector(
  "[data_technology_category]"
);
const data_ia_category = document.querySelector("[data_ia_category]");
const data_inovation_category = document.querySelector(
  "[data_inovation_category]"
);
const data_games_category = document.querySelector("[data_games_category]");

const data_cards = document.querySelectorAll("[data_cards]");

const data_card1 = document.querySelector("[data_card1]");
const data_card2 = document.querySelector("[data_card2]");
const data_card3 = document.querySelector("[data_card3]");
const data_card4 = document.querySelector("[data_card4]");

const data_date = document.querySelectorAll("[data_date]");

const data_views_card1 = document.querySelector("[data_views_card1]");
const data_views_card2 = document.querySelector("[data_views_card2]");
const data_views_card3 = document.querySelector("[data_views_card3]");
const data_views_card4 = document.querySelector("[data_views_card4]");

const date_time_now = {
  data: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
};

data_views_card1.innerHTML = localStorage.getItem("views_card1") || "0";
data_views_card2.innerHTML = localStorage.getItem("views_card2") || "0";
data_views_card3.innerHTML = localStorage.getItem("views_card3") || "0";
data_views_card4.innerHTML = localStorage.getItem("views_card4") || "0";

data_date.forEach((card) => [
  (card.innerHTML = `${date_time_now.data} ${date_time_now.time}`),
]);

data_all_category.addEventListener("click", () => {
  data_cards.forEach((card) => {
    card.style.display = "block";
  });
});

data_technology_category.addEventListener("click", () => {
  data_cards.forEach((card) => {
    if (card.getAttribute("data_card") === "technology") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

data_ia_category.addEventListener("click", () => {
  data_cards.forEach((card) => {
    if (card.getAttribute("data_card") === "ia") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

data_inovation_category.addEventListener("click", () => {
  data_cards.forEach((card) => {
    if (card.getAttribute("data_card") === "inovation") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

data_games_category.addEventListener("click", () => {
  data_cards.forEach((card) => {
    if (card.getAttribute("data_card") === "games") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

data_cards.forEach((card, indice) => {
  card.addEventListener("click", () => {
    localStorage.setItem("indice", indice + 1);
    switch (indice + 1) {
      case 1:
        data_views_card1.innerHTML = parseInt(data_views_card1.innerHTML) + 1;
        localStorage.setItem("views_card1", data_views_card1.innerText);
        window.location.assign("./postpage.html");
        break;

      case 2:
        data_views_card2.innerHTML = parseInt(data_views_card2.innerHTML) + 1;
        localStorage.setItem("views_card2", data_views_card2.innerText);
        window.location.assign("./postpage.html");
        break;

      case 3:
        data_views_card3.innerHTML = parseInt(data_views_card3.innerHTML) + 1;
        localStorage.setItem("views_card3", data_views_card3.innerText);
        window.location.assign("./postpage.html");
        break;

      case 4:
        data_views_card4.innerHTML = parseInt(data_views_card4.innerHTML) + 1;
        localStorage.setItem("views_card4", data_views_card4.innerText);
        window.location.assign("./postpage.html");
        break;

      default:
        break;
    }
  });
});

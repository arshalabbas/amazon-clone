/**
 * Scrap the grid cards data
 */

function scrapGridCards() {
  const data = [];

  for (let i = 4; i < 14; i++) {
    const layout = document.querySelector(
      `[data-cel-widget="card-${i.toString().padStart(2, "0")}"]`
    );

    let datum = {
      title: "",
      body: [],
      footer: "",
    };

    datum.title = layout.querySelector("h3 span.a-truncate-cut").innerHTML;
    const body = layout.querySelectorAll(".a-cardui-body a");

    body.forEach((el) => {
      let bodyDatum = {
        image: "",
        label: "",
      };
      bodyDatum.image = el.querySelector("img").src;
      bodyDatum.label = el.querySelector("span .a-truncate-cut").innerHTML;

      datum.body.push(bodyDatum);
    });

    datum.footer = layout.querySelector(
      ".a-cardui-footer span.a-truncate-cut"
    ).innerHTML;

    data.push(datum);
  }

  JSON.stringify(data);
}

function scrapImageData() {
  const data = [];

  for (let i = 44; i < 49; i++) {
    const layout = document.querySelector(
      `[data-cel-widget="card-${i.toString().padStart(2, "0")}"]`
    );

    let datum = {
      title: "",
      image: "",
    };

    datum.title = layout.querySelector("h3 span.a-truncate-cut").innerHTML;
    datum.image = layout.querySelectorAll(".a-cardui-body a img").src;

    data.push(datum);
  }

  JSON.stringify(data);
}

/**
 * Scrap the no labels cards
 */

function scrapNoLabelCard() {
  const data = { title: "", body: [], footer: "" };

  const layout = document.querySelector("[data-cel-widget='card-24']");

  data.title = layout.querySelector(
    ".a-cardui-header span.a-truncate-cut"
  ).innerHTML;

  layout
    .querySelectorAll(".a-cardui-body a img")
    .forEach((item) => data.body.push(item.src));

  data.footer = layout.querySelector(
    ".a-cardui-footer span.a-truncate-cut"
  ).innerHTML;

  JSON.stringify(data);
}

/**
 *
 * Detailed Card Scrapping
 */

const elements = document.querySelectorAll(
  '#arsh-cards .a-section[data-info=""]'
);
const data = Array.from(elements).map((element) => {
  const title = element.querySelector("span.a-truncate-full")
    ? element.querySelector("span.a-truncate-full").innerText.trim()
    : "";
  const image = element.querySelector("img")
    ? element.querySelector("img").src
    : "";
  const priceElement = element.querySelector("span.a-price .a-price-whole");
  const price = priceElement ? priceElement.innerText.trim() : "";
  const oldPriceElement = element.querySelector(
    "span.a-price-range .a-text-price .a-offscreen"
  );
  const oldPrice = oldPriceElement
    ? oldPriceElement.innerText.trim()
    : undefined;
  const fraction = element.querySelector("span.a-price .a-price-fraction")
    ? element.querySelector("span.a-price .a-price-fraction").innerText.trim()
    : "";

  return {
    title,
    image,
    price,
    oldPrice,
    fraction,
  };
});

JSON.stringify(data);

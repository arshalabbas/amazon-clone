function scrape() {
  const rows = [];
  const items = document.querySelectorAll(".navFooterDescItem");

  items.forEach((item) => {
    const title = item.querySelector("a").innerText.split("\n")[0];
    const subtle = item
      .querySelector(".navFooterDescText")
      .innerText.replace(/\n/g, " ");

    rows.push({ title, subtle });
  });

  return rows;
}

let desc;
function intitialise() {
  desc = "";
}
function readTxt() {
  fetch("../items.txt")
    .then((response) => response.text())
    .then((data) => {
      // Split data into lines
      const lines = data.split("\n");

      // Loop through each line
      lines.forEach((line, index) => {
        console.log(`Line ${index + 1}: ${line}`);
        // Do something with each line
        items = line.split(":");
        imageSrc = items[0];
        itemName = items[1].split("-");
        itemName.forEach(appendDesc);
        price = parseFloat(items[2]).toFixed(2);
        divClass = "item";
        createItemDiv(imageSrc, desc, price, divClass);
        intitialise();
      });
    })
    .catch((error) => console.error("Error:", error));
}
function appendDesc(item) {
  desc += item + " ";
}
function createItemDiv(imageSrc, desc, price, divClass) {
  const newDiv = document.createElement("div");

  if (divClass) {
    newDiv.setAttribute("class", divClass);
  }

  const newImg = document.createElement("img");
  newImg.setAttribute("src", "../" + imageSrc);

  const newParagraph = document.createElement("p");
  newParagraph.setAttribute("class", "newParagraph");
  newParagraph.textContent = desc;

  const newPrice = document.createElement("p");
  newPrice.textContent = "£" + price;

  newDiv.appendChild(newImg);
  newDiv.appendChild(newParagraph);
  newDiv.appendChild(newPrice);

  const parentElement = document.getElementById("items");

  parentElement.appendChild(newDiv);
}
intitialise();
readTxt();

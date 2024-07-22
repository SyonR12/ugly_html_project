let body = document.querySelector("body");
body.style.backgroundColor = "blue";

let imageborder = document.querySelector("img");
imageborder.style.borderColor = "yellow"
imageborder.style.borderStyle = "dotted"
imageborder.style.borderWidth = "5px"

let borders = document.getElementsByClassName("pokemon_images");
for (let i = 0; i < borders.length; i++) {
    borders[i].style.borderColor = "yellow";
    borders[i].style.borderStyle = "dotted";
    borders[i].style.borderWidth = "5px";
    borders[i].style.height = "100px";
    borders[i].style.height = "auto";
}
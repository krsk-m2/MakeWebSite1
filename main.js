window.onload = (event) => {
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("h1").addEventListener("click", function () {
    alert("痛っ! つつかないで!");
  });

}

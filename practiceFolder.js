let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let copyDiv = document.querySelector(".copyCode")
let rgb1 = "#051937";
let rgb2 = "#008793";

let hexValue = () => {
  let myHexaValues = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + myHexaValues[Math.floor(Math.random() * 16)];
  }
  return color;
};
let handleButton1 = () => {
    rgb1 = hexValue();
    btn1.innerHTML = rgb1;
  console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML=`background-Image:linear-gradiant(to right, ${rgb1},${rgb2})`
    btn1.style.backgroundColor = `${rgb1}`;
    
};
let handleButton2 = () => {
    rgb2 = hexValue();
    btn2.innerHTML = rgb2;
    console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    btn2.style.backgroundColor = `${rgb2}`;
    copyDiv.innerHTML = `background-Image:linear-gradiant(to right, ${rgb1},${rgb2})`
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
})

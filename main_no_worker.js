const sumBtn = document.querySelector("#sumBtn");
const bgBtn = document.querySelector("#bgBtn");

let sum = 0;

sumBtn.addEventListener("click", () => {
  console.log("sumUp started");
  for (let i = 0; i < 500000000; i++) sum += i;
  alert(`The final sum is ${sum}`);
});

bgBtn.addEventListener("click", () => {
  if (document.body.style.background !== "blue")
    document.body.style.background = "blue";
  else document.body.style.background = "green";
});

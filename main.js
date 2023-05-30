const worker = new Worker("worker.js"); // creating a new instance of the Worker class.
// And also defining the path of the worker script where the code that needs to be offloaded will be kept. This script is called a worker script
const sumBtn = document.querySelector("#sumBtn");
const bgBtn = document.querySelector("#bgBtn");

sumBtn.addEventListener("click", () => {
  worker.postMessage("Start working"); // We use postMessage to talk between main script (thread) and worker script (thread).
});

worker.onmessage = function (message) {
  alert(`The final sum is ${message.data}`);
}; // Receiving the message from the worker.js script

bgBtn.addEventListener("click", () => {
  if (document.body.style.background !== "blue")
    document.body.style.background = "blue";
  else document.body.style.background = "green";
});

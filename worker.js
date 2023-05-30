self.onmessage = function (message) {
  console.log(message.data);
  let sum = 0;
  for (let i = 0; i < 4000000000; i++) sum += i;

  // This'll return the sum back to the main thread
  self.postMessage(sum);
};

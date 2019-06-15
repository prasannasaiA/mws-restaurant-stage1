// Checking if serviceWorker is in navigator or not.
if ('serviceWorker' in navigator) {
  // Registering the serviceWorker with 'sw.js' file.
  navigator.serviceWorker.register('sw.js')
    .then((register) => {
      console.log(" ServiceWorker registered successfully.", register);
    })
    .catch((e) => {
      console.log("Error in registering the serviceWorker.", e);
    })
} else {
  console.log("The ServiceWorker is not registered.");
}

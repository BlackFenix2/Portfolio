export const registerServiceWorker = () => {
  if (window.location.protocol === 'https:' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
};

export default {};

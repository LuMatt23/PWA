if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('Service Worker registrato con successo:', registration))
        .catch(error => console.error('Errore durante la registrazione del Service Worker:', error));
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const webView = document.getElementById('webView');
    const defaultUrl = 'https://example.com'; // Default HTTPS page
    webView.src = defaultUrl;
});

document.getElementById('browseBtn').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput');
    const webView = document.getElementById('webView');
    let url = urlInput.value;

    if (url) {
        // Ensure the URL starts with 'https://'
        if (!url.startsWith('https://')) {
            if (url.startsWith('http://')) {
                // Replace 'http://' with 'https://'
                url = 'https://' + url.substring(7);
            } else {
                // Prepend 'https://'
                url = 'https://' + url;
            }
        }
        webView.src = url;
    }
});

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceWorker.js')
	.then(function() {
		console.log('Service Worker registration successful!');
	})
	.catch(function() {
		console.log('Service Worker registration failed!');
	});
}

self.onmessage = function(message){
	// Populate a buffer with random characters.
	let dataView = new DataView(message.data.transfers[0]);

	for (var i = 0; i < dataView.byteLength; i++){
		dataView.setUint8(i, Math.round(Math.random() * 99))
	}

	self.postMessage({payload: message.data.payload, transfers: [dataView.buffer]}, [dataView.buffer]);
}

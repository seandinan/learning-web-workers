/*
 Convert a binary array into a normal string.
 */

self.onmessage = function(message){
	let result = bin2str(message.data.transfers[0], message.data.payload.end);
	self.postMessage({payload: Object.assign({}, message.data.payload, {result: result, transfers: []})});

}


function bin2str(buffer, length, updateProgress){
	// Convert a Uint8 binary array into a string
	let arrayBuffer = new Uint8Array(buffer, 0, length);
	let result = '';
	let bufferLength = arrayBuffer.byteLength;
	if (updateProgress) updateProgress('BUFFER: ', bufferLength);
	for (let i = 0; i < bufferLength; i++){
		result += String.fromCharCode(arrayBuffer[i]);
	}
	return result;
}

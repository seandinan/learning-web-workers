
export default function(){
	self.onmessage = (message) =>{

		let response = `I got it: ${message.data}`;

		self.postMessage(response);
	}
}

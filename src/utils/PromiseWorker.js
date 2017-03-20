/*

Wraps the creation of a Web Worker in a Promise. The Promise resolves once it receives a message back from the Web Worker.

 */

import Promise from 'bluebird';

export default function PromiseWorker(workerFile, messageArgs, transferableArgsArray = []){

	return new Promise((resolve, reject) => {
		if (window.Worker === undefined) reject('This browser does not appear to support the WebWorker API.');

		let worker = new Worker(workerFile);

		worker.onmessage = (message) => {resolve(message.data)}

		worker.postMessage({payload: messageArgs, transfers: transferableArgsArray}, transferableArgsArray);

	})
}

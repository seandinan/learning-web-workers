import React from 'react';

import PromiseWorker from './../utils/PromiseWorker';

export default class Test extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			message: 'test'
		}
	}

	componentDidMount(){
		let arrayBuffer1 = new ArrayBuffer(5000000);
		let arrayBuffer2 = new ArrayBuffer(5000000);
		let arrayBuffer3 = new ArrayBuffer(5000000);
		let arrayBuffer4 = new ArrayBuffer(5000000);

		let worker1 = new PromiseWorker('src/workers/randomBuffer.js', 'data', [arrayBuffer1]);
		let worker2 = new PromiseWorker('src/workers/randomBuffer.js', 'data', [arrayBuffer2]);
		let worker3 = new PromiseWorker('src/workers/randomBuffer.js', 'data', [arrayBuffer3]);
		let worker4 = new PromiseWorker('src/workers/randomBuffer.js', 'data', [arrayBuffer4]);
		console.log('start', Date.now());
		console.time('Worker 1');
		worker1.then(data => {
			let bin2str = new PromiseWorker('src/workers/bin2str.js', {end: data.transfers[0].byteLength}, data.transfers);
			bin2str.then(data => {
				//console.log(data.payload.result.length);
				console.timeEnd('Worker 1');
				console.log('Worker 1', Date.now());
			}).catch(err => {throw new Error(err)});
		}).catch(err => {throw new Error(err)});

		console.time('Worker 2');
		worker2.then(data => {
			let bin2str = new PromiseWorker('src/workers/bin2str.js', {end: data.transfers[0].byteLength}, data.transfers);
			bin2str.then(data => {
				//console.log(data.payload.result.length);
				console.timeEnd('Worker 2');
				console.log('Worker 2', Date.now());
			}).catch(err => {throw new Error(err)});
		}).catch(err => {throw new Error(err)});


		console.time('Worker 3');
		worker3.then(data => {
			let bin2str = new PromiseWorker('src/workers/bin2str.js', {end: data.transfers[0].byteLength}, data.transfers);
			bin2str.then(data => {
				//console.log(data.payload.result.length);
				console.timeEnd('Worker 3');
				console.log('Worker 3', Date.now());
			}).catch(err => {throw new Error(err)});
		}).catch(err => {throw new Error(err)});


		console.time('Worker 4');
		worker4.then(data => {
			let bin2str = new PromiseWorker('src/workers/bin2str.js', {end: data.transfers[0].byteLength}, data.transfers);
			bin2str.then(data => {
				//console.log(data.payload.result.length);
				console.timeEnd('Worker 4');
				console.log('Worker 4', Date.now());
			}).catch(err => {throw new Error(err)});
		}).catch(err => {throw new Error(err)});


	}

	render(){
		return <div style={{padding: '5%'}}>
			Running! <br />
			{this.state.message}
		</div>
	}
}

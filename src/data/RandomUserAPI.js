import TodoActions from './TodoActions';
import request from 'superagent';

const RandomUserAPI = {
	get(){
		request.get('https://api.randomuser.me/')
			.set('Accept', 'application/json')
			.end(function(err, response) {
				if(err) return console.error(err);

				TodoActions.receiveRandom(response.body);
			});
	}
}

export default RandomUserAPI;
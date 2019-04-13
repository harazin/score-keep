import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

const renderPlayers = (playersList) => {
	return playersList.map((player) => <p key={player._id}>{player.name} has {player.score} point(s).</p>);
};

const handleSubmit = (e) => {
	let playerName = e.target.playerName.value;
	e.preventDefault();

	if(playerName){
		e.target.playerName.value = '';
		Players.insert({
			name: playerName,
			score: 0
		});
	}
};

Meteor.startup(() => {
	Tracker.autorun(() => {
		let players = Players.find().fetch();

		let title = 'Score Keep';
		let name = 'Mike';
		let jsx = (
			<div>
				<h1>{title}</h1>
				<p>Hello {name}!</p>
				<p>This is my second paragraph.</p>
				{renderPlayers(players)}
				<form onSubmit={handleSubmit}>
					<input type="text" name="playerName" placeholder="Player Name"/>
					<button>Add Player</button>
				</form>
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});

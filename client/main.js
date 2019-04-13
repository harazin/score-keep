import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (playersList) => {
	return playersList.map((player) => {
		return (
			<p key={player._id}>{player.name} has {player.score} point(s).
			<button onClick={() => Players.update({_id: player._id}, {$inc: {score: 1}})}>+1</button>
			<button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>-1</button>
			<button onClick={() => Players.remove(player._id)}>X</button>
			</p>
		);
	});
};

Meteor.startup(() => {
	Tracker.autorun(() => {
		let players = Players.find().fetch();
		let title = 'Score Keep'
		let jsx = (
			<div>
				<TitleBar title={title} subtitle="Made by Max"/>
				{renderPlayers(players)}
				<AddPlayer />
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});

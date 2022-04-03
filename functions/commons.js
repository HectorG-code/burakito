import { draw } from "./deck.js";

const players = [];

export const addPlayer = (player) => {
	players.push(player);
};

export const initialDraw = () => {
	for (let i = 0; i < 11; i++) {
		players.forEach((player) => player.take(draw()));
	}
};

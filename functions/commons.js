import * as DeckFn from "./deck.js";

export const DRAW_PILE = "drawPile";
export const DISCARD_PILE = "discardPile";

const players = [];
const decks = [];

export const addDeck = (deck) => {
	decks.push(deck);
};

export const getDeck = (id) => {
	return decks.find((deck) => deck.id === id);
};

export const addPlayer = (player) => {
	players.push(player);
};

export const getPlayer = () => {};

export const initialDraw = () => {
	const deck = getDeck(DRAW_PILE);
	for (let i = 0; i < 11; i++) {
		players.forEach((player) => player.take(deck.draw()));
	}
};

export const getActivePlayer = () => {
	return players[0];
};

export const initGame = () => {
	decks.push(new DeckFn.Deck(DeckFn.generate(), DRAW_PILE));
	decks.push(new DeckFn.Deck([], DISCARD_PILE));
	const deck = getDeck(DRAW_PILE);
	deck.render();
	deck.shuffle();
};

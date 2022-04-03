import { renderDeck } from "./render.js";

class Card {
	constructor(number, suit, value) {
		this.number = number;
		this.suit = suit;
		this.value = value;
	}
}

export class Deck {
	constructor(deck, id) {
		this.deck = deck;
		this.id = id;
	}

	shuffle = () => {
		let top = this.deck.length;

		while (--top) {
			let current = Math.floor(Math.random() * (top + 1));
			[this.deck[current], this.deck[top]] = [
				this.deck[top],
				this.deck[current],
			];
		}
	};

	draw = () => {
		const card = this.deck.pop();
		this.render();
		return card;
	};

	drawAll = () => {
		const cards = [...this.deck];
		this.deck = [];
		this.render();
		return cards;
	};

	add = (card) => {
		this.deck.push(card);
		this.render();
	};

	render = () => {
		renderDeck(this.deck.length, this.id);
	};
}

// MOCKUP DATA

const commons = [
	{ number: "A", value: 20 },
	{ number: "2", value: 20 },
	{ number: "3", value: 5 },
	{ number: "4", value: 5 },
	{ number: "5", value: 5 },
	{ number: "6", value: 5 },
	{ number: "7", value: 5 },
	{ number: "8", value: 10 },
	{ number: "9", value: 10 },
	{ number: "10", value: 10 },
	{ number: "J", value: 10 },
	{ number: "Q", value: 10 },
	{ number: "K", value: 10 },
];
const suits = ["♥", "♦", "♣", "♠"];

export const generate = () => {
	const deck = [];
	suits.forEach((suit) => {
		deck.push(
			...commons.map((common) => {
				return new Card(common.number, suit, common.value);
			})
		);
	});
	deck.push(new Card("Joker", "", 50));
	deck.push(new Card("Joker", "", 50));
	return deck;
};

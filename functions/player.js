import { renderPlayer } from "./render.js";
import * as Common from "./commons.js";

export class Player {
	constructor(name) {
		this.name = name;
		this.hand = [];
		this.score = 0;
	}

	take = (card) => {
		this.hand.push(card);
		this.render();
	};

	dispose = (propCard) => {
		const disposed = this.hand.splice(
			this.hand.findIndex(
				(card) => card.number === propCard.number && card.suit === propCard.suit
			),
			1
		)[0];
		Common.getDeck(Common.DISCARD_PILE).add(disposed);
		this.render();
	};

	render = () => {
		renderPlayer(this, this.dispose);
	};
}

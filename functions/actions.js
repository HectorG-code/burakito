import { Player } from "./player.js";
import * as Common from "./commons.js";

const startBtn = document.getElementById("start");
const addPlayerBtn = document.getElementById("addPlayer");
const playerNameInp = document.getElementById("playerName");
const drawPile = document.getElementById("drawPile");
const discardPile = document.getElementById("discardPile");

addPlayerBtn.addEventListener("click", () => {
	const player = new Player(playerNameInp.value);
	player.render();
	Common.addPlayer(player);
});

startBtn.addEventListener("click", () => {
	Common.initialDraw();
});

drawPile.addEventListener("click", () => {
	Common.getActivePlayer().take(Common.getDeck(Common.DRAW_PILE).draw());
});

discardPile.addEventListener("click", () => {
	Common.getDeck(Common.DISCARD_PILE)
		.drawAll()
		.forEach((card) => {
			Common.getActivePlayer().take(card);
		});
});

Common.initGame();

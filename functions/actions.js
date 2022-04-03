import { Player } from "./player.js";
import * as Deck from "./deck.js";
import * as Common from "./commons.js";

const startBtn = document.getElementById("start");
const addPlayerBtn = document.getElementById("addPlayer");
const playerNameInp = document.getElementById("playerName");
const playersDiv = document.getElementById("players");

addPlayerBtn.addEventListener("click", () => {
	const player = new Player(playerNameInp.value);
	Common.addPlayer(player);
	const playerScreen = document.createElement("div");
	playerScreen.id = "player" + player.name + "Scr";
	playerScreen.className = "player";

	const playerTitle = document.createElement("h1");
	playerTitle.textContent = player.name;
	playerScreen.appendChild(playerTitle);

	const playerHand = document.createElement("div");
	playerHand.id = "playerHand" + player.name + "Scr";
	playerHand.className = "player--hand";
	playerScreen.appendChild(playerHand);

	playersDiv.appendChild(playerScreen);
});

startBtn.addEventListener("click", () => {
	Deck.generate();
	Deck.shuffle();
	Common.initialDraw();
});

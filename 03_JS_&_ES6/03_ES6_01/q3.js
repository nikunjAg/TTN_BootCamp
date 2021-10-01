console.log("----- Question 3 -----");
const song = {
	name: "Dying to live",
	artist: "Tupac",
	featuring: "Biggie Smalls",
};

const songEl = `
<div class="song">
    <p>${song.name} — ${song.artist} (${song.featuring})</p>
</div>
`;
document.body.insertAdjacentHTML("beforeend", songEl);

console.log("Song Element inserted");

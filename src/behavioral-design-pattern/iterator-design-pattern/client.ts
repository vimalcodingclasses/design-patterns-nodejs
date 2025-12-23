import { Playlist } from "./Playlist";
import { Song } from "./Song";

const myMix: any = new Playlist("Coding Vibes");
myMix.addSong(new Song("Midnight City", "M83"));
myMix.addSong(new Song("Explicit Track", "Unknown")); // This will be skipped
myMix.addSong(new Song("Strobe", "Deadmau5"));

// Because we implemented [Symbol.iterator], the class works with standard loops!
console.log(`--- Playing: ${myMix.name} ---`);

for (const song of myMix) {
    console.log(`Now Playing: ${song.title} by ${song.artist}`);
}

// It also works with the Spread Operator
const playlistArray = [...myMix];
console.log('\nPlaylist as Array:', playlistArray);
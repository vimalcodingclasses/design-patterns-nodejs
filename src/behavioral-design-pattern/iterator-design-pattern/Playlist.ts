export class Playlist {
    private songs: any;
    constructor(private name: any) {
        this.name = name;
        this.songs = []; // Internal storage
    }

    addSong(song: any) {
        this.songs.push(song);
    }

    // IMPLEMENTATION: The Iterator Protocol
    // We use a Generator Function (*) for simplicity
    *[Symbol.iterator]() {
        for (const song of this.songs) {
            // You can add logic here (e.g., skip explicit songs)
            if (song.title.includes('Explicit')) {
                continue;
            }
            yield song;
        }
    }
}
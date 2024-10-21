/* # TypeScript

### Lista de reproducción musical 

```typescript
interface Song {
  title: string;
  artist: string;
  duration: number; // en segundos
}

class Playlist {
  private songs: Song[] = [];

  addSong(song: Song): void {
    / Implementar
  }

  removeSong(title: string): void {
    / Implementar
  }

  getTotalDuration(): string {
    / Implementar: Devolver duración total en formato "hh:mm:ss"
  }

  getSongsByArtist(artist: string): Song[] {
    / Implementar
  }
}
```
 */ //Ejercicio 1
"use strict";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class Playlist {
    addSong(song) {
        this.songs.push(song);
    }
    removeSong(title) {
        this.songs = this.songs.filter((song)=>song.title !== title);
    }
    getTotalDuration() {
        const totalSeconds = this.songs.reduce((acc, song)=>acc + song.duration, 0);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = totalSeconds % 60;
        const hoursStr = hours < 10 ? '0' + hours : String(hours);
        const minutesStr = minutes < 10 ? '0' + minutes : String(minutes);
        const secondsStr = seconds < 10 ? '0' + seconds : String(seconds);
        return `${hoursStr}:${minutesStr}:${secondsStr}`;
    }
    getSongsByArtist(artist) {
        return this.songs.filter((song)=>song.artist.toLowerCase() === artist.toLowerCase());
    }
    constructor(){
        _define_property(this, "songs", []);
    }
}
const miPlaylist = new Playlist();
/* para conseguir los segundos de la cancion, por ejemplo si es de 4:45 minutos 
4*60segundos = 240 
240 + 45 = 285 */ const cancion1 = {
    title: "Mandolin Rain",
    artist: "Bruce Hornsby & The Range",
    duration: 285
};
const cancion2 = {
    title: "The Way It Is",
    artist: "Bruce Hornsby",
    duration: 278
};
miPlaylist.addSong(cancion1);
miPlaylist.addSong(cancion2);
console.log("Duración total:", miPlaylist.getTotalDuration());
const cancionesDeArtistA = miPlaylist.getSongsByArtist("Bruce Hornsby");
console.log("Canciones de Bruce Hornsby:", cancionesDeArtistA);
miPlaylist.removeSong("");
console.log("Lista de canciones actualizada:", miPlaylist);
console.log("Nueva duración total:", miPlaylist.getTotalDuration());

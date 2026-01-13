function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) album.tracks = tracks;
    return album;
}

console.log(make_album("Atif", "Hits", 10));
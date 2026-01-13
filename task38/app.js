function make_great(names) {
    return names.map(name => `Great ${name}`);
}

let greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
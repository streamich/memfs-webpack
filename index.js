import {vol, writeFileSync, readFileSync} from 'fs';

writeFileSync('/text.txt', 'Hello world!');
console.log(readFileSync('/text.txt', 'utf8'));
console.log(vol.toJSON());

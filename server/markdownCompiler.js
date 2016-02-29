import Remarkable from 'remarkable';
import fs from 'fs';

export default function () {
    var md = new Remarkable('full');
    var strng  = md.render(fs.readFileSync(__dirname + '/articles/famous.md','utf8'));
    console.log(strng);
    return strng
}

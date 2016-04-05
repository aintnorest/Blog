import Remarkable from 'remarkable';
import fs from 'fs';

export default function (name) {
    var md = new Remarkable('full');
    var strng  = md.render(fs.readFileSync(__dirname + '/articles/'+name,'utf8'));
    return strng
}

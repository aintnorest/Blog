import fs from 'fs';
//
const list = fs.readdirSync(__dirname + '/articles/');
//
export default function() {
    return list;
}

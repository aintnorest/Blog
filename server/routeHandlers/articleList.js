import fs from 'fs';
//
let fullList = fs.readdirSync(__dirname + '/../articles/');
//
export default function(request, reply) {
    let flLen = fullList.length;
    let resp = {list: [], count: flLen, begin: null, end: null, err: null};
    if(request.params.count === undefined) {
        resp.list = fullList;
        resp.begin = 0;
        resp.end = flLen === 0 ? 0 : flLen - 1;
        reply(resp);
        return
    }
    let params = request.params.count.split('-');
    if(params.length === 1){
        resp.list = fullList.slice(0,params[0]);
        resp.begin = 0;
        resp.end = params[0] > flLen ? flLen - 1 : params[0];
    } else if(params.length === 2){
        resp.list = fullList.slice(params[0],params[1]);
        resp.begin = params[0];
        resp.end = params[1] > flLen ? flLen - 1 : params[1];
    }
    if(resp.list.length < 1) resp.err = "Requested List has no items";
    reply(resp);
}

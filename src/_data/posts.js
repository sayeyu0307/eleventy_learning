// import fetch from 'node-fetch';
const fetch = require('node-fetch')
var fs = require("fs");

async function  download(u, p) {
    return fetch(u, {
        method: 'GET',
        headers: { 'Content-Type': 'application/octet-stream' },
    }).then(res => res.buffer()).then(_ => {
        fs.writeFile(p, _, "binary", function (err) {
            console.log(err || p);
        });
    });
}


module.exports = async () => {
    try {
        const response = await fetch('http://42.192.46.235/dev-api/exhibit/info/list?pageNum=1&pageSize=10').then(x => x.json()).then(x => x.rows)
        for (let i = 0; i < response.length; i++) {
            const {imgs} = response[i];
            await download(`http://42.192.46.235/dev-api${imgs}`, `src/img/${imgs.split("/").reverse()[0]}`)
        }
        return response.map(element =>  Object.assign(element,{filename:element.imgs.split("/").reverse()[0]}));
    } catch (error) {
        console.log(error)
        return []
    }
}
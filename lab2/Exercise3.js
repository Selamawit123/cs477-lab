const fs = require("fs");
const zlib = require('zlib');
const path = require("path")
const gunzib = zlib.createGunzip();
const readable= fs.createReadStream('./input.txt.gz')
const decompressed = fs.createWriteStream('./input.txt')

   readable.pipe(gunzib).pipe(decompressed);
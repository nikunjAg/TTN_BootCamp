const { createReadStream, createWriteStream } = require("fs");
const path = require("path");

// Different Method to create Buffer
const buffer1 = Buffer.alloc(20);
const lastPos = buffer1.write("Hello");
buffer1.write(" World!", lastPos, "utf-8");
console.log(buffer1);
console.log(buffer1.toString());

const buffer3 = Buffer.from([1, 2, 3, 4]);
console.log(buffer3.toJSON().data);

const bufferA = buffer1.slice(0, 5);
const bufferB = buffer1.slice(6, 11);

const bufferRes = Buffer.concat([bufferA, bufferB]);
console.log(bufferRes.toString());

const readStream = createReadStream(path.join(__dirname, "logger.txt"));
const writeStream = createWriteStream(path.join(__dirname, "/dest.txt"));

readStream.pipe(writeStream);

// readStream.on("data", (chunk) => {
// 	console.log(chunk.toString());
// });

// readStream.on("end", () => {
// 	console.log("Finished");
// });

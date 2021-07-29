const { v4: uuidv4 } = require('uuid');
const murmurhash3X64128 = require('number-generator/lib/murmurhash3_x64_128');
const murmurhash2X8632 = require('number-generator/lib/murmurhash2_x86_32');

const makeParseIp = (req) => req.headers['x-forwarded-for']?.split(',').shift()
    || req.socket?.remoteAddress;

const makeSluginID = (length) => {
  let result = '';
  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${murmurhash3X64128(uuidv4())}`;
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const makeSluginNumber = (length) => {
  let result = '';
  const characters = `0123456789${murmurhash2X8632(uuidv4())}`;
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// console.log(makeSluginNumber(30));
// console.log(uuidv4())

module.exports = {
  makeSluginNumber,
  makeSluginID,
  makeParseIp,
};

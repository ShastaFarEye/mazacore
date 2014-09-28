var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f8b503df'),
  addressVersion: 0x32,
  privKeyVersion: 224,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('0cc638e2c6b5b4b1446d36145627e30becc60f3fe1da784160ced8737c0c0000'),
    merkle_root: hex('4F9F58D1D1C7DD6C2818DABB394AF876BB8D16FC4C59D99D9834588E3796D462'),
    height: 0,
    nonce: 2091390249,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1390747675,
    bits: 504365040,
  },
  dnsSeeds: [
    'node.mazacoin.org',
    'node.mazacoin.cf',
    'mazacoin.no-ip.org'
  ],
  defaultClientPort: 12835
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('05fea901'),
  addressVersion: 0x58,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('dece625dde109818f85884258ef3afa86f8e07faa47f458ae11d637fae030000'),
    merkle_root: hex('62d496378e5834989dd9594cfc168dbb76f84a39bbda18286cddc7d1d1589f4f'),
    height: 0,
    nonce: 2091634749,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1411587941,
    bits: 504365040,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 11835
};

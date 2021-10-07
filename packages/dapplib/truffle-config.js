require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain umbrella good ensure surge genre'; 
let testAccounts = [
"0xacf95e8e781d1d0efa9b03590b8c620705d4f987100a152f2f86fe69d5be4d9e",
"0x0bf038c75b337d95185c98bcbf622c870d66c08abfa1aa1721d10a33c86889d6",
"0xded67ce382404350e79c9ba1a63c634f4e6245e95692210a94b729ba2ca6627b",
"0xad3af0ab34f652db0a1c6fe72d96b3a9a0aed8034da2a9523b31b58386dcb1e1",
"0xa5eab50b18322310f5574ca931f439d9046c25240145101f1bf40a24228f6859",
"0xf1af46e28e4d6c1b58942e874773b71c9e8f83c7da362fe67f6054b7f5eba6d6",
"0x108a585ab81547a990bc182dc905fc8a41b8f4fcc61280f70a6c37794f3e0e93",
"0x090ac54512b371a67d342598d8386e13a07db55a1c5d1ebe07d0148fbf9946f2",
"0xfe794766f53957cd7a1343acd246501d9350ac519ec1fdad31a9a728ad52cf9d",
"0x44417e74857c0ed6bd803e7850528807c276bc556b1d5f6bd555d192bfc71c42"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


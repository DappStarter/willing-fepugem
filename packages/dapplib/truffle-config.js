require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note office puppy install depth forget gas'; 
let testAccounts = [
"0x444b28be4d6a48841046a96bc772d78c0807acab85ab3f0cc442a3076fc61410",
"0xf6ae89ebb49e904ea89246fc12574a9e04ad22795d767ba6e1072e40c11b0877",
"0xc5798e9d2e32e48a9023551e2661b8a75c18ebbc53d1af852b64e63890e62161",
"0x71bb4bf3f6611fece6e4e29eebc90c6df3025d78525889685a08ba6151f99fa0",
"0xc4540c4de4c80a70935d27f00dfe55bdb54f9c381dd0f4a3151570c4dafbf97f",
"0xeb70f7a7567dac72b63bfde20f6b482230915b31be1fe77adab86db7fd8f4658",
"0x5f336672390ea252791fcd31c442f5b8a8717248e4dad6c3716e119463c62060",
"0xd59805ec70771521d7fb2ea8e71537a3588bbb45331be6c692ac3d61418cdcc5",
"0x2c13b8982307c8875beb419e78077c445d7faff9727a46addee3153882209868",
"0x62911457da73324f536ac119488ff43c88940f8badfd5c160c9949f611bc809b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

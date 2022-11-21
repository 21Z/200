const { config } = require("dotenv");
const NodeFetch = require("node-fetch");

// load .env
config();

// need some stuff globally
Object.defineProperties(globalThis, {
    fetch: {
        value: NodeFetch.default ?? NodeFetch,
        writable: true,
        configurable: true,
        enumerable: false
    },
});

// instantiate client
require("./client.js");


const { connect } = require("./client");
const { setupInput, handleUserInput } = require("./input");



console.log("Connecting ...");


setupInput(connect());



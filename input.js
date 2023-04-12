const { builtinModules } = require("module");
const { connect } = require("./client");
let connection;
const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);


};

const handleUserInput = function(key) {
  
  if (key === 'w') {
    
    connection.write("Move: up");
  };
  if (key === 'a') {
    connection.write("Move: left");
  };
  if (key === 's') {
    connection.write("Move: down");
  };
  if (key === 'd') {
    connection.write("Move: right");
  };
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'f') {
    connection.write("Say: Nice Moves")
  }
  if (key === 'g') {
    connection.write("Say: I win!")
  }
  

  //return stdin;
};




module.exports = {
  setupInput,
  handleUserInput
}

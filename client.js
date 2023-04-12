const net = require("net");
const { setupInput, handleUserInput } = require("./input");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //alert user connection was established
  conn.on("connect", () => {
    console.log("connection established");
  });
  //send name
  conn.on("connect", () => {
    conn.write("Name: GWR");
  });

  conn.on("data", (data) => {
    console.log(data);

  });
  
  return conn;
};



module.exports = { connect, };
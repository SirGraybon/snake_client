const net = require("net");
const { setupInput, handleUserInput } = require("./input");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
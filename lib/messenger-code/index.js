const chalk = require('chalk'),
      util = require('../util');
let Client;

function MessengerCode (client) {
  Client = client;
  this.generate = generate;
}

function generate (options) {
  let props = {};
  if (options) {
    if (options.size) props.size = options.size;
    if (options.data) props.data = options.data;
  }
  Client.generateMessengerCode(props)
    .then(res => {
      console.log(chalk.bold.underline('\nDownload your Messenger Code here:\n'));
      console.log(chalk.green(res.uri) + '\n');     
    })
   .catch (e => util.logError(e));
}

module.exports = MessengerCode;
const Messenger = require('messenger-node'),
      util = require('../util'),
      chalk = require('chalk');

let Client;

function MessengerProfile (client) {  
  Client = client
  this.get = get;
  this.set = set;
  this.delete = del;
}

function get (fields) {  
  Client.getMessengerProfile(fields)
    .then(res => {      
      for (field in res.data[0]) {
        console.log(chalk.green(`${field}: ${JSON.stringify(res.data[0][field], null, 2)} \n\n`));  
      }      
    })
    .catch (e => util.logError(e));
}

async function set (fields) {
  let update = {};
  for (let i = 0; i < fields.length; i++) {    
    let value = await util.getInput(fields[i]);
    update[fields[i]] = value;
  };

  Client.setMessengerProfile(update)
    .then(res => {
      Client.getMessengerProfile(fields).then(profile => {
        console.log(chalk.underline.bold('\nSuccess! Here is your updated Messenger Profile:\n'));
        console.log(chalk.green(JSON.stringify(profile.data[0], null, 2)));     
      });      
    })
    .catch (e => util.logError(e));
}

function del (fields) {
  Client.deleteMessengerProfile(fields)
    .then(res => {
      console.log(chalk.bold.underline('\nSuccessfully deleted:\n- '));
      console.log(chalk.green(fields.join('\n- ')));     
    })
    .catch (e => util.logError(e));
}

module.exports = MessengerProfile;
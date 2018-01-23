const Messenger = require('messenger-node'),
      util = require('../util');

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
        console.log(`${field}: ${JSON.stringify(res.data[0][field], null, 2)} \n\n`);  
      }
      
    })
    .catch (e => console.error(e));
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
        console.log('Success! Current Messenger Profile:\n\n' + JSON.stringify(profile.data[0], null, 2));     
      });      
    })
    .catch (e => console.error(e));
}

function del (fields) {
  Client.deleteMessengerProfile(fields)
    .then(res => {
      console.log('Successfully deleted:\n- ' + fields.join('\n- '));     
    })
    .catch (e => console.error(e));
}

module.exports = MessengerProfile;
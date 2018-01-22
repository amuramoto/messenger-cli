const Messenger = require('messenger-node'),
      util = require('../util');
let Client;

function MessengerProfile (page_token) {

  let token = util.checkToken(page_token);
  
  Client = new Messenger.Client({'page_token': page_token});
  
  this.get = get;
  this.set = set;
  this.delete = del;

}

function get (fields) {
  Client.getMessengerProfile(fields)
    .then(res => {
      res.data.forEach(field => {
        for (let field_name in field) {
          console.log(`${field_name}: ${JSON.stringify(field[field_name])}`)
        }      
      });
    })
}

function set (fields) {
  let update;
  fields.forEach(field => {
    let field = field.split('=');
    update[field[0]] = field[1];
  });

  Client.deleteMessengerProfile(fields)
    .then(res => {
      Client.getMessengerProfile(fields).then(profile => {
        console.log('Success:\n\n' + profile);     
      });      
    })
    .catch (e => console.error(e));
}

function del (fields) {
  Client.deleteMessengerProfile(fields)
    .then(res => {
      console.log('Successfully deleted:\n\n' + fields.join(', '))     
    })
    .catch (e => console.error(e));
}

module.exports = MessengerProfile;
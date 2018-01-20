const Messenger = require('messenger-node');
let Client;

function MessengerProfile (page_token) {

  if (!page_token) {
    console.error('Page access token required');
    process.exit(1);
  }

  Client = new Messenger.Client({'page_token': page_token});
  
  this.get = get;
  this.set = set;
  this.delete = del;

}

function get (fields) {
  Client.getMessengerProfile(fields).then(res => {
    res.data.forEach(field => {
      for (let field_name in field) {
        console.log(`${field_name}: ${JSON.stringify(field[field_name])}`)
      }      
    });
  });
}

function set (fields) {

}

function del (fields) {

}

module.exports = MessengerProfile;
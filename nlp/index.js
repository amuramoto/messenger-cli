let Client;

function Nlp (client) {
  Client = client;
  this.set = set;
}

function set (configs) {
  let update = {};
  configs.forEach(config => {
    if (config.indexOf('=') < 1) {
      console.error('Syntax error: Config must be in the format config=value.')
      process.exit(1);
    }
    config = config.split('=');
    update[config[0]] = config[1];
  });
 Client.setNlpConfigs(update)
  .then(res => {
    console.log('Success! The following NLP configs were updated:\n\n' + JSON.stringify(update, null, 2));     
  })
  .catch(e => console.error(e)); 
}

module.exports = Nlp;
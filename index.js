#!/usr/bin/env node

'use strict'

const program = require('commander'),
      messenger_profile = require('./messenger-profile'),
      nlp = require('./nlp'),
      messenger_code = require('./messenger-code'),
      util = require('./util'),
      token = program.token || process.env.MESSENGER_PAGE_TOKEN,
      client = util.getClient(token);

program
  .version('0.0.1')
  .description('A simple CLI for making common Messenger Platform calls.')
  .option('-t, --token [token]', 'Page access token. May also be set in MESSENGER_PAGE_TOKEN env var.')

program
  .command('profile <fields...>')
  .description('Set/get/delete Messenger Profile properties.')
  .option('-s, --set', 'Set Messenger Profile fields.')
  .option('-d, --delete', 'Delete Messenger Profile fields.')
  .option('-g, --get', 'Retrieve Messenger Profile fields.')
  .action((fields, options) => {        
    const actions = ['get', 'set', 'delete'].filter(action => options[action]),
          MessengerProfile = new messenger_profile(client);    

    if (actions.length > 1) {
      console.error('Error: Multiple operations not allowed');
      process.exit(1);
    }

    if (options.set) {          
      MessengerProfile.set(fields);
    } else if (options.delete) {
      MessengerProfile.delete(fields);
    } else {
      MessengerProfile.get(fields);
    }
  });

program  
  .command('nlp <configs...>')
  .description('Set config values for built-in NLP. Configs should be in the format config_name=value.')
  .action((configs) => {    
    const Nlp = new nlp(client);   
    console.log(configs)
    Nlp.set(configs);
    
  });

// program  
//   .command('code')
//   .description('Generates static and parametric Messenger Codes')
//   .option('-s, --size <size>', 'Size of the returned Messenger Code in pixels. Supports 100-2000.')
//   .option('-d, --data <ref>', 'Ref string sent to the bot when the Messenger Code is scanned.')
//   .action((fields, options) => {    
//     const token = options.token || process.env.MESSENGER_PAGE_TOKEN,
//           actions = ['get', 'set', 'delete'].filter(action => options[action]),
//           MessengerProfile = new messenger_profile(token);

//     util.checkToken(token);          
//     if (actions.length > 1) {
//       console.error('Error: Multiple operations not allowed');
//       process.exit(1);
//     }

//     if (options.set) {
//       MessengerProfile.set(fields) 
//     } else if (options.delete) {
//       MessengerProfile.delete(fields)
//     } else if (options.get || token) {
//       MessengerProfile.get(fields)
//     }
//   });

program.parse(process.argv);  

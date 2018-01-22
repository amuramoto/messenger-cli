#!/usr/bin/env node

'use strict'

const program = require('commander'),
      messenger_profile = require('./messenger-profile');
      
program
  .version('0.0.1')
  .description('A simple CLI for making common Messenger Platform calls.')


program
  .command('profile [fields]')
  .description('Set/get/delete Messenger Profile properties.')
  .option('-s, --set', 'Set Messenger Profile fields.')
  .option('-d, --delete', 'Delete Messenger Profile fields.')
  .option('-g, --get', 'Retrieve Messenger Profile fields.')
  .option('-t, --token <token>', 'Page access token. May also be set in MESSENGER_PAGE_TOKEN env var.')
  .action((fields, options) => {    
    const token = options.token || process.env.MESSENGER_PAGE_TOKEN,
          actions = ['get', 'set', 'delete'].filter(action => options[action]),
          MessengerProfile = new messenger_profile(token);
    if (actions.length > 1) {
      console.error('Error: Multiple operations not allowed');
      process.exit(1);
    }

    if (options.set) {
      MessengerProfile.set(fields) 
    } else if (options.delete) {
      MessengerProfile.delete(fields)
    } else if (options.get || token) {
      MessengerProfile.get(fields)
    }
  });

program  
  .command('nlp')
  .description('Set config values for built-in NLP')
  .option('-s, --set <configs...>', 'Set built-in NLP config values.')  

program  
  .command('code')
  .('Generates static and parametric Messenger Codes')
  .option('-s, --size <size>', 'Size of the returned Messenger Code in pixels. Supports 100-2000.')
  .option('-d, --data <ref>', 'Ref string sent to the bot when the Messenger Code is scanned.')



program.parse(process.argv);  

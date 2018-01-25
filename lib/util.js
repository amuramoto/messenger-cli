const Messenger = require('messenger-node'),
      readline = require('readline'),
      chalk = require('chalk');

function getClient (page_token) {
  if (!page_token) { 
    console.error('Page access token required');
    process.exit(1);
  } 
  
  return new Messenger.Client({'page_token': page_token});
}

function getInput (prompt) {
  return new Promise ((resolve, reject) => {
    let input = '';
    let count = 0;

    let rl = readline.createInterface({
        'input': process.stdin,
        'output': process.stdout
    });

    readline.emitKeypressEvents(process.stdin);

    process.stdin.on('keypress', (key) => {
      if (key == '\r' || key == '\n') {
        count ++;    
        if (count === 2) rl.close()
      } else {
        count = 0;    
      }
    });

    rl.on('line', function (cmd) {
        input += cmd.trim();
    });

    rl.on('close', function (cmd) {
        resolve(input);
    });  

    logPrompt(prompt + '\n');
  })
  
}

function logPrompt (message) {
  console.log(chalk.underline.bold(message));
}

function logResult (result) {
  console.log(chalk.green(result));
}

function logError (e) {
  console.error('\n' + chalk.red(JSON.stringify(e, null, 2)) + '\n');
}

module.exports = {
  getClient,
  getInput,
  logError,
  logPrompt,
  logResult
}
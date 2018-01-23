const Messenger = require('messenger-node'),
      readline = require('readline');

function getClient (page_token) {
  if (!page_token) { 
    console.error('Page access token required');
    process.exit(1);
  } 
  
  return new Messenger.Client({'page_token': page_token});
}

function getInput (field) {
  return new Promise ((resolve, reject) => {
    let input = '';
    let count = 0;

    let rl = readline.createInterface({
        'input': process.stdin,
        'output': process.stdout,
        'prompt': `\nEnter ${field} object:\n\n`
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

    rl.prompt('test');

    rl.on('line', function (cmd) {
        input += cmd.trim();
    });

    rl.on('close', function (cmd) {
        resolve(input);
    });  

    rl.prompt();
  })
  
}

module.exports = {
  getClient,
  getInput
}
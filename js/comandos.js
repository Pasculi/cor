const command = {
  name: 'ping',
  description: 'replies with pong!',
  execute(message) {
    message.reply('pong!');
  },
  
}

console.log(command.name, command.description)
const command = {
  name: 'ping',
  description: 'replies with pong!',
  execute(message) {
    message.reply('pong!');
  },
  
}

console.log(command.name, command.description)

const userData = {
  firstName: "William",
  lastName: "Webberton",
  age: 55
};

const printUserParams = ({ firstName, lastName, age }) => {
  console.log(firstName);
  console.log(lastName);
  console.log(age);
};

console.log(printUserParams);

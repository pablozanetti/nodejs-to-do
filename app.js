//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const todo = require('./to-do/to-do');

console.log(argv);

let cmd = argv._[0];

switch (cmd) {
    case 'create':
        console.log('Create task');
        let task = todo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        console.log('list to-do tasks');
        list = todo.getList();
        for (let task of list) {
            console.log('====== To Do ======'.green);
            console.log(task.description);
            console.log('Estado: ', task.completed);
            console.log('==================='.green);
        }
        break;
    case 'update':
        console.log('Update to-do task');
        let updated = todo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        todo.deleteTask(argv.description);
        break;
    default:
        console.log('Unknown command');
}
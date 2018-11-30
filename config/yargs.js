const description = {
    demand: true,
    alias: 'd',
    desc: "to-do task description"
}

const completed = {
    alias: 'c',
    default: true,
    desc: 'Updates the task as completed or to-do'
}

const argv = require('yargs')
    .command('create', 'creates a to-do task', {
        description
    })
    .command('update', 'update to-do task', {
        description,
        completed
    })
    .command('delete', 'deletes a to-do task', {
        description
    })
    .help()
    .argv;


module.exports = {
    argv
}
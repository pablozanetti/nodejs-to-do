const fs = require('fs');

let todoList = [];

const saveData = () => {

    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) console.error(err)
    });
}

const readData = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }
}

const create = (description) => {

    readData();
    let todo = {
        description,
        completed: false
    };

    todoList.push(todo);
    saveData();
    return todo;
}

const getList = () => {
    readData();
    return todoList;
}

const update = (description, completed = true) => {
    readData();
    let index = todoList.findIndex(task => task.description === description);
    if (index >= 0) {
        todoList[index].completed = completed;
        saveData();
        return true;
    } else {
        return false;
    }
}

const deleteTask = (description) => {
    readData();
    todoList = todoList.filter(task => task.description !== description);
    saveData();
}

module.exports = {
    create,
    getList,
    update,
    deleteTask
}
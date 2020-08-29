const db = require('./connection');

const info = db.get('info');

function getAll() {
    return info.find();
}

function create(){
    return info.insert({
        test: "test",
        title: "title",
        users: {
            1: "1",
            2: "2",
            3: "3"
        }
    })
}

module.exports = {
    getAll,
    create
}

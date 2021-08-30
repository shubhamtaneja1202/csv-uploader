const functions = require('./functions');

module.exports = {
    runQuery : functions.runQuery,
    commit : functions.commit,
    rollback : functions.rollback,
    beginTransaction : functions.beginTransaction
}
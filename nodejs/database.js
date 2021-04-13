var mysql = require('mysql');
var db_info = {
	host: 'localhost',
	port: '3306',
	user: 'lbc',
	password: 'hello12!',
	database: 'bookinfo'
};
module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
var http = require('http');
var fs = require('fs');
var url = require('url');
var db_config = require(__dirname + '/database.js');
var conn = db_config.init();

db_config.connect(conn);


function templateHTML(isbn,name,author,publisher,price){
	return `
		<!doctype HTML>
		<html>
			<head>
				<meta charset="UTF-8">
				<title>Book_mall</title>
				<link rel="stylesheet" href="../main.css">
			</head>
			<body>
				<div class="wrapper">
					<div class="one"><embed src="header.html"></div>
					<div class="three">
						<img src="../bookImage/${isbn}.png" alt="isbn book img">
						<h2>${name}</h2>
						<span>${author}</span>
						<span>${publisher}</span>
						<span>${price}</span>
				
					</div>
				</div>
			
				<div class="six">
					<embed src="footer.html">
				</div>
			</body>
		</html>`
}

var app = http.createServer(function(request,response){
	var _url = new URL(request.url, 'http://localhost:3000/bookinfo');
	var __url = request.url;
	var isbn = _url.searchParams.get("id");
	var sql = `SELECT * FROM bookinfo WHERE isbn = ${isbn}`;
	conn.query(sql, function(err, rows, field) {
		if(err) console.log('query error \n' + err);
		else {
			var template=templateHTML(isbn, rows[0].name, rows[0].author, rows[0].publisher, rows[0].price);
			console.log(isbn);
			console.log(rows[0].name);
			console.log(rows[0].author);
			console.log(rows[0].publisher);
			console.log(rows[0].price);
			response.writeHead(200);
			response.end(template);s
		}
	});
	console.log(__url);
	console.log(_url);
	
	response.writeHead(404);
	
	
});
app.listen(3000);
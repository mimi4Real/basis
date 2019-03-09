var Book = function (id, bookName, price) {
	this.id = id;
	this.bookName = bookName;
	this.price = price;
}

Book.prototype.isDisplay = function(){
	console.log("show book")
}

/*Book.prototype = {
	isDislay(){
		console.log("show book")
	}
}*/


var book = new Book(1, 'IQ87', '120');
book.isDisplay()
console.log(book.bookName)


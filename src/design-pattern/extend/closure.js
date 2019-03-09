var Book = (function(){
	var bookNum = 0;   //静态私有变量
	function checkBoook(){}  //静态私有方法

	//返回构造函数
	return function (newId, newName, newPrice) {
		var name, price; //私有变量
		function chckID(id){}  //私有方法

		//特权方法
		this.setName = function(){}
		this.getName = function(){}
		this.setPrice = function(){}
		this.getPrice = function (){}

		//共有属性
		this.id = newId;
		this.name = newName;
		this.price = newPrice;

		bookNum++;
		if(bookNum > 100)
			throw new Error('大于限定');

		//构造器
		this.setName(name);
		this.setPrice(price);
	}
})();


Book.prototype = {
	isJSBook: false,
	display: function(){}
}

var book = new Book(123, 'IQ87', 103.54);
console.log(book.isJSBook);



var Book2 = (function(){
	var bookNum = 0;   //静态私有变量
	function checkBoook(){}  //静态私有方法

	//返回构造函数
	function _book(newId, newName, newPrice) {
		var name, price; //私有变量
		function chckID(id){}  //私有方法

		//特权方法
		this.setName = function(){}
		this.getName = function(){}
		this.setPrice = function(){}
		this.getPrice = function (){}

		//共有属性
		this.id = newId;
		this.name = newName;
		this.price = newPrice;

		bookNum++;
		if(bookNum > 100)
			throw new Error('大于限定');

		//构造器
		this.setName(name);
		this.setPrice(price);
	}

	_book.prototype = {
		isJSBook: false,
		display: function(){
			console.log('Book2原型链的静态共有方法')
		}
	}

	return _book;
})();

var book = new Book2(123, 'IQ87', 103.54);
book.display();
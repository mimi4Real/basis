var LazySingle = (function(){
	var _instance = null;
	function single() {
		return {
			publicMethod: function(){},
			publicProperty: '1.0'
		}
	}

	return function(){
		if(!_instance){
			_instance = single();
		}
		return _instance;
	}
})()

//test
console.log(LazySingle().publicProperty)

let _instance = (function () {
	let instance;

	return (newInstance => {
		if(newInstance) instance = newInstance;

		return instance;
	})
})();

class Singleton{
	constructor(){
		if(_instance) return _instance;

		this.foo = 'bar';

		_instance(this);
	}
}

let s1 = new Singleton();
let s2 = new Singleton();

console.log(s1.foo);
console.log(s1 === s2);

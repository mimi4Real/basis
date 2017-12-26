function tree(){
	this.value = null;
	this.left = null;
	this.right = null;
}

function build(nodes) {
	let index = 0;
	while(index < nodes.length) {
		let leftIndex = 2*index+1,
			rightIndex = 2*index+2;
		nodes[index].left = nodes[leftIndex];
		nodes[index].right = nodes[rightIndex];
		// console.log(nodes)
		index++;
	}
}

//中序遍历
function MDR(node) {
	let stack = [];

	while(node || stack.length){
		while (node) {
			stack.push(node);
			node = node.left;
		}

		while(stack.length && !node){
			node = stack.pop();
			console.log(node.value);
			node = node.right
		}
	}
}

//中序遍历（递归）
function MDR_recursion(node){
	if (node.left) {
		// console.log(node.left)
		MDR_recursion(node.left);
	};

	if (node.right) {
		// console.log(node.right)
		MDR_recursion(node.right);
	};

	console.log(node.value);

}


let array = [23, 5, 67, 212, 34]  //完全二叉树
//前序：23 5 212 34 67
//中序：212 5 34 23 67
//后序：212 34 5 67 23

let nodes = [];
array.forEach(value => {
	let treeObj = new tree();
	treeObj.value = value;
	nodes.push(treeObj);
})

build(nodes); // tree build

MDR_recursion(nodes[0]);
MDR(nodes[0]);
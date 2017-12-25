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

function LDR(node){
	if (node.left) {
		console.log(node.left)
		LDR(node.left);
	};
	console.log(node.value);
	if (node.right) {
		console.log(node.right)
		LDR(node.right);
	};
}


let array = [23, 5, 67, 212, 34]
let nodes = [];
array.forEach(value => {
	let treeObj = new tree();
	treeObj.value = value;
	nodes.push(treeObj);
})

build(nodes); // tree build

LDR(nodes[0]); //inorder traversal
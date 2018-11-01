var BinarySearchTree = require('./BinarySearchTree.js');

//preorder traversal -- BARES LEFT, then right once to its sibling, then right and up as high as it can go 

var url = "https://www.hackerrank.com/challenges/tree-preorder-traversal/problem";

var test1 = "6\n1 2 5 3 6 4";
var test2 = "15\n1 14 3 7 4 5 15 6 13 10 11 2 12 8 9";

BinarySearchTree.prototype.preOrderTraverse = function(callback) {
	//in context, "this" refers to BinarySearchTree
	preOrderTraverseNode(this.getRootNode(), function(nodeKey){
		console.log(nodeKey);
	});
	console.log('I am done with the traversal');
};

var preOrderTraverseNode = function (node, callback) {
	// console.log('preOrderTraverse called for ' + (node ? node.key : 'null node'));
	if (node !== null) {
		callback(node.key);
		preOrderTraverseNode(node.left, callback);
		preOrderTraverseNode(node.right, callback);
	}
}

// 1 2 5 3 4 6
var tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(4);

tree.preOrderTraverse(function(){
	console.log('I am done with the traversal');
});

var newTree = new BinarySearchTree();

console.log('longer tree');

// 1 14 3 7 4 5 15 6 13 10 11 2 12 8 9
newTree.insert(1);
newTree.insert(14);
newTree.insert(3);
newTree.insert(7);
newTree.insert(4);
newTree.insert(5);
newTree.insert(15);
newTree.insert(6);
newTree.insert(13);
newTree.insert(10);
newTree.insert(11);
newTree.insert(2);
newTree.insert(12);
newTree.insert(8);
newTree.insert(9);

newTree.preOrderTraverse();

var anotherTree = new BinarySearchTree();

console.log('another tree');

anotherTree.insert(11);
anotherTree.insert(7);
anotherTree.insert(15);
anotherTree.insert(5);
anotherTree.insert(3);
anotherTree.insert(9);
anotherTree.insert(8);
anotherTree.insert(10);
anotherTree.insert(13);
anotherTree.insert(12);
anotherTree.insert(14);
anotherTree.insert(20);
anotherTree.insert(18);
anotherTree.insert(25);

anotherTree.preOrderTraverse();

// 1
// 2
// 5
// 3
// 4
// 6
// I am done with the traversal
// longer tree
// 1
// 14
// 3
// 2
// 7
// 4
// 5
// 6
// 13
// 10
// 8
// 9
// 11
// 12
// 15
// I am done with the traversal
// another tree
// 11
// 7
// 5
// 3
// 9
// 8
// 10
// 15
// 13
// 12
// 14
// 20
// 18
// 25
// I am done with the traversal


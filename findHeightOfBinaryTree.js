var BinarySearchTree = require('./BinarySearchTree.js');

//https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem

function height(node){
   if(!node) {
   	console.log('this node does not exist!');
   	return -1; //this would be the symbolic height of an empty tree
   }
   console.log('calling leftHeight');
   var leftHeight = height(node.left);
   console.log('calling rightHeight');
   var rightHeight = height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}

//7
//3 5 2 1 4 6 7

var tree = new BinarySearchTree();

tree.insert(3);
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(7);

console.log(height(tree.getRootNode()));

//1
//15

var tree = new BinarySearchTree();

tree.insert(15);

console.log(height(tree.getRootNode()));

var tree = new BinarySearchTree();

// 5
// 3 1 7 5 4

tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(5);
tree.insert(4);

console.log(height(tree.getRootNode()));


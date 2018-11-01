module.exports = BinarySearchTree;

function BinarySearchTree () {

	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;

	this.getRootNode = function () {
		return root;
	}

	this.insert = function(key) {
		var newNode = new Node(key);
		if (root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	}

	var insertNode = function (node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};

}
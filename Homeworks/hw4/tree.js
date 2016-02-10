'use strict';

/* Implement your TreeNode and BinaryTree classes here */

/* Implement your TreeNode and BinaryTree classes here */

var tree = new BinaryTree();

var values = [32, 1, 53, 4, 6, 16, 2, 5, 5, 7, 3, 11, 23]

var i;

for (i = 0 ; i < values.length; i++) {
    tree.insert(values[i]);
}

tree.print();

tree.remove(4);

tree.print();

tree.remove(5);

tree.print();

tree.insert(11);

tree.print();

if (tree.find(53)) {
    console.log("Found 53");
}

else {
    console.log("Error: did not find 53");
}

if (tree.find(111)) {
    console.log("111 not in the tree");
}
else {
    console.log("Error: found 111");
}

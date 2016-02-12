'use strict';

/* Implement your TreeNode and BinaryTree classes here */
function TreeNode(){
    return {
        value: null,
        left: null,
        right: null
    }
};

function TreeNode(data,count){
    this.data = data;
    this.count = count;
    this.left = undefined;
    this.right = undefined;
    this.compare = function(value){
        if(this.data == value)return this;
        if(this.data < value) return this.right;
        else return this.left;
    }
}
function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.insert = function(n){
        var node = new TreeNode();
        node.value=n;
        if(this.root==null){
            this.root = node;
        }else{
            var cur = this.root;
            while(true){
                if(n< cur.value){
                    if(cur.left == null){
                        cur.left = node;
                        break;
                    }else{
                        cur = cur.left;
                    }
                }else{
                    if(cur.right == null){
                        cur.right=node;
                        break;
                    }else{
                        cur = cur.right;
                    }

                }
            }

        }
    }



BinaryTree.prototype.find = function(n){
    var cur = this.root;
    if(cur){

        if(n==cur.value){

            console.log("Value "+n+" found!");
            return;
        }else{
            console.log("Value of this node: "+ cur.value + ". Stil searching...")
            return this.find(n);
        }
    }else{
        console.log("Tree is empty!")
    }
}



BinaryTree.prototype.remove = function (val) {
    var code = this.find(val);
    console.log("Value: "+val);

    var cur = this.root;
    var parent = this.root;
    var child;

    while(cur){
        if(val < cur.value){
            if(cur.left === null){
                parent = cur;
                cur = cur.left;
                break;
            }
            else{
                parent = cur;
                cur = cur.left;
            }
        }
        else if(val > cur.value){
            if(cur.right === null){
                parent = cur;
                cur = cur.right;
                break;
            }
            else{
                parent = cur;
                cur = cur.right;
            }
        }
        else {
            if(cur.left === null && cur.right === null){
                // if is a leaf, delete node
                if(parent.left === cur) { parent.left = null; }
                else if(parent.right === cur){ parent.right = null; }

                return 0;
            }

            else if(cur.right === null || cur.left === null){
                // else if has 1 child, v = child

                if(cur.left) { child = cur.left; }
                else if(cur.right) { child = cur.right; }

                if(parent.left === cur) { parent.left = child; }
                else if(parent.right === cur){ parent.right = child; }

                return 0;
            }

            else {
                // else v = successor -> child is successor here;

                // finding successor:
                child = cur.right;
                while(child.left){child = child.left;}

                // linking successor (child) with parent:
                if(parent.left === cur) { parent.left = child; }
                else if(parent.right === cur){ parent.right = child; }

                return 0;
            }
        }
    }
    return 1;
};


BinaryTree.prototype.print = function () {
    var root = this.root, space_between=3;
    if(root.left) root.left.printNode(space_between);
    for(var i=0; i<space_between; i++) process.stdout.write("\t")
    if(root) process.stdout.write(root.value.toString()+"\n");
    if(root.right) root.right.printNode(space_between);
    console.log("\n\n")
};

TreeNode.prototype.printNode = function(space_between) {
    var root = this;
    space_between++;
    if(root.left) root.left.printNode(space_between);
    for(var i=0; i<space_between; i++) process.stdout.write("\t")
    if(root) process.stdout.write(root.value.toString()+"\n");
    if(root.right) root.right.printNode(space_between);

}


/* Implement your TreeNode and BinaryTree classes here */


var tree = new BinaryTree();
tree.find(2);
tree.insert(2);
console.log(tree.root.value)
tree.find(2);
tree.find(3);
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

/**************/

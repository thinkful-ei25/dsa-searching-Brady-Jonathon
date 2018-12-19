const BST = require('./bst');

function preOrder(node) {
  if (node == null) return;
  if (node !== null) {
  console.log(node.key);
  preOrder(node.left);
  preOrder(node.right);
  }
}

function inOrder(node) {
  if (node == null) return;
  if (node !== null) {
  inOrder(node.left);
  console.log(node.key);
  inOrder(node.right);
  }
}

function postOrder(node) {
  if (node == null) return;
  if(node !== null) {
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.key);
  }
}

function main() {
  let searchTree = new BST();
  searchTree.insert(25);
  searchTree.insert(15);
  searchTree.insert(50);
  searchTree.insert(10);
  searchTree.insert(24);
  searchTree.insert(35);
  searchTree.insert(70);
  searchTree.insert(4);
  searchTree.insert(12);
  searchTree.insert(18);
  searchTree.insert(31);
  searchTree.insert(44);
  searchTree.insert(66);
  searchTree.insert(90);
  searchTree.insert(22);

  console.log('######### PRE-ORDER ######### ');
  console.log(preOrder(searchTree));
  console.log('######### INORDER ######### ');
  console.log(inOrder(searchTree));
  console.log('######### POST ORDER ######### ');
  console.log(postOrder(searchTree));
}

main();

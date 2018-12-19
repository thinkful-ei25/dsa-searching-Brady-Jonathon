/*
Walk through the Binary Search Tree code in the curriculum and understand it well.Then write a Binary Search Tree class and with its core functions(insert, remove, find) from scratch.

Create a Binary Search Tree called BST and insert 3, 1, 4, 6, 9, 2, 5, 7 to your tree.Compare your result with the result from the first exercise
*/

class BST {
  constructor(key = null, parent = null) {
    this.key = key;
    this.value = key;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key) {
    if (this.key == null) {
      this.key = key;
      this.value = key;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BST(key, this);
      } else {
        this.left.insert(key);
      }
    } else {
      if (this.right == null) {
        this.right = new BST(key,this);
      } else {
        this.right.insert(key);
      }
    }
  }

  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error: find() - Key was not found');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.key;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key error: remove() Was not successful');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

}

module.exports = BST;
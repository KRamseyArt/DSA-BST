class _Node {

}

class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null){
      // from the top - if node is empty, create root node with provided key/value
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      // if tree exists, compare keys. if provided key is less than current key, work on left-path
      if (this.left == null){
        // set provided key/value if current node has no left child
        this.left = new BinarySearchTree(key, value);
      } else {
        // else recursively compare provided key/value against current node's left child values to determine left/right insertion
        this.left.insert(key, value);
      }
    } else {
      // if tree exists and provided key is >= current key - work on right-child side
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  remove (key) {
    // if key found...
    if (this.key == key) {
      // and key has left & right children...
      if (this.left && this.right){
        // set successor as lowest child value of the right branch
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successory.value;
        // and remove that child from its current position
        successor.remove(successor.key);
      }
      // and key has left child only...
      else if (this.left) {
        // set current node equal to left child
        this._replaceWith(this.left);
      }
      // and key has right child only...
      else if (this.right) {
        this._replaceWith(this.right);
      }
      // and node has no children...
      else {
        this._replaceWith(null);
      }
    } // if key is less than current node, and current node has a left child...
    else if (key < this.key && this.left) {
      // search left child branch recursively
      this.left.remove(key);
    } // if key is greater than current node and current node has right child...'
    else if (key > this.key && this.right) {
      // search right branch recursively
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }
  find(key) {
    // if key is found, return that value
    if (this.key = key) {
      return this.value;
    } // else if key is less than current node and current node has a left child...
    else if (key < this.key && this.left) {
      // search left branch recursively
      return this.left.find(key);
    } // else if key is greater than current node and current node has a right child...
    else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  // -- HELPER FUNCTIONS --
  _replaceWith(node) {
    // if current node has a parent...
    if (this.parent) {
      // is current node the left or right child of that parent?
      if (this == this.parent.left) {
        // if left, replace parent's left child with input node to be replaced with
        this.parent.left = node;
      } else if (this == this.parent.right) {
        // if right, replace parent's right child
        this.parent.right = node;
      }

      if (node) {
        // set provided node's parent equal to parent of current node that was replaced
        node.parent = this.parent;
      }
    } else {
      // else current node has no parent...
      if (node) {
        // if valid node is provided, set as the root
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        // else, root is null
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin() {
    // if current node has not left child...
    if (!this.left) {
      // left-most (min) value reached - return this
      return this;
    }
    // else if current node has left child, keep searching recursively
    return this.left._findMin();
  }
}

function main() {
  // 3a) Create a BST called 'BST' and insert [3,1,4,6,9,2,5,7] into your tree. Compare result with first exercise
  const BST = new BinarySearchTree();

  let values = [
    3,
    1,
    4,
    6,
    9,
    2,
    5,
    7
  ]
  values.forEach(v => {
    BST.insert(v);
  })
  // results appear to track much the same for the first few nodes, though it doesnt display the full tree
  console.log(BST);

  // 3b) Insert [E A S Y Q U E S T I O N] into your tree and compare your result from the first exercise
  const BST2 = new BinarySearchTree();
  values = [
    "E",
    "A",
    "S",
    "Y",
    "Q",
    "U",
    "E",
    "S",
    "T",
    "I",
    "O",
    "N",
  ]
  values.forEach(v => {
    BST2.insert(v);
  })
  // results appear to track much the same for the first few nodes, though it doesnt display the full tree
  console.log(BST2);

  // 5) Height of a BST
  console.log("\nBST Height:")
  console.log(heightOf(BST));
  console.log(heightOf(BST2));

  //6) Is BST?
  console.log('\nIs BST?')
  console.log(isBST(BST));
  console.log(isBST(BST2));

  // 7) Third Largest:
  console.log('\nTHIRD LARGEST:')
  console.log(thirdLargest(BST).sort((a,b) => a < b)[2]);
  console.log(thirdLargest(BST2).sort((a,b) => a < b)[2]);

  // 8) Balanced BST:
  console.log('\nBalanced BST')
  console.log(isBalanced(BST));
  console.log(isBalanced(BST2));

  // 9) Same BSTs:
  console.log('\nSame BSTs?')

  const test = [
    [3, 5, 4, 6, 1, 0, 2],
    [3, 1, 5, 2, 4, 6, 0]
  ]
  console.log(sameBSTs(test[0], test[1]));
}
main();

// 5) Height of a BST
// O(log(n))
function heightOf(tree, count=0){
  if (!tree){
    return count;
  } else {
    count++;
  }
  return Math.max(
    heightOf(tree.left, count),
    heightOf(tree.right, count)
  );
}

// 6) Is BST?
function isBST(tree) {
  if (!tree.key){
    return false;
  }
  if (tree.left){
    // are left child values greater than root?
    if (tree.left.key > tree.key){
      return false;
    } else {
      return isBST(tree.left);
    }
  }
  if (tree.right){
    // are right values less than root?
    if (tree.right.key < tree.key) {
      return false;
    } else {
      return isBST(tree.right);
    }
  }
  // limit to 2 children
  if (tree.right && tree.left) {
    isBST(tree.right);
    isBST(tree.left);
  }
  // check end of tree
  if (!tree.right && !tree.left){
    return true;
  }
}

// 7) 3rd Largest Node
function thirdLargest(tree, largest=[]){
  if (!tree){
    return false;
  }

  largest.push(tree.key);

  if (tree.right){
    largest = thirdLargest(tree.right, largest);
  }
  if (tree.left){
    largest = thirdLargest(tree.left, largest);
  }
  return largest;
}

// 8) Balanced BST
function isBalanced(tree){
  let leftHeight = heightOf(tree.left);
  let rightHeight = heightOf(tree.right);

  if (Math.abs(rightHeight - leftHeight) <= 1){
    return true;
  } else if (Math.abs(rightHeight - leftHeight) > 1){
    return false;
  }
}

// 9) Same BSTs
function sameBSTs(arr1, arr2) {
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }

  let root = arr1[0];

  let arr1L = [];
  let arr1R = [];
  let arr2L = [];
  let arr2R = [];
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < root) {
      arr1L.push(arr1[i]);
    } else if (arr1[i] > root) {
      arr1R.push(arr1[i]);
    }
    if (arr2[i] < root) {
      arr2L.push(arr2[i]);
    } else if (arr2[i] > root) {
      arr2R.push(arr2[i]);
    }
  }
  return sameBSTs(arr1L, arr2L) && sameBSTs(arr1R, arr2R);
}
# DSA-BST

### 1: Draw a BST
- [Duplicates stacked](./imgs/1_DrawBST1.jpg)
- [Duplicates added](./imgs/1_DrawBST2.jpg)

### 2: Remove the Root
- [Duplicates stacked](./imgs/2_RemoveRoot1.jpg)
- [Duplicates added](./imgs/2_RemoveRoot2.jpg)

### 3: Create a BST Class
[LINK](./BinarySearchTree.js#L136)

### 4: What Does this Program Do?
```
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}
```
It returns the sum of all left and right child nodes of a given node (inclusive of current node's value).

### 5: Height of a BST
[LINK](./BinarySearchTree.js#L208)

### 6: Is it a BST?
[LINK](./BinarySearchTree.js#L222)

### 7: 3rd Largest Node
[LINK](./BinarySearchTree.js#L254)

### 8: Balanced BST
[LINK](./BinarySearchTree.js#L271)

### 9: Same BSTs
[LINK](./BinarySearchTree.js#L283)
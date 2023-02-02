let sortedArrayToBST2 = function (nums) {
  if (nums.length === 0) return null
  function insertNode(root, newNode) {
    if (newNode.val < root.val) {
      if (root.left) {
        insertNode(root.left, newNode);
      } else {
        root.left = newNode;
      }
    } else {
      if (root.right) {
        insertNode(root.right, newNode);
      } else {
        root.right = newNode;
      }
    }
  }

  function insert(root, val) {
    let newNode = {val,left:null,right:null};
    return insertNode(root, newNode);
  }
  let root = {val:Infinity,left:null,right:null}
  for (const x of nums) {
    insert(root,x)
  }
  return root.left
}

let sortedArrayToBST1 = function (nums) {
  if (nums.length === 0) return null
  let phtm = function (node, t) {
    return {
      get() { return node[t] },
      set(x) { node[t] = x }
    }
  }
  let insert = function (p, v) {
    if (!p.get()) return p.set({ val: v, left: null, right: null })
    if (p.get().val > v) insert(phtm(p.get(), 'left'), v)
    else insert(phtm(p.get(), 'right'), v)
  }
  let tree = { left: null }
  for (const x of nums) {
    insert(phtm(tree, 'left'), x)
  }
  return tree.left
};
export {sortedArrayToBST1,sortedArrayToBST2}
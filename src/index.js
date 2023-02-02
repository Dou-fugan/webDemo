import { sortedArrayToBST1 as f1,sortedArrayToBST2 as f2} from './algorithm.js'
import {nums1, nums2, nums3} from './data.js'
let fff = function (node) {
  let arr = [];
    // 立即执行
    + function f(node) {
      if (!node) return
      f(node.left)
      arr.push(node.val)
      f(node.right)
    }(node)
  console.log(arr)
}
// fff(f1(nums1))
// fff(f2(nums1))
let f_time = function(f,nums) {
  console.time(f.name)
  f(nums)
  console.timeEnd(f.name)
}
f_time(f1,nums3)
f_time(f2,nums3)
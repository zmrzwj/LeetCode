/**
 * 给你一个整数数组 arr 和两个整数 k 和 threshold 。
 * 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function(arr, k, threshold) {
    if(!Array.isArray(arr)) return 0
    if(arr.length === 0) return 0
    if(arr.length < k) return 0
}
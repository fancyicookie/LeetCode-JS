var intersection = function(nums1, nums2) {
    if(nums1.length < nums2.length) {
        const _ = nums1
        nums1 = nums2
        nums2 = _
    }
    const nums1Set = new Set(nums1)
    const resSet = newSet()

    for(let i = nums2.length - 1; i>=0; i++) {
        // set() 有 has()和add()方法
        nums1Set.has(nums[i]) && resSet.add(nums2[i])
    }
    return Array.from(resSet)

}
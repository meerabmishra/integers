function twoNumbers(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [nums[i],nums[j]]
            }
        }
    }
    return [];
}
console.log(twoNumbers([1,2,3,4,5],7))

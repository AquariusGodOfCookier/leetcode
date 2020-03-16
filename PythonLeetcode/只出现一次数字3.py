# // 给定一个整数数组 nums，其中恰好有两个元素只出现一次，
# // 其余所有元素均出现两次。 
# // 找出只出现一次的那两个元素。
# // 只出现一次数字
class Solution(object):
    def singleNumber(self, nums):
        count = []
        for num in nums:
            if num in count:
                count.remove(num)
            else:
                count.append(num)
        return count
nums = [1,2,1,3,2,5]
solute = Solution()
print(solute.singleNumber(nums))
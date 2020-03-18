# 最小的k个数
# 输入整数数组 arr ，找出其中最小的 k 个数。
# 例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
# class Solution(object):
#     def getLeastNumbers(self, arr, k):
#         """
#         :type arr: List[int]
#         :type k: int
#         :rtype: List[int]
#         """
#         arr.sort()
#         return arr[:k]


class Solution(object):
    def getLeastNumbers(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: List[int]
        """
        # 方法一:partition方法(基于快速排序)
        if k > len(arr) or k <= 0:
            return [] 
        start = 0
        end = len(arr) - 1
        index = self._getLeastNumbers(arr, start, end)
        while index != k-1:
            if index > k-1:
                end = index - 1
                index = self._getLeastNumbers(arr, start, end)
            if index < k-1:
                start = index + 1
                index = self._getLeastNumbers(arr, start, end)
        return arr[:k]

    def _getLeastNumbers(self, arr, start, end):
        low = start
        high = end
        temp = arr[start]
        while low < high:
            while low < high and arr[high] >= temp:
                high -= 1
            arr[low] = arr[high]
            while low <high and arr[low] < temp:
                low += 1
            arr[high] = arr[low]
        arr[low] = temp
        return low

solute = Solution()
arr = [3,2,1]
k = 2
print(solute.getLeastNumbers(arr,k))
# 使数组唯一的最小增量
# 给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。

# 返回使 A 中的每个值都是唯一的最少操作次数。
class Solution(object):
    def minIncrementForUnique(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        count = 0
        A.sort()
        for i in range(1,len(A)):
            if A[i] <= A[i-1]:
                count += A[i-1]-A[i]+1
                A[i] = A[i-1]+1
        return count

A = [1,2,2]
print(Solution().minIncrementForUnique(A))
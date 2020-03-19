# 二进制求和
# 给定两个二进制字符串，返回他们的和（用二进制表示）。

# 输入为非空字符串且只包含数字 1 和 0。

class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        maxLen = max(len(a),len(b))
        a = '0'*(maxLen-len(a)) + a
        b = '0'*(maxLen-len(b)) + b
        arr = ''
        count = 0
        for i,j in zip(a[::-1],b[::-1]): # python 中从后向前取 [::-1]
            sums = count
            sums += int(i)+int(j)
            arr += str(sums%2)
            count = sums//2
            
        return '1'+arr[::-1] if count == 1 else arr[::-1]
a = "0"
b = "0"
print(Solution().addBinary(a,b))
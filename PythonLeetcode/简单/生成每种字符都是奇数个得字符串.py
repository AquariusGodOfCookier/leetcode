# 给你一个整数 n，请你返回一个含 n 个字符的字符串，
# 其中每种字符在该字符串中都恰好出现 奇数次 。

# 返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，
# 则返回其中任意一个即可。

# 生成每种字符都是奇数个得字符串
class Solution(object):
    def generateTheString(self, n):
        """
        :type n: int
        :rtype: str
        """
        if n%2==0:
            return 'a'*(n-1)+'b'
        else:
            return 'a'*n

n = 6
print(Solution().generateTheString(n))
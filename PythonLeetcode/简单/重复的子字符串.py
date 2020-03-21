# 重复的子字符串

# 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。
# 给定的字符串只含有小写英文字母，并且长度不超过10000。
class Solution(object):
    def repeatedSubstringPattern(self, s):
        """
        :type s: str
        :rtype: bool
        """
        doubles = s+s
        return s in doubles[1:-1]

s = 'abab'
print(Solution().repeatedSubstringPattern(s))
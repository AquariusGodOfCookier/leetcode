# 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
# 判断是否互为字符重排
class Solution(object):
    def CheckPermutation(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        from collections import Counter
        return Counter(s1) == Counter(s2)
s1 = "abc"
s2 = "a"
print(Solution().CheckPermutation(s1,s2))
# 字符串轮转

# 字符串轮转。给定两个字符串s1和s2，
# 请编写代码检查s2是否为s1旋转而成
# （比如，waterbottle是erbottlewat旋转后的字符串）。
# 轮转后的字符串一定在s1+s1中
class Solution(object):
    def isFlipedString(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        if len(s1)!=len(s2):
            return False
        s1 = s1+s1
        if s2 in s1:
            return True
        else:
            return False

s1 = "waterbottle"
s2 = "erbottlewat"
print(Solution().isFlipedString(s1,s2))
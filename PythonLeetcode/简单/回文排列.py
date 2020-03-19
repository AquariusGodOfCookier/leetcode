# 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

# 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

# 回文串不一定是字典当中的单词。

# 回文排列
class Solution(object):
    def canPermutePalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        from collections import Counter
        smap = Counter(s)
        count = 0
        for key in smap:
            if smap[key]%2!=0:
                count += 1
                if count >1:
                    return False
        return True
s = "tactcoa"
print(Solution().canPermutePalindrome(s))
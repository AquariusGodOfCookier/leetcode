# 第一个只出现一次的字符
# 有序字典
# 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。
class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: str
        """
        from collections import OrderedDict
        dicts = OrderedDict()
        for char in s:
            dicts[char] = dicts.get(char,0)+1
        for key,value in dicts.items():
            if value == 1:
                return key
        return ' '

s = "ccc"
solution = Solution()
print(solution.firstUniqChar(s))

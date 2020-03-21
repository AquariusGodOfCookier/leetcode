# 字符串中的单词数
# 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

# 请注意，你可以假定字符串里不包括任何不可打印的字符。
class Solution(object):
    def countSegments(self, s):
        """
        :type s: str
        :rtype: int
        """
        count = 0
        for item in range(len(s)):
            if (item == 0 or s[item-1]==' ') and s[item] != ' ':
                count += 1
        return count

s = ""
print(Solution().countSegments(s))
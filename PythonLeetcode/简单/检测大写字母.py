# 给定一个单词，你需要判断单词的大写使用是否正确。

# 我们定义，在以下情况时，单词的大写用法是正确的：

# 全部字母都是大写，比如"USA"。
# 单词中所有字母都不是大写，比如"leetcode"。
# 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
# 否则，我们定义这个单词没有正确使用大写字母。
# 检测大写字母
class Solution(object):
    def detectCapitalUse(self, word):
        """
        :type word: str
        :rtype: bool
        """
        # 1 内置函数
        return word.isupper() or word.islower() or word.istitle()
# class Solution(object):
#     def detectCapitalUse(self, word):
#         """
#         :type word: str
#         :rtype: bool
#         """
#         # 2 正则表达式
#         import re
#         return True if re.search('^[A-Z]*$',word) or re.search('^[a-z]*$',word) or re.search('^[A-Z][a-z]*$',word) else False
word = "UAs"
print(Solution().detectCapitalUse(word))
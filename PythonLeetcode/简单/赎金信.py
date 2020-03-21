# 赎金信
# 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，
# 判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。
# 如果可以构成，返回 true ；否则返回 false。

# (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，
#     组成单词来表达意思。)

# class Solution(object):
#     def canConstruct(self, ransomNote, magazine):
#         """
#         :type ransomNote: str
#         :type magazine: str
#         :rtype: bool
#         """
#         from collections import Counter
#         rans = Counter(ransomNote)
#         mag = Counter(magazine)
#         return not(rans - mag)
class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        ransomNote = list(ransomNote)
        magazine = list(magazine)
        for key in ransomNote:
            if key in magazine:
                magazine.remove(key)
            else:
                return False
        return True

ransomNote = 'aa'
magazine = 'aab'
print(Solution().canConstruct(ransomNote,magazine))
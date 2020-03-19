# 输入一个英文句子，翻转句子中单词的顺序，
# 但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
# 例如输入字符串"I am a student. "，
# 则输出"student. a am I"。
# 翻转单词顺序

class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        slit = s.split(' ')
        strs = ''
        for key in slit[::-1]:
            strs += key if key == '' else key+' '
        return strs[:-1]

s = "the sky is blue "
print(Solution().reverseWords(s))
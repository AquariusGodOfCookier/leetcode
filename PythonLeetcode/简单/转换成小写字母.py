# 转换成小写字母


# 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，
# 并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

class Solution(object):
    def toLowerCase(self, str):
        """
        :type str: str
        :rtype: str
        """
        newstr = ''
        for char in str:
            if char >= 'A' and char <= 'Z':
                newstr += chr(ord(char)+32)
            else:
                newstr +=char
        return newstr

str = "HeAllo"
print(Solution().toLowerCase(str))
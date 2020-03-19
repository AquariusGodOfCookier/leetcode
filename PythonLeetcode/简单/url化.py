# URL化。编写一种方法，将字符串中的空格全部替换为%20。
# 假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。
# （注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）
# url化
class Solution(object):
    def replaceSpaces(self, S, length):
        """
        :type S: str
        :type length: int
        :rtype: str
        """
        sstr = ''
        for i in range(0,length):
            sstr += '%20' if S[i]==' ' else S[i]
        return sstr
s = "Mr John Smith    "
length = 13
print(Solution().replaceSpaces(s,length))
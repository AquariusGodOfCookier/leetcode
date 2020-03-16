# // 有效的字母异位词
# // 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
# """
# :type s: str
# :type t: str
# :rtype: bool
# """
class Solution(object):
    def isAnagram(self, s, t):
        return sorted(s)==sorted(t)
    def isAnagram2(self,s,t):
        import collections
        count1 = collections.Counter(s)
        count2 = collections.Counter(t)
        if len(s)!=len(t):
            return False
        for key in count1.keys():
            if count1.get(key)!=count2.get(key):
                return False
        return True

s = "anagram"
t = "nagaram"
solute= Solution()
print(solute.isAnagram2(s,t))
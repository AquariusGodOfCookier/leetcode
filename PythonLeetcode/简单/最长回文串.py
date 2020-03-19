
# 给定一个包含大写字母和小写字母的字符串，
# 找到通过这些字母构造成的最长的回文串。

# 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        from collections import Counter
        smap = Counter(s)
        count = 0
        isHaveSingle = False
        for key in smap:
            if smap[key] %2 == 0:
                count += smap[key]
            else:
                count += smap[key]-1
                isHaveSingle = True

        return count+1 if isHaveSingle else count


s = "ccc"
print(Solution().longestPalindrome(s))
# 我们来定义一个函数 f(s)，其中传入参数 s 是一个非空字符串；
# 该函数的功能是统计 s  中（按字典序比较）最小字母的出现频次。

# 例如，若 s = "dcce"，那么 f(s) = 2，
# 因为最小的字母是 "c"，它出现了 2 次。

# 现在，给你两个字符串数组待查表 queries 和词汇表 words，
# 请你返回一个整数数组 answer 作为答案，
# 其中每个 answer[i] 是满足 f(queries[i]) < f(W) 的词的数目，
# W 是词汇表 words 中的词。
# #  比较字符串最小字母出现频次
class Solution(object):
    def numSmallerByFrequency(self, queries, words):
        """
        :type queries: List[str]
        :type words: List[str]
        :rtype: List[int]
        """
        queriesList = list()
        wordsList = list()
        for key in queries:
            self.queryFrequency(key)
    
    def queryFrequency(self,wordStr):
        from collections import Counter
        print(wordStr.count())


queries = ["aabbabbb","abbbabaa","aabbbabaa","aabba","abb","a","ba","aa","ba","baabbbaaaa","babaa","bbbbabaa"]
words =["b","aaaba","aaaabba","aa","aabaabab","aabbaaabbb","ababb","bbb","aabbbabb","aab","bbaaababba","baaaaa"]
print(Solution().numSmallerByFrequency(queries,words))
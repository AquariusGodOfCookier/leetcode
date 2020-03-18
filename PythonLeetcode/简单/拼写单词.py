# // 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
# // 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。
# // 注意：每次拼写时，chars 中的每个字母都只能用一次。
# // 返回词汇表 words 中你掌握的所有单词的 长度之和。
# // 示例 1：
# // 输入：words = ["cat","bt","hat","tree"], chars = "atach"
# // 输出：6
# // 解释： 
# // 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
# // 示例 2：
# // 输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
# // 输出：10
# // 解释：
# // 可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
# /**
#  * @param {string[]} words
#  * @param {string} chars
#  * @return {number}
#  */

class Solution(object):
    def countCharacters(self, words, chars):
        """
        :type words: List[str]
        :type chars: str
        :rtype: int
        """
        import collections
        chars_cnt = collections.Counter(chars)
        count = 0
        for item in words:
            words_cnt = collections.Counter(item)
            for char in words_cnt:
                if words_cnt[char]>chars_cnt[char]:
                    break
            else:
                count += len(item)
        return count



words = ["cat","bt","hat","tree"]
chars = 'atach'
solute= Solution()
print(solute.countCharacters(words,chars))
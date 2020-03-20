# 国际摩尔斯密码定义一种标准编码方式，
# 将每个字母对应于一个由一系列点和短线组成的字符串，
#  比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。

# 为了方便，所有26个英文字母对应摩尔斯密码表如下：
# [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

class Solution(object):
    def uniqueMorseRepresentations(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        morsList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        list = { ''.join(morsList[ord(char)-ord('a')] for char in word ) for word in words}
        return len(list)

words = ["gin", "zen", "gig", "msg"]
print(Solution().uniqueMorseRepresentations(words))
# // 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，
# // (x2, y2) 是右上角的坐标。

# // 如果相交的面积为正，则称两矩形重叠。
# // 需要明确的是，只在角或边接触的两个矩形不构成重叠。

# // 给出两个矩形，判断它们是否重叠并返回结果。
# // 矩阵重叠
class Solution(object):
    def isRectangleOverlap(self, rec1, rec2):
        """
        :type rec1: List[int]
        :type rec2: List[int]
        :rtype: bool
        """
        return max(rec1[0],rec2[0]) < min(rec1[2],rec2[2]) and max(rec1[1],rec2[1]) < min(rec1[3],rec2[3])

rec1 = [0,0,1,1]
rec2 = [1,0,2,1]
solution = Solution()
print(solution.isRectangleOverlap(rec1,rec2))

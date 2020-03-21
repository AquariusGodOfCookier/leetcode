
# 扎金花是一种非常受欢迎的纸牌游戏。而在游戏界有一种于扎金花类似的玩法，叫做扎银花。

#       相比于扎金花的牌型多变，扎银花就简单多了，虽然同样是三张牌比大小，在扎银花的规则里只需要把三张牌的点数相加再进行大小比较即可，点数大的人获胜。

#       今天我们玩的不是扑克牌，而是一种取值范围在1-10^9以内的简单牌，两个人一开始各自有n张牌，他们会想办法组合出最大的牌，请你计算出获胜的一方的三张牌的点数之和。
n = list(map(int, input().split()))[0]
points = []
for i in range(0,2):
    read_list = list(map(int, input().split()))
    points.append(read_list)


if n != len(points[0]):
    print(False)

num1 = sorted(points[0])[::-1]
num2 = sorted(points[1])[::-1]
print(max((num1[0]+num2[1]+num1[2]),(num2[0]+num2[1]+num2[2])))

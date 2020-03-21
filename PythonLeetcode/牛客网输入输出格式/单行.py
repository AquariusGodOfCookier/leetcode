while 1:
  a=[]  
  s = raw_input()
  # raw_input()里面不要有任何提示信息
  if s != "":
    for x in s.split():  
      a.append(int(x))  

    print(sum(a))
  else:
    break
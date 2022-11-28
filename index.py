def apply(num, f):
    return f(num)

def double(num):
    return num*2 

print(apply(7, double))
print(apply(7, lambda num: num * 2))
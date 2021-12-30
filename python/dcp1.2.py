def window(array):
    left, right = None, None
    s = sorted(array, reverse=True)
    print(s)

    for i in range(len(array)):
        if array[i] != s[i] and left is None:
            left = i
        elif array[i] != s[i]:
            right = i
    return left, right

print(window([1,7,3,4]))
# Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
# For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
# 10 = max(10, 5, 2)
# 7 = max(5, 2, 7)
# 8 = max(2, 7, 8)
# 8 = max(7, 8, 7)
# Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.



# Brute Force
# iterate thru the array 
# start with first index (startingPoint) up to array[k]-1 (endPoint)
# push this into a new temp array (tempArray)
# get the highest value element in this temp array
# push this to result array (resultArray)
# repeat the same process, except, increment the startingPoint ++, up to endPoint = -3

target = 3
givenArray = [10, 5, 2, 7, 8, 7]

tempArr = []
resultArr = []
startingPoint = 0
endpoint = len(givenArray) - target

# print("endpoint: ", endpoint)
# print("givenArray[endpoint]: ",givenArray[endpoint])

def getMaxOfSubArray(list, start, end):
    if start == endpoint:
        print("end scenario")
        return 
    elif start < endpoint:
        print("continue repeat process")
        for x in range(start,end):
            # print(givenArray[x])
            tempArr.append(givenArray[x])
          
            if len(tempArr)==end:
                print("this is tempArr", tempArr)
                # resultArr.append(max(tempArr))
                tempArr.clear()
                # print("starting point == endpoint")
                getMaxOfSubArray(givenArray, start+1, end+1)         

    return resultArr               
    
   
   

print(getMaxOfSubArray(givenArray, 0, endpoint))


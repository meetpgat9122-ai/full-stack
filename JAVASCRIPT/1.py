list1=["monday","tuesday","wednesday","thursday","friday"]
#new_list=[x for x in list1 if "u" in x] # this will create a new list with only the elements that contain the substring "u"
sorted_list=sorted(list1) # this will sort the new list in ascending order
print(sorted_list)
reverse_list=sorted(list1,reverse=True) # this will sort the new list in descending order
print(reverse_list)

# print(new_list)

new_list1=[x.upper() for x in list1] # this will create a new list with all the elements in uppercase
print(new_list1)


nums=[2,5,4,6,10]
even=[x for x in nums if x%2==0] # this will create a new list with only the even numbers
print(even)


#customise sort function
def myfun(n):
 return abs(n-50)

this=[12,34,32,112,45,67,89]
this.sort(key=myfun) # this will sort the list based on the absolute difference from 50
print(this)

student={
"name":"John",
"age":25,
"courses":["Math","CompSci"],
"college":"MIT"
}


x=student.get("age") # this will get the value of the key "age" from the dictionary
x1=student.items() # this will return a view object that displays a list of a dictionary's key-value tuple pairs
print(x)
print(x1)

#check if a key exists in the dictionary

if "age" in student:
    print("Yes, 'age' is one of the keys in the student dictionary.")
else:
    print("No, 'age' is not one of the keys in the student dictionary.")


student.update({"age":26}) # this will update the value of the key "age" in the dictionary

a=10
b=20
a,b=b,a
print(a)
print(b)

#age = input("Enter age: ")

# print(" the age is " ,age)

import random
num=random.randint(1,100) # this will generate a random number between 1 and 100
num1=random.uniform(2,80)# this will generate a random float number between 2 and 80
print(num)
print(num1)

num3=[1,3,45,99,98]
random.shuffle(num3) # this will shuffle the list in place
print(num3)

for i in range(5):
   print(random.randint(1,30))# this will generate a random number between 1 and 30 for 5 times

text = "   hello   "
print(text.strip()) # this will remove the leading and trailing whitespace from the string

x="hello world"
for ch in x:
   print(ch)


name = "Priyanshu"
age = 20

print(f"My name is {name} and I am {age} years old.")   

pi = 3.14159265

print("%.2f" % pi)# this will print the value of pi with 2 decimal places

#FORMAT methid 
classofstudy= "six"
name="Priyanshu"
print("my name is {} and i am in {} gtade".format(name,classofstudy)) # this will print the name and class of study using the format method 

x = 10

print(isinstance(x, int))
x1 = 10

print(isinstance(x1, (int, float)))

lst = [1, 2, 3, 4]
lst[1:3] = [100]
print(lst) # this will replace the elements at index 1 and 2 with the value 100 this is very important.Two elements (2, 3) were replaced by one element (100).
lst[1:2]=[200,432,432]
print(lst) # this will replace the element at index 1 with the values 200, 432, and 432. This is very important. One element (100) was replaced by three elements (200, 432, 432).

thislist = ["apple","banana","cherry"]
tropical = ["mango","pineapple","papaya"]

thislist.extend(tropical) # this will add the elements of the tropical list to the end of the thislist
print(thislist)


square= lambda x: x*x # this will create a lambda function that will return the square of a number
print(square(5)) 

fruits = ["apple", "banana", "kiwi", "mango"]
fruits.sort(key=lambda x: x[-1])
print(fruits)


students = [
    ("Priyanshu", 85),
    ("Rahul", 70),
    ("Aman", 95)
]

print(students.sort(key=lambda x:x[1])) # this will sort the list of tuples based on the second element of each tuple (the score) in ascending order

#sort vs sorted 
# sort Modifies original list. but sorted creats new list 

def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]

print(add(*nums))

#merging list 
a = [1, 2]
b = [3, 4]
c = [*a, *b]
print(c)

set1 = {"a","b","c"}
set2 = {1,2,3}
set3 = {"John","Elena"}
set4 = {"apple","bananas","cherry"}

myset = set1.union(set2, set3, set4)
print(myset) # this will print the union of all the sets

 #VVI
set1 = {"apple", "banana"}
set2 = {"mango"}
set3 = set1.update(set2)
print(set3) # this will print None because the update method modifies the original set in place and does not return a new set. To see the updated set, you can print set1 after the update:

A = {1, 2, 3}
B = {3, 4, 5}
print(A^B) # this will print the symmetric difference of the two sets A and B, which is a set containing elements that are in either A or B but not in both. The result will be {1, 2, 4, 5}.

import sys
a=2
b=a
c=b
print(sys.getrefcount(a)) # this will print the reference count of the object a. The reference count is the number of references to the object in memory. In this case, the reference count  should be be 3 because there are three references to the integer object 2: a, b, and c, but the count is coming pout to be 4294967295 because of referencce count concept . Python mainly uses:
# Reference Counting
# Garbage Collector to manage memory.

# import math

# x3=[1,5,3,9,12]
# print(max(x3)) # this will print the maximum value in the list x3
# print(min(x3)) # this will print the minimum value in the list x3
# print(abs(-89))
# print(math.sqrt(64))
# print(math.pow(2,4))
# print(math.ceil(2.3)) # this will print the smallest integer greater than or equal to 2.3
# print(math.floor(2.3)) # this will print the largest integer less than or equal to 2.3

# import datetime

# x = datetime.datetime.now()

# print(x.year)
# print(x.strftime("%A"))


import json
student = {
    "name": "Priyanshu",
    "age": 21,
    "cgpa": 8.22
}


# result=json.dumps(student) # this will convert the dictionary student to a JSON string
# print(json.dumps(student,ident=4,sort_keys=True)) # this will print the JSON string
# print(result)
# print(type(result)) # this will print the type of the result which is <class 'str'>


# import json

# data = '{"name":"Priyanshu","age":21}'
# student = json.loads(data)
# print(student)
# print(type(student))

# # writing to a file
# with open("student.json","w") as file:
#    json.dump(student,file,indent=4) # this will write the dictionary student to the file student.json in JSON format with an indentation of 4 spaces

# with open("student.json","r")as file:
#    data=json.load(file) # this will read the JSON data from the file student.json and convert it to a Python dictionary
#    print(data)
#    print(type(data)) # this will print the type of the data which is <class 'dict'>




#    RegX
import re

text = "cat bat rat"
x = re.findall("at", text) 
# find all Returns all matches.
print(x)

# Search ..retune first occurence
text = "I love Python"

x = re.search("Python", text)


print(x)

text = "Python is easy"

print(re.match("Python", text)) # match checks only the beginning of the string and returns a match object if the pattern is found at the start of the string. If the pattern is not found at the beginning, it returns None.

text = "apple,banana,mango"
print(re.split(",", text))

text = "I love Java"

print(re.sub("Java", "Python", text))


print(re.findall("c.t", "cat cut cot"))# it will match any character between 'c' and 't', so it will return ['cat', 'cut', 'cot']

print(re.findall("ab*", "ab abb abbb abcds")) # it will match 'a' followed by zero or more 'b's, so it will return ['ab', 'abb', 'abbb', 'ab']

print(re.search("on$", "Python")) # it will match 'on' at the end of the string, so it will return a match object. If you want to see the matched string, you can use the group() method:

print(re.findall("ab+", "ab abb abbb a")) # it will match 'a' followed by one or more 'b's, so it will return ['ab', 'abb', 'abbb']

print(re.findall("colou?r", "color colour ,colors,pilacolour")) # it will match 'color' or 'colour', so it will return ['color', 'colour']

print(re.findall("[abce]", "apple")) # it will match any character that is either 'a', 'b', or 'c', so it will return ['a','e']

# character classes 
print(re.findall("[0-9]", "abc123")) # it will match any digit from 0 to 9, so it will return ['1', '2', '3']

print(re.findall("[a-z]", "ABCabc")) # it will match any lowercase letter from a to z, so it will return ['a', 'b', 'c']

print(re.findall("[A-Z]", "ABCabc")) # it will match any uppercase letter from A to Z, so it will return ['A', 'B', 'C']

#  Special sequences

text = "Room 101"
print(re.findall(r"\d", text))

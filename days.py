#S	M	T	W	T	F	S
#1	2	3	4	5	6	7

def makear(first):
    months = [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]

    names= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]

    place = first 
    ar = []
    for i in range(len(months)):
        print(place)
        ar.append([names[i].lower(),months[i],place]) 
        place = (months[i] + place)%7
    print(ar)

#2020: [['january', 31, 6], ['february', 28, 2], ['march', 31, 2], ['april', 30, 5], ['may', 31, 0], ['june', 30, 3], ['july', 31, 5], ['august', 31, 1], ['september', 30, 4], ['october', 31, 6], ['november', 30, 2]]
#2021: [[31, 6], [28, 2], [31, 2], [30, 5], [31, 0], [30, 3], [31, 5], [31, 1], [30, 4], [31, 6], [30, 2]]
makear(6)
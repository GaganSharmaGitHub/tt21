export interface Subject{
    name: String,
    short: String,
    teacher: String,
    color: String,
    code: String,
    classroom:String,
};
export const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
export const weekNo = new Map<String, number>();
for (let i = 0; i < weekday.length;i++) {
    weekNo.set(weekday[i],i)
}
export const subjects = {
    stcc: <Subject>{
        code: "ETIT 413/ ETIT 407",
        color: "#001f3f",
        name: "Software Testing / Cloud Computing",
        short: "ST / CC",
        teacher: "Mr. Arvind",
        classroom:"https://classroom.google.com/u/3/c/MzgzNzE2MjUwNjc4"
    },
    no: <Subject>{
        code: "No class",
        color: "#FF4136",
        name: "No Class",
        short: "No Class",
        teacher: "No Class",
        classroom:"No Class"
    },
    cns: <Subject>{
        name: "Cryptography and Network Security",
        color: "#6B5B95",
        code: "ETIT 403",
        short: "CNS",
        teacher: "Bharti Nagpal",
        classroom:"https://classroom.google.com/u/3/c/MzgwNzg1NTY0MjUx"
    },
    acn: <Subject>{
        code: "ETIT 401",
        color: "#955251",
        name: "Advanced Computer Networks",
        short: "ACN",
        teacher: "Vishal Gupta",
        classroom:"https://classroom.google.com/u/3/c/MzgzOTkzMzk0NzQ1"
    },
    net: <Subject>{
        code: "ETIT 419",
        color: "#009B77",
        name: ".Net C#",
        short: "C#",
        teacher: "Prakah Rao",
        classroom:"https://classroom.google.com/u/3/c/MzgwNzgwNDI2MTYy"
    },
    wc: <Subject>{
        code: "ETEC 405",
        color: "#DD4124",
        name: "Wireless Communication",
        short: "WC",
        teacher: "Aarti Jain",
        classroom:"https://classroom.google.com/u/3/c/MzE5NDkzMzU2OTY0"
    },
}
export const tt: Subject[][] = [
   
    //0: Sunday
    <Subject[]>[
        subjects.no,//0 8am
        subjects.no,//1 9am
        subjects.no,//2 10am
        subjects.no,//3 11am
        subjects.no,//4 12pm
        subjects.no,//5 1pm
        subjects.no,//6 2pm
        subjects.no,//8 3pm
        subjects.no,//9 4pm
        subjects.no,//10 5pm
        
    ],
       
    //1: Monday
    <Subject[]>[
        subjects.no,//0 8am
        subjects.no,//1 9am
        subjects.stcc,//2 10am
        subjects.cns,//3 11am
        subjects.acn,//4 12pm
        subjects.net,//5 1pm
        subjects.no,//6 2pm
        subjects.no,//8 3pm
        subjects.no,//9 4pm
        subjects.no,//10 5pm
        
    ],
       
    //2: Tuesday
    <Subject[]>[
        subjects.net,//0 8am
        subjects.no,//1 9am
        subjects.no,//2 10am
        subjects.acn,//3 11am
        subjects.stcc,//4 12pm
        subjects.no,//5 1pm
        subjects.net,//6 2pm
        subjects.no,//8 3pm
        subjects.no,//9 4pm
        subjects.no,//10 5pm
        
    ],
       
    //3: Wednesday
    <Subject[]>[
        subjects.no,//0 8am
        subjects.net,//1 9am
        subjects.no,//2 10am
        subjects.no,//3 11am
        subjects.wc,//4 12pm
        subjects.acn,//5 1pm
        subjects.cns,//6 2pm
        subjects.stcc,//8 3pm
        subjects.no,//9 4pm
        subjects.no,//10 5pm
        
    ],
       
    //4: Thursday
    <Subject[]>[
        subjects.no,//0 8am
        subjects.no,//1 9am
        subjects.no,//2 10am
        subjects.wc,//3 11am
        subjects.acn,//4 12pm
        subjects.no,//5 1pm
        subjects.net,//6 2pm
        subjects.no,//8 3pm
        subjects.no,//9 4pm
        subjects.cns,//10 5pm
        
    ],
       
    //5: Friday
    <Subject[]>[
        subjects.no,//0 8am
        subjects.no,//1 9am
        subjects.cns,//2 10am
        subjects.net,//3 11am
        subjects.acn,//4 12pm
        subjects.no,//5 1pm
        subjects.no,//6 2pm
        subjects.wc,//8 3pm
        subjects.no,//9 4pm
        subjects.no,//10 5pm
        
    ],
       
    //6: Saturday
    <Subject[]>[
        subjects.no,//0 8am
        subjects.no,//1 9am
        subjects.no,//2 10am
        subjects.no,//3 11am
        subjects.no,//4 12pm
        subjects.no,//5 1pm
        subjects.no,//6 2pm
        subjects.no,//8 3pm
        subjects.no,//9 4pm
        subjects.no,//10 5pm
        
    ],
    
]


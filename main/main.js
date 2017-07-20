/**
 * Created by zhm on 17-7-19.
 */
let readlineSync = require('readline-sync');
console.log('1.添加学生');
console.log('2.生成成绩单');
console.log('3.退出');
let choice = readlineSync.question('请输入你的选择（1～3）');
var studentInfoRepository = new Array;
var studentInfoArray = new Array;

function main(userChoice){

    if(userChoice == 1) {
        addStudent();
    }

    if(userChoice == 2){
        printReportCard();
    }
}

main(choice);


function addStudent() {
    let studentInfo = readlineSync.question('（请输入学生信息格式：姓名, 学号, 民族, 班级, 学科： 成绩, ...） ,按回车提交：');
    let studentInfoSplit = studentInfo.split('，');


    if (studentInfoSplit.length != 8) {
        console.log('请按正确的格式输入 （格式：姓名, 学号, 民族, 班级, 学科： 成绩, ...）：');
        addStudent();
    }
    else {
        studentInfoRepository.push(studentInfoSplit);
        console.log('学生' + studentInfoSplit[0] + '的成绩被添加');
        console.log('');
        console.log('1.添加学生');
        console.log('2.生成成绩单');
        console.log('3.退出');
        let choice1 = readlineSync.question('请输入你的选择（1～3）');
        main(choice1);
    }
}
function printReportCard() {
    let studentNumber = readlineSync.question('请输入要打印的学生的学号 （格式： 学号,学号,...) ,按回车提交：');
    let studentNumberSplit = studentNumber.split(',');
    for(let i in studentNumberSplit){
        for(let j in studentInfoRepository){
            if(studentNumberSplit[i] === studentInfoRepository[j][1]){
                studentInfoArray.push(studentInfoRepository[j]);
            }
        }
    }
    if (studentNumberSplit.length > 0){
        console.log('成绩单');
        console.log('姓名|数学|语文|英语|编程|平均分|总分');
        console.log('=========================');
        for(let i in studentInfoArray){
                let student = studentInfoArray[i];
                console.log(student[0] + '|' + student[4].slice(3) + '|' + student[5].slice(3) + '|' + student[6].slice(3) + '|' + student[7].slice(3) + '|' + average(student) + '|' + count(student));
        }
        console.log('=========================');
        console.log('全班总分平均分:'+klassCountAverage());
        console.log('全班总分中位数:'+klassCountMedian());
    }
    else{
        console.log('请按正确的格式输入要打印的学生的学号 （格式： 学号,学号,...) ,按回车提交：');
        printReportCard();
    }
}

function count(student) {
    let studentCount = parseFloat(student[4].slice(3))+parseFloat(student[5].slice(3))+parseFloat(student[6].slice(3))+parseFloat(student[7].slice(3));
    return studentCount;
}

function average(student) {
    let studentAverage = count(student) / 4;
    return studentAverage;
}

function klassCountAverage() {
    let sum = 0;
    for(var i in studentInfoArray){
        sum += count(studentInfoArray[i]);
        }
    let average = sum / studentInfoArray.length;
    return average;
}

function klassCountMedian() {
    let studentCount = new Array;
    let median;
    for(let i in studentInfoArray){
        studentCount.push(count(studentInfoArray[i]));
    }
    let studentCountSorted = studentCount.sort();
    if (studentCount.length % 2 == 0){
        median = (studentCountSorted[studentCountSorted.length / 2 - 1] + studentCountSorted[studentCountSorted.length / 2]) / 2;
    }
    else{
        median = studentCountSorted[(studentCountSorted.length - 1) / 2];
    }
    return median;
}


module.exports.main = main;
module.exports.addStudent = addStudent;
module.exports.printReportCard = printReportCard;

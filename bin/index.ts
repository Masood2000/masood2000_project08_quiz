#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

import chalkAnimation from "chalk-animation"




async function start(){
    let marks:number = 0;
    let totalMarks:number = 10;
console.log(".......... Please Select the Correct Option ................")
    await inquirer.prompt([{
        type:"list",
        message:"Question#1 : What is the Capital of Pakistan?",
        choices:["Karachi","Lahore","Islamabad","Peshawar"],
        name:"q1"
    },{
    type:"list",
        message:"Question#2 : Which mountain range is located in Pakistan?",
        choices:["Andes","Himalayas","Rocky Mountains","Alps"],
        name:"q2"
    },
    {
    type:"list",
        message:"Question#3 : What is the official language of Pakistan?",
        choices:["Urdu","Punjabi","Sindhi","Balochi"],
        name:"q3"
    },
    {
    type:"list",
        message:"Question#4 : Who was the founder of Pakistan?",
        choices:["Mohammad Ali Jinnah","Allama Iqbal","Liaquat Ali Khan","Benazir Bhutto"],
        name:"q4"
    },
    {
    type:"list",
        message:"Question#5 : Which river is known as the lifeline of Pakistan?",
        choices:["Indus","Ganges","Nile","Amazon"],
        name:"q5"
    },
    {
    type:"list",
        message:"Question#6 : What is the national flower of Pakistan?",
        choices:["Sunflower","Tulip","Rose","Jasmine"],
        name:"q6"
    },{
    type:"list",
    message:"Question#7 : What is the currency of Pakistan?",
    choices:["Dollar","Rupee","Yen","Euro"],
    name:"q7"
},{
type:"list",
        message:"Question#8 : Which city is known as the City of Gardens in Pakistan?",
        choices:["Karachi","Lahore","Islamabad","Peshawar"],
        name:"q8"
    },
{
    type:"list",
    message:"Question#9 : What is the literacy rate of Pakistan?",
    choices:["47%","67%","57%","77%"],
    name:"q9"
},{

type:"list",
        message:"Question#10 : Which Pakistani cricketer has the most Test wickets to his name?",
        choices:["Waqar Younis","Waseem Akram","Shoaib Akhtar","Imran Khan"],
        name:"q10"
    },

]).then((answers)=>{
     if(answers.q1 == "Islamabad"){
        marks = marks+1
     }
     if(answers.q2 == "Himalayas"){
        marks = marks+1
     }
     if(answers.q3 == "Urdu"){
        marks = marks+1
     }
     if(answers.q4 == "Mohammad Ali Jinnah"){
        marks = marks+1
     }
     if(answers.q5 == "Indus"){
        marks = marks+1
     }
     if(answers.q6 == "Jasmine"){
        marks = marks+1
     }
     
     if(answers.q7 == "Rupee"){
        marks = marks+1
     }
    
     if(answers.q8 == "Lahore"){
        marks = marks+1
     }
    
     if(answers.q9 == "57%"){
        marks = marks+1
     }
    
     if(answers.q10 == "Waseem Akram"){
        marks = marks+1
     }
    




     let questions:number = 10
     let correctQuestions:number = marks
     let wrongQuestions:number = totalMarks-marks
console.log("Total Questions : %d",questions)  
console.log(chalk.green("Correct Answerss : ",correctQuestions))
console.log(chalk.red("Wrong Answers : ",wrongQuestions))

console.log("Total Marks : %s",totalMarks)
console.log("Marks Obtained : %s",marks)






})
    

}

start()
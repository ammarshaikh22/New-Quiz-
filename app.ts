#! /usr/bin/env node
import inquirer from "inquirer";

interface ques {
    [key: string]: any
}

const main = async () => {
    const question: ques = [
        {
            message: "Why do we use TypeScript?",
            name: "ques1",
            type: "list",
            choices: [
                "for user interface",
                "to make interactive web page",
                "for strong typing",
            ],
        },
        {
            message: "What is HTML?",
            name: "ques2",
            type: "list",
            choices: [
                "hyper text mega link",
                "hyper text markup language",
                "hyper text mini language",
            ],
        },
    ];
    const show_ans = await inquirer.prompt(question)

    let correct_ans: any = {
        ques1: "for strong typing",
        ques2: "hyper text markup language"
    }
    let score: number = 0

    for (let ans of Object.keys(show_ans)) {
        const user_ans = show_ans[ans];
        const ques_ans = correct_ans[ans];
        if (user_ans === ques_ans) {
            console.log("correct")
            score++
        } else {
            console.log('incorrect!')
        }
    }

    console.log(`The result is ${score}/${Object.keys(question).length}`)
    console.log(Object.keys(show_ans))
};

main()
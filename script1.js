const myFunc = (name1, name2, name3) => {
    return name1 + ' ' + name2 + ' ' + name3;
}

console.log(myFunc('Jared', 'Chris', 'Leon'));

const myFunc1 = (birthYear) => {
    let presentYear = 2023;
    return presentYear - birthYear; 
}

console.log(`Your age is ${myFunc1(1997)} Years old`);

const greetFriend = (name1, age1, name2, age2, name3, age3) => {
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
}

greetFriend('Chris', 41, 'Leon', 35, 'Ada', 34);

const gradeStudent = (score) => {
    if(score === 11) {
        console.log("Perfect");
    }else if(score >= 8 && score <=10) {
        console.log("Excellent");
    }else if(score >= 5 && score <=7) {
        console.log("Pass");
    }else if(score >11){
        console.log("Score Error!");
    }else{
        console.log("Not pass");
    }
    return score >=5;
}

gradeStudent(12);
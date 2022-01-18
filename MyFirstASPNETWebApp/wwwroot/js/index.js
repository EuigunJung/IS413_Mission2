///* This is the code for the grade calculator

const calculate = () => {

    // Declare variables for each input box
    let assignments = document.querySelector("#assignments").value;
    let group_project = document.querySelector("#group_project").value;
    let quizzes = document.querySelector("#quizzes").value;
    let exams = document.querySelector("#exams").value;
    let intex = document.querySelector("#intex").value;
    let grades = "";

    // This is the variable where it will calculate the total grade
    let totalgrades =
        parseFloat(assignments)*.55 +
        parseFloat(group_project)*.05 +
        parseFloat(quizzes)*.1 +
        parseFloat(exams)*.2 +
        parseFloat(intex)*.1;

    // Let the calculator decide the letter grade based on the total grade (percentage). 

    let percentage = totalgrades;
    if (percentage <= 100 && percentage >= 94) {
        grades = "A";
    } else if (percentage < 94 && percentage >= 90) {
        grades = "A-";
    } else if (percentage < 90 && percentage >= 87) {
        grades = "B+";
    } else if (percentage < 87 && percentage >= 84) {
        grades = "B";
    } else if (percentage < 84 && percentage >= 80) {
        grades = "B-";
    } else if (percentage < 80 && percentage >= 77) {
        grades = "C+";
    } else if (percentage < 77 && percentage >= 74) {
        grades = "C";
    } else if (percentage < 74 && percentage >= 70) {
        grades = "C-";
    } else if (percentage < 70 && percentage >= 67) {
        grades = "D+";
    } else if (percentage < 67 && percentage >= 64) {
        grades = "D";
    } else if (percentage < 64 && percentage >= 60) {
        grades = "D-";
    } else if (percentage < 60) {
        grades = "E";
    } else {
        grades = "F";
    }
    // Error Check: Display user to fill the form if one of the input box is blank.
    if (assignments == "" || group_project == "" || quizzes == "" || exams == "" || intex == "")
    {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else
        {
        // Display the grade
        if (percentage >= 0) {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                `You scored ${percentage}%. <br> Your final grade for IS413 is ${grades}. Great Job!`;
        }
    }
};
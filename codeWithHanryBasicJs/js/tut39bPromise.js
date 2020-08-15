const students = [
  {
    name: "Harry",
    subject: "Javascript",
  },
  {
    name: "Rohan",
    subject: "Machine Learning",
  },
];
function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

function getStudents() {
  setTimeout(() => {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name} </li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Student have been fetched");
  }, 3000);
}

let newStudent = {
  name: "sunny",
  subject: "Python",
};
enrollStudent(newStudent)
  .then(getStudents)
  .catch(() => {
    console.log("some error ocured");
  });

// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Function : You function has been resolved');
//                 resolve();

//             } else {
//                 console.log('Function: your function has not been resolved ');
//                 reject(' Sorry not fulfilled !');
//             }
//         }, 2000);
//     })
// }
// func1().then(function () {
//     console.log("harry: Thanks for your resolving");
// }).catch(function (error) {
//     console.log("Harry: Very bad bro. Reason:" + error);
// })

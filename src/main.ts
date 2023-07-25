import './style.css'

/* erstelle ein Studenten-Object das einen Namen und eine Id hat */

const student = {
    id: "1",
    name: "John Wick"
};

console.log(student);

/* erstelle ein Studenten-Array */
type Student = {
  id: string;
  name: string;
};

let students: Student[] = [
    { id: "1", name: "John Wick" },
    { id: "2", name: "Peter Parker" },
];

console.log(students);

/* schreibe eine function, die einen Studenten in einem Array findet und seinen Namen updated */

/* Mutable */
function updateStudentNameById(id: string, name: string) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].name = name;
        }
    }
}

updateStudentNameById("1", "Black Widow");

console.log("Students after update", students);

// verändere deine function so, dass das ursprüngliche Objekt nicht verändert, sondern ein neues erstellt wird

/* Immutable */
function updateStudentNameByIdFunctional(id: string, name: string) {
    students = students.map(
        student => student.id === id
            ? { ...student, name: name }
            : student
    );
}

updateStudentNameByIdFunctional("2", "Clark Kent");

console.log("Students after second update", students);
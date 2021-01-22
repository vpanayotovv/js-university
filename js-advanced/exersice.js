let person = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 22,
    grades: [2, 3, 4, 5, 6],
    school: {
        name: '18-SOU',
        maxGrade: 6,
        address: 'Opulchenska 6',
    },
    reportGrades: function () {
        console.log(`My grades are: ${this.grades.join(', ')}`)
    },
    toString : function (){
        return `My full name is ${this.firstName} ${this.lastName} and I study in ${this.school.name}`
    }
}


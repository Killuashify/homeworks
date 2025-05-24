class Student {
  constructor(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = true;
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex++] = false;
    }
  }

  getAverageAttendance() {
    const filled = this.attendance.slice(0, this.attendanceIndex);
    if (filled.length === 0) return 0;
    const presentCount = filled.filter(Boolean).length;
    return presentCount / filled.length;
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const avgAttendance = this.getAverageAttendance();

    if (avgGrade > 90 && avgAttendance > 0.9) {
      return "Excellent!";
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      return "Good, but can be better.";
    } else {
      return "Slacker!";
    }
  }
}

const student1 = new Student("Ivan", "Petrenko", 2002, [100, 95, 98]);
const student2 = new Student("Olena", "Ivanova", 2003, [90, 95, 90]);
const student3 = new Student("Maria", "Kovalenko", 2001, [60, 70, 65]);

student1.present();
student1.present();
student1.present();
student2.present();
student2.absent();
student2.present();
student3.absent();
student3.absent();
student3.absent();

const output = document.getElementById("output");
const students = [student1, student2, student3];

students.forEach((student) => {
  const container = document.createElement("div");

  const name = document.createElement("h2");
  name.textContent = `${student.firstName} ${student.lastName}`;

  const age = document.createElement("p");
  age.textContent = `Age: ${student.getAge()}`;

  const avgGrade = document.createElement("p");
  avgGrade.textContent = `Average grade: ${student
    .getAverageGrade()
    .toFixed(2)}`;

  const avgAttendance = document.createElement("p");
  avgAttendance.textContent = `Average attendance: ${(
    student.getAverageAttendance() * 100
  ).toFixed(1)}%`;

  const summary = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = student.summary();
  summary.textContent = "Summary: ";
  summary.appendChild(strong);

  const hr = document.createElement("hr");

  container.appendChild(name);
  container.appendChild(age);
  container.appendChild(avgGrade);
  container.appendChild(avgAttendance);
  container.appendChild(summary);
  container.appendChild(hr);

  output.appendChild(container);
});

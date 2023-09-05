const students = [
  { name: "Andrei", score: 83 },
  { name: "Cozmina", score: 59 },
  { name: "George", score: 37 },
  { name: "Nicolae", score: 94 },
  { name: "Ioana", score: 64 },
];

// Numele acumulatorului poate fi orice, este doar un parametru de funcție
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;
console.log(averageScore);

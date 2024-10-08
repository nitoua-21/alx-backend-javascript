export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter(
        (data) => data.studentId === student.id
      );
      return {
        ...student,
        grade: studentGrade.length > 0 ? studentGrade[0].grade : 'N/A',
      };
    });
}

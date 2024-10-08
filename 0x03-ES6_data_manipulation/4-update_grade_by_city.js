export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        ...student,
        grade: (
          newGrades.filter((grade) => grade.studentId === student.id).pop() ||
          defaultGrade
        ).grade,
      }));
  }
  return [];
}

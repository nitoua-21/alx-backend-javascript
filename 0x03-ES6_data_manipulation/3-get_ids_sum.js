export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prev_student, cur_student) =>
        prev_student.id || prev_student.id + cur_student.id,
      0,
    );
  }

  return 0;
}

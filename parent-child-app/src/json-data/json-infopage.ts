export function getStudentById(studentId: string) {
    const stored = localStorage.getItem('students');
    const students = stored ? JSON.parse(stored) : [];

    return students.find((s: { id: string }) => s.id === studentId);
}

const stored = localStorage.getItem('students')
export const students = stored ? JSON.parse(stored) : [];
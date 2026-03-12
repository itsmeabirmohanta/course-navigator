export interface Student {
  id: string;
  name: string;
  firstName: string;
  school: string;
  program: string;
  year: number;
  term: number;
  enrollmentId: string;
}

export const mockStudent: Student = {
  id: "STU-2024-0891",
  name: "Abir Mahanta",
  firstName: "Abir",
  school: "School of Computer Science & Engineering",
  program: "B.Tech CSE — Cloud Computing / Engineering Minor (P132)",
  year: 1,
  term: 2,
  enrollmentId: "CSE/2022/0891",
};

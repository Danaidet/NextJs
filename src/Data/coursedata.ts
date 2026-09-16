import type { Course } from "@/types/course"; 
 
export const courses: Course[] = [ 
  { 
    id: "CS101", 
    code: "CS101", 
    name: "Introduction to Computer Science", 
    credit: 3, 
    instructor: "อาจารย์ผู้สอนรายวิชา", 
  }, 
  { 
    id: "CS201", 
    code: "CS201", 
    name: "Data Structures and Algorithms", 
    credit: 3, 
    instructor: "อาจารย์ผู้สอนรายวิชา", 
  }, 
]; 

// import { Course } from "@/types/course";
// export const course: Course[] = [{
//     id: "1",
//     code: "10301231",
//     title: "Web Technology",
//     credits: 3,
//     instructor: " ",
// },
// {
//     id: "2",
//     code: "10301232",
//     title: "Database Systems",
//     credits: 3,
//     instructor: " ",
// },
// {
//     id: "3",
//     code: "10301245", 
//     title: "ระบบฐานข้อมูล", 
//     credits: 3, 
//     instructor: " ",
// },
// { 
//     id: "4", 
//     code: "10301321", 
//     title: "วิศวกรรมซอฟต์แวร์", 
//     credits: 3, 
//     instructor: " " 
// }];
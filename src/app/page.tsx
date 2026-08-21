import Image from "next/image";

export default function HomePage() {
  const siteName: string = "student Corse Hub";
  const courseCount: number = 4;
  const isOpen: boolean = true;
  const topics: string[] = [
    "HTML", "CSS", "Typescript", "Next.js"
  ];
  type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
  };
  const course: Course[] = [{
    id: 1,
    code: "10301231",
    title: "Web Technology",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301232",
    title: "Database Systems",
    credits: 3,
    isOpen: false,
  }];

  return (
    <div className="px-8 py-6">
      <article>
        <h2>{course[0].title}</h2>
        <p>รหัสวิชา: {course[0].code}</p>
        <p>{course[0].credits} หน่วยกิต</p>
        <p>{course[1].isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
      </article><br />
      <main id="" className="flex items-center gap-3">
        <h1>{siteName}</h1>
        <p>เว็บไซต์รวบรวมข้อมูลรายวิชา</p>
        <h2>{1 + 2 + 3 + 4 + 5}</h2>
      </main>
      <p>จำนวนวิชา {courseCount}</p>
      <p>สถานะระบบ : {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}</p>
      {/* <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul> */}
      <br /><br />
      
    </div>
  );
}

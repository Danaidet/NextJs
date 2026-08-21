export default function Coursepage() {
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
        < div className="px-8 py-8">
            <section className="courseGrid">
                {course.map((course) => (
                    <article key={course.code} className="courseCard">
                        <h2>{course.id}. {course.title}</h2>
                        <p>รหัสวิชา : {course.code}</p>
                        <p>{course.credits} หน่วยกิต</p>
                        <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
                        <br />
                    </article>
                ))}
            </section>
        </div >
    )
}
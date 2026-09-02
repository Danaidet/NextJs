import CourseCard from "@/components/CourseCard";
import { course } from "@/Data/coursedata";
export default function Coursepage() {
    return (
        <>
            < div className="px-8 py-8">
                <section className="courseGrid">
                    {course.map((course) => (
                        <CourseCard key={course.id} course={course}/>
                    ))}
                </section>
            </div >
        </>
    )
}
import CourseCard from "@/components/CourseCard";
import type { Metadata } from "next";
import { courses } from "@/Data/coursedata";
import Buttoncomponent from "@/components/buttoncomponent";
import CounterDemo from "@/components/CounterDemo";
import CourseExplorer from "@/components/CourseExplorer";

export const metadata: Metadata = {
    title: "รายวิชาทั้งหมด",
};

export default function Coursepage() {
    return (
        <div className="py-3 px-3">
            <CourseExplorer initialCourses={courses} />
        </div>
    );
}
"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/types/course";
// import { courses } from "@/Data/coursedata";
import CourseCard from "./CourseCard";
import CourseForm, { CourseDraft } from "./CourseForm";


type CourseExplorerProps = {
    initialCourses: Course[];
};

export default function CourseExplorer({ initialCourses }: CourseExplorerProps) {
    const [keyword, setKeyword] = useState("");

    const [courses, setCourses] = useState<Course[]>(initialCourses);
    const [editingId, setEditingId] = useState<string | null>(null);

    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

    function handleToggleFavorite(id: string) {
        setFavoriteIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((favoriteId) => favoriteId !== id)
                : [...prevIds, id]
        );
    }

    const searchText = keyword.trim().toLocaleLowerCase();

    const visibleCourses = courses.filter(
        (course) =>
            course.name.toLowerCase().includes(searchText) ||
            course.code.includes(searchText)
    );

    function handleCreate(draft: CourseDraft) {
        const newCourse: Course = {
            id: crypto.randomUUID(),
            code: draft.code.trim(),
            name: draft.name.trim(),
            credit: Number(draft.credit),
            instructor: draft.instructor.trim(),
        };

        setCourses([...courses, newCourse]);
    }
    function handleDelete(id: string) {
        setCourses(courses.filter((course) => course.id !== id));
    }
    function handleUpdate(id: string, draft: CourseDraft) {
        setCourses(
            courses.map((course) =>
                course.id === id
                    ? {
                        ...course,
                        code: draft.code.trim(),
                        name: draft.name.trim(),
                        credit: Number(draft.credit),
                        instructor: draft.instructor.trim(),
                    }
                    : course
            )
        );

        setEditingId(null);
    }
    function handleSave(draft: CourseDraft) {
        if (editingId === null) {
            handleCreate(draft);
            return;
        }

        handleUpdate(editingId, draft);
    }

    const editingCourse = courses.find((course) => course.id === editingId);

    return (
        <div>
            <CourseForm
                key={editingId ?? "new"}
                initialCourse={editingCourse}
                onSave={handleSave}
                onCancel={() => setEditingId(null)}
            />
            <input
                type="search"
                aria-label="ค้นหารายวิชา"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
                className="searchInput"
            /> <br />
            {
                visibleCourses.length === 0 ? (
                    <p>ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
                ) : (
                    <section className="courseGrid">
                        {visibleCourses.map((course) => (

                            <CourseCard
                                key={course.id}
                                course={course}
                                isFavorite={favoriteIds.includes(course.id)}
                                onToggleFavorite={handleToggleFavorite}
                                onEdit={() => setEditingId(course.id)}
                                onDelete={() => handleDelete(course.id)}
                            />
                        ))}
                    </section>
                )
            }
        </div>
    );
} 
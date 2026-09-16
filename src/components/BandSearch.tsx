"use client";

import { useState, type ChangeEvent } from "react";
import type { Bands } from "@/types/bands";
import { bands } from "@/Data/bandsdata";
import BandCard from "./BandCard";

type BandsSearchProps = {
    bands: Bands[];
};

export default function BandSearch({ bands }: BandsSearchProps) {
    const [keyword, setKeyword] = useState("");
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    function handleToggleFavorite(id: number) {
        setFavoriteIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((favoriteId) => favoriteId !== id)
                : [...prevIds, id]
        );
    }

    const searchText = keyword.trim().toLocaleLowerCase();

    // const visibleCourses = bands.filter(
    //     (band) =>
    //         band.title.toLowerCase().includes(searchText) ||
    //         band.members.some((mem) => mem.toLowerCase().includes(searchText)) ||
    //         band.topsong.some((song) => song.toLowerCase().includes(searchText))
    // );

    const visibleCourses = bands.filter((band) => {
        const matchesSearch =
            band.title.toLowerCase().includes(searchText) ||
            band.members.some((mem) => mem.toLowerCase().includes(searchText)) ||
            band.topsong.some((song) => song.toLowerCase().includes(searchText));

        const matchesFavorite = showOnlyFavorites
            ? favoriteIds.includes(band.id)
            : true;

        return matchesSearch && matchesFavorite;
    });

    return (
        <div className="gap-3">
            <input
                type="search"
                aria-label="ค้นหาวงดนตรี"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Input your band"
                className="searchInput"
            />
            <button
                type="button"
                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer border ${showOnlyFavorites
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
            >
                {showOnlyFavorites ? "แสดงทั้งหมด" : "กำลังติดตาม"} {favoriteIds.length}
            </button>
            <br />
            {
                visibleCourses.length === 0 ? (
                    <p>ไม่พบวงดนตรีที่คุณต้องการ</p>
                ) : (
                    <section className="bandGrid">
                        {visibleCourses.map((band) => (
                            <BandCard key={band.id} band={band} isFavorite={favoriteIds.includes(band.id)} onToggleFavorite={handleToggleFavorite} />
                        ))}
                    </section>
                )
            }
        </div>
    );
} 
"use client";
import type { Bands } from "@/types/bands";
import { useState, useEffect } from "react";

type BandCardProps = {
    band: Bands;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
};


export default function BandCard({
    band,
    isFavorite,
    onToggleFavorite,
}: BandCardProps) {

    const [likes, setLikes] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem(`likes-band-${band.id}`);
        if (stored) setLikes(parseInt(stored));
    }, [band.id]);

    function handleLike() {
        const newLikes = likes + 1;
        setLikes(newLikes);
        localStorage.setItem(`likes-band-${band.id}`, String(newLikes));
    }

    return (
        <article className="bandCard" style={{ position: "relative" }}>
            <img src={`/image/${band.id}.jpg`} className="-mt-4 -mx-4 w-[calc(100%+2rem)] max-w-none h-48 object-cover object-top rounded-t-lg" /><br />
            <div className="flex justify-between items-center mt-3 gap-2">
                <h2 className="text-xl font-bold">{band.id}. {band.title}</h2>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={handleLike}
                        className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full bg-red-50 text-red-500 hover:bg-red-100 border border-red-200 cursor-pointer"
                    >
                        ❤️ {likes}
                    </button>
                    <button
                        type="button"
                        aria-label={isFavorite ? "เลิกติดตาม" : "ติดตาม"}
                        onClick={() => onToggleFavorite(band.id)}
                        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${isFavorite
                            ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            : "bg-green-500 text-white hover:bg-green-700"
                            }`}
                    >
                        {isFavorite ? "กำลังติดตาม" : "+ ติดตาม"}
                    </button>
                </div>
            </div>

            <p className="break-words">สมาชิกวง : </p>
            <ol className="list-decimal pl-5">
                {band.members.map((mem, index) => (
                    <li key={index}>{mem}
                        <img src={`/image/members/${band.id}/${index + 1}.jpg`} className="mt-2 w-full max-w-xs" />
                        <br />
                    </li>
                ))}
                <br />
            </ol><br />
            <p>เพลงยอดนิยม :</p>
            <ol className="list-decimal pl-5">
                {band.topsong.map((song, index) => (
                    <li key={index}>{song}
                        <img src={`/image/bands/${band.id}/${index + 1}.jpg`} className="mt-2 w-50" />
                        <br />
                    </li>
                ))}
            </ol>
            <br />
        </article>
    );
}


// localStorage.clear(); คำสั่งลบไลค์ เพราะ ไลค์เก็บอยู่ใน localstorage
// กด f12 แล้;พิมพ์ใน comsole
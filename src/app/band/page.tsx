import { bands } from "@/Data/bandsdata";
import type { Metadata } from "next";
import BandCard from "@/components/BandCard";
import BandSearch from "@/components/BandSearch";

export const metadata: Metadata = {
    title: "วงดนตรีที่ชอบๆ",
};

export default function bandpage() {
    return (
        < div className="px-8 py-8">
            <h1>รายชื่อวงดนตรีที่ชอบๆ</h1>
            <BandSearch bands={bands}  />
        </div >
    )
}
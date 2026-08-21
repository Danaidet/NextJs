// Navbar/Home/Courses/About
import Link from "next/link";

export default function Navbar() {
    return(
        <nav aria-label="เมนูหลัก" className="navbar">
            <ul className="navlist flex items-center gap-6 px-3 py-3">
                <li><Link href="/" className="navlink">หน้าแรก</Link></li>
                <li><Link href="/courses" className="navlink">รายวิชา</Link></li>
                <li><Link href="/about" className="navlink">เกี่ยวกับ</Link></li>
            </ul>
        </nav>
    );
}
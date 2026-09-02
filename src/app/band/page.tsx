import { bands } from "@/Data/bandsdata";
import BandCard from "@/components/BandCard";
export default function about() {
    return (
        < div className="px-8 py-8">
            <section className="courseGrid">
                {bands.map((band) => (
                    <BandCard key={band.id} bands={band} />
                ))}
            </section>
        </div >
    )
}
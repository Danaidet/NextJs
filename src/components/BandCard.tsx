import { Bands } from "@/types/bands";
type BandsCardProps = {
    bands: Bands;
}

export default function BandCard({ bands }: BandsCardProps) {
    return (
        <article className="bandCard">
            <img src={`/image/${bands.id}.jpg`} className="-mt-4 -mx-4 w-[calc(100%+2rem)] max-w-none h-48 object-cover rounded-t-lg"/><br />
            <h2>{bands.id}. {bands.title}</h2>
            <p className="break-words">สมาชิกวง : </p>
            <ol className="list-decimal pl-5">
                {bands.members.map((mem, index) => (
                    <li key={index}>{mem} 
                        <img src={`/image/members/${bands.id}/${index + 1}.jpg`} className="mt-2 w-full max-w-xs" />
                    <br />
                    </li>
                ))}
                <br />
            </ol><br />
            <p>เพลงยอดนิยม :</p>
            <ol className="list-decimal pl-5">
                {bands.topsong.map((song, index) => (
                    <li key={index}>{song}
                        <img src={`/image/bands/${bands.id}/${index + 1}.jpg`} className="mt-2 w-50" />
                        <br />
                    </li>
                ))}
            </ol>
            <br />
        </article>
    );
} 
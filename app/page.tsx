"use client";
import members from "../members.json"
export default function Home() {
    const generateUrl = (name: String) => {
        return `/blog-archive/${name.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <main className="flex flex-col items-start space-y-2 p-12 bg-gray-100 rounded-lg shadow-md m-auto">
            <div className="text-4xl text-purple-800">乃木坂46 Nogizaka46</div>
            <div className="">
                {members["N"].map((member_entry, index) => (
                    <a
                        key={index}
                        href={generateUrl(member_entry[1])}
                        className="text-purple-600 hover:text-purple-800 font-semibold"
                    >
                        {member_entry[0]} ({member_entry[1]})
                        <br></br>
                    </a>
                ))}
                <a
                    href="./staff"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                    Staff<br></br>
                </a>
                <a
                    href="./sankisei"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                    三期生<br></br>
                </a>
                <a
                    href="./yonkisei"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                    四期生<br></br>
                </a>
                <a
                    href="./shinyonkisei"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                    新四期生<br></br>
                </a>
                <a
                    href="./gokisei"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                    五期生<br></br>
                </a>
                <a
                    href="./rokisei"
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                    六期生<br></br>
                </a>
                {members["NG"].map((member_entry, index) => (
                    <a
                        key={index}
                        href={generateUrl(member_entry[1])}
                        className="text-gray-600 hover:text-gray-800 font-semibold"
                    >
                        {member_entry[0]} ({member_entry[1]})
                        <br></br>
                    </a>
                ))}
                <a
                    href="https://janelin612.github.io/n46-crawler/"
                    className="text-gray-600 hover:text-gray-800 font-semibold"
                >
                    Before 2024<br></br>
                </a>
            </div>

            <div className="text-4xl text-pink-300">櫻坂46/欅坂46 Sakurazaka46/Keyakizaka46</div>
            <div className="">
                {members["S"].map((member_entry, index) => (
                    <a
                        key={index}
                        href={generateUrl(member_entry[1])}
                        className="text-pink-300 hover:text-pink-500 font-semibold"
                    >
                        {member_entry[0]} ({member_entry[1]})
                        <br></br>
                    </a>
                ))}
                {members["SG"].map((member_entry, index) => (
                    <a
                        key={index}
                        href={generateUrl(member_entry[1])}
                        className="text-gray-600 hover:text-gray-800 font-semibold"
                    >
                        {member_entry[0]} ({member_entry[1]})
                        <br></br>
                    </a>
                ))}
            </div>

            <div className="text-4xl text-blue-800">日向坂46/けやき坂46 Hinatazaka46/Hiragana Keyakizaka46</div>
            <div className="">
                {members["H"].map((member_entry, index) => (
                    <a
                        key={index}
                        href={generateUrl(member_entry[1])}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        {member_entry[0]} ({member_entry[1]})
                        <br></br>
                    </a>
                ))}
                <a
                    href="./hinatazaka46-gokisei"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                    五期生<br></br>
                </a>
                <a
                    href="./poka"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                    ポカ<br></br>
                </a>
                {members["HG"].map((member_entry, index) => (
                    <a
                        key={index}
                        href={generateUrl(member_entry[1])}
                        className="text-gray-600 hover:text-gray-800 font-semibold"
                    >
                        {member_entry[0]} ({member_entry[1]})
                        <br></br>
                    </a>
                ))}
            </div>
        </main>
    );
}
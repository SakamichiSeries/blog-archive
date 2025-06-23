"use client";
import members from "../members.json"
export default function Home() {
    const generateUrl = (name: String) => {
        return `/blog-archive/${name.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <main className="flex flex-col items-start space-y-2 p-12 bg-gray-100 rounded-lg shadow-md m-auto">
            <div className="text-4xl text-purple-800">乃木坂46 Nogizaka46</div>
            <a href="./staff" className="text-purple-600 hover:text-purple-800 font-semibold">
                Staff<br />
            </a>

            <details>
                <summary className="text-2xl text-purple-800">1期生</summary>
                {members["N1"].map((member_entry, index) => (
                    <div key={index}>
                        <a
                            href={generateUrl(member_entry.romaji)}
                            className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-purple-600 hover:text-purple-800'}`}
                        >
                            {member_entry.name} ({member_entry.romaji})
                            <br />
                        </a>
                    </div>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-purple-800">2期生</summary>
                <a href="./kenkyusei" className="text-purple-600 hover:text-purple-800 font-semibold">研究生リレー<br /></a>
                {members["N2"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-purple-600 hover:text-purple-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-purple-800">3期生</summary>
                <a href="./sankisei" className="text-purple-600 hover:text-purple-800 font-semibold">3期生リレー<br /></a>
                {members["N3"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-purple-600 hover:text-purple-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>



            <details>
                <summary className="text-2xl text-purple-800">4期生</summary>
                <a href="./yonkisei" className="text-purple-600 hover:text-purple-800 font-semibold">4期生リレー<br /></a>
                <a href="./shinyonkisei" className="text-purple-600 hover:text-purple-800 font-semibold">新4期生リレー<br /></a>
                {members["N4"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-purple-600 hover:text-purple-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>



            <details>
                <summary className="text-2xl text-purple-800">5期生</summary>
                <a href="./gokisei" className="text-purple-600 hover:text-purple-800 font-semibold">5期生リレー<br /></a>
                {members["N5"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-purple-600 hover:text-purple-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>



            <details>
                <summary className="text-2xl text-purple-800">6期生</summary>
                <a href="./rokisei" className="text-purple-600 hover:text-purple-800 font-semibold">6期生リレー<br /></a>
                {members["N6"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-purple-600 hover:text-purple-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>



            <div className="text-4xl text-pink-300">櫻坂46 Sakurazaka46</div>
            <details>
                <summary className="text-2xl text-pink-800">一期生</summary>
                {members["S1"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-pink-300 hover:text-pink-500'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-pink-800">二期生</summary>
                {members["S2"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-pink-300 hover:text-pink-500'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-pink-800">三期生</summary>
                {members["S3"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-pink-300 hover:text-pink-500'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-pink-800">四期生</summary>
                <a href="./sakurazaka46-yonkisei" className="text-pink-300 hover:text-pink-500 font-semibold">四期生リレー<br /></a>
                {members["S4"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-pink-300 hover:text-pink-500'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <div className="text-4xl text-blue-800">日向坂46 Hinatazaka46</div>
            <a href="./poka" className="text-blue-600 hover:text-blue-800 font-semibold">ポカ<br /></a>

            <details>
                <summary className="text-2xl text-blue-800">一期生</summary>
                {members["H1"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-blue-600 hover:text-blue-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-blue-800">二期生</summary>
                {members["H2"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-blue-600 hover:text-blue-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-blue-800">三期生</summary>
                {members["H3"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-blue-600 hover:text-blue-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>

            <details>
                <summary className="text-2xl text-blue-800">四期生</summary>
                {members["H4"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-blue-600 hover:text-blue-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>


            <details>
                <summary className="text-2xl text-blue-800">五期生</summary>
                <a href="./hinatazaka46-gokisei" className="text-blue-600 hover:text-blue-800 font-semibold">五期生リレー<br /></a>
                {members["H5"].map((member_entry, index) => (
                    <a key={index} href={generateUrl(member_entry.romaji)} className={`font-semibold ${member_entry.graduated ? 'text-gray-600 hover:text-gray-800' : 'text-blue-600 hover:text-blue-800'}`}>
                        {member_entry.name} ({member_entry.romaji})
                        <br />
                    </a>
                ))}
            </details>
        </main>

    );
}
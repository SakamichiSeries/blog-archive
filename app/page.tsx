"use client";

export default function Home() {
    const members = [
        "Kakehashi Sayaka",
        "Seimiya Rei",
        "Sakaguchi Tamami",
        "Yamashita Mizuki",
        "Hayakawa Seira",
        "Kitagawa Yuri",
    ];

    const generateUrl = (name: String) => {
        return `/blog-archive/${name.toLowerCase().replace(/\s+/g, '-')}`;
    };

    const archiveLink = {
        name: "Before 2024",
        url: "https://janelin612.github.io/n46-crawler/",
    };

    return (
        <main>
            <div className="flex flex-col items-start space-y-2 p-12 bg-gray-100 rounded-lg shadow-md m-auto">
                {members.map((name, index) => (
                    <a
                        key={index}
                        href={generateUrl(name)}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        {name}
                    </a>
                ))}
                <a
                    href={archiveLink.url}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                    {archiveLink.name}
                </a>
            </div>
        </main>
    );
}
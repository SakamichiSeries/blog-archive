"use client";

export default function Home() {
    const names = [
        { name: "Kitagawa Yuri", url: "/blog-archive/kitagawa-yuri" },
        { name: "Hayakawa Seira", url: "/blog-archive/hayakawa-seira" },
        { name: "Yamashita Mizuki", url: "/blog-archive/yamashita-mizuki" },
    ];

    const archiveLink = {
        name: "Before 2024",
        url: "https://janelin612.github.io/n46-crawler/",
    };

    return (
        <main>
            <div className="flex flex-col items-start space-y-2 p-12 bg-gray-100 rounded-lg shadow-md m-auto">
                {names.map((member, index) => (
                    <a
                        key={index}
                        href={member.url}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        {member.name}
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
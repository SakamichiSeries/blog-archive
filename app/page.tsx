"use client"


export default function Home() {
    return (
        <main>
            <div className="flex flex-col items-start space-y-2 p-12 bg-gray-100 rounded-lg shadow-md m-auto">
                <a href="/blog-archive/kitagawa-yuri" className="text-blue-600 hover:text-blue-800 font-semibold">Kitagawa Yuri</a>
                <a href="/blog-archive/hayakawa-seira" className="text-blue-600 hover:text-blue-800 font-semibold">Hayakawa Seira</a>
                <a href="/blog-archive/yamashita-mizuki" className="text-blue-600 hover:text-blue-800 font-semibold">Yamashita Mizuki</a>
                <a href="https://janelin612.github.io/n46-crawler/" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Before 2024
                </a>
            </div>
        </main>
    )
}
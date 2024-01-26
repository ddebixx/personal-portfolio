import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-8 w-full my-16 py-16">
            <Image src='/footer.png' width={2000} height={100} alt="" />
            <div className="flex gap-8 uppercase text-xl flex-wrap justify-center">
                <Link className="text-white/70 p-2 hover:bg-[#8B96B1]/70 transition rounded-lg hover:scale-95 font-mono" href="/projects">Projects</Link>
                <Link className="text-white/70 p-2 hover:bg-[#8B96B1]/70 transition rounded-lg hover:scale-95 font-mono"  href="/about-me">About me</Link>
                <Link className="text-white/70 p-2 hover:bg-[#8B96B1]/70 transition rounded-lg hover:scale-95 font-mono" href="/contact">Contact</Link>
            </div>
        </footer>
    )
}
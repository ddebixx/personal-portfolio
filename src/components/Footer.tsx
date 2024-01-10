import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-8 w-full my-16">
            <h1 className="text-[140px] tracking-widest font-bold">ANDREW NAIDA</h1>
            <div className="flex gap-8 uppercase text-xl">
                <Link className="" href="/projects">Projects</Link>
                <Link className=""  href="/about-me">About me</Link>
                <Link className="" href="/contact">Contact</Link>
            </div>
        </footer>
    )
}
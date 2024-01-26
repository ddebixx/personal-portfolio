import Image from "next/image"

export default function AboutMePage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="h-screen flex flex-col items-center justify-center gap-8">
                <Image className="object-cover" src="/ABOUT_ME.png" alt="" width={1500} height={1000} />
                <p className="text-2xl text-white/70 font-mono max-[768px]:text-xl">Get to know me better</p>
            </div>
            <div className="flex flex-row gap-16 m-auto max-[768px]:flex-col-reverse">
                <div className="flex-1 space-y-4" style={{ maxWidth: '80ch', fontFamily: 'monospace' }}>
                    <h2 className="text-xl w-fit font-mono p-1 bg-blue-200/10 border-[1px] rounded-xl">Development</h2>
                    <p className="text-xl text-white/50">
                        I’m a frontend developer obsessed with creating web-apps.
                        My journey as a front-end developer started more than a year ago and gets more interesting every day.
                        Apart from writing code I also create designs for my projects so it makes a creative-thought process much easier.
                        I’m looking forward to get into backend and mobile development so it will expand my abilities of creating cool and helpful projects.
                    </p>
                    <h2 className="text-xl w-fit font-mono p-1 bg-blue-200/10 border-[1px] rounded-xl">Hobbies</h2>
                    <h3 className="text-3xl text-white/70">Guitar</h3>
                    <p className="text-xl text-white/50">
                        I’m playing guitar for almost a year. Mostly I play songs of the bands like: Metallica, Rammstein, Linkin Park, Anthrax.
                        Looking forward to learn some music theory but I’m a bit lazy for this 😅.
                        For the moment my biggest achievement is that I can play “Master of puppets” but there is a lot of room for progress
                    </p>
                    <h3 className="text-3xl text-white/70">Photography</h3>
                    <p className="text-xl text-white/50">
                        I’m doing photography for more than 3 years now and share photos on my instagram page.
                        I mostly do street photography but I also love to make portrait photoshoots and show people how beautiful they are.
                    </p>
                </div>
                <div className="max-[768px]:rounded-full max-[768px]:overflow-hidden max-[768px]:h-[400px] max-[1024px]:w-[50%] max-[768px]:self-center">
                    <Image className="object-cover rounded-[72px] min-w-[300px]" src="/me.jpg" alt="" width={500} height={400} />
                </div>
            </div>
        </div>
    )
}
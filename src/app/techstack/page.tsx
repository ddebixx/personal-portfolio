import { getTech } from "@/fetchers/tech/getTech"

export default async function TechstackPage() {

    const tech = await getTech()

    return (
        <div>
            {tech.techstacks.map((tech) => (     
                    <h1>{tech.technologyTitle}</h1>
            ))}
        </div>
    )
}
import Header from "@/app/components/Header";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {project: string};
};

export default async function({params}: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="bg-gradient-to-b from-gray-500 via-white to-gray-500 min-h-screen">
      <Header />
      <div 
      className="max-w-3xl min-h-screen mx-10 lg:mx-20 py-10 lg:py-10"
      > 
        <header className="flex items-center justify-between mb-2">
          <h1 className="bg-gradient-to-r from-orange-500 via-green-600 to-purple-600 bg-clip-text drop-shadow-sm text-transparent text-4xl font-extrabold">
            {project.name}
          </h1>
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-2 px-2 whitespace-nowrap hover:bg-orange-300 hover:text-white transition"
          >
            View Project
          </a>
        </header>
        <div>
          <PortableText 
            value={project.content} 
          />
        </div>
        <Image 
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-400 object-cover rounded-lg"
        />
      </div>
    </div>
  )
}
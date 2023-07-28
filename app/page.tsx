import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default async function Home() {
  const projects = await getProjects();
  
  return (
    <main className="bg-gradient-to-b from-gray-500 via-white to-gray-500 min-h-screen">
      <Header />
      <div className="max-w-5xl mx-10 lg:mx-20 py-5 lg:py-10">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold">
          Hi, i&#39;m <span className="bg-gradient-to-r from-orange-500 via-green-600 to-purple-600 bg-clip-text text-transparent">Musa</span>!
        </h1>
        <p className="mt-3 text-xl text-gray-600">
          Check out my latest Projects!
        </p>
        <h2 className="mt-20 lg:mt-24 font-bold text-gray-700 text-3xl">My Music</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.slug}`} 
              key={project._id} 
              className="
              border-2 border-gray-300 
              hover:scale-105 hover:border-gray-400 
              transition rounded-lg p-2 flex flex-col items-center">
              <div>
                {project.image && (
                  <Image 
                    src={project.image}
                    alt={project.name}
                    width={200}
                    height={200}
                    priority={true}
                    className='object-cover rounded-lg border border-gray-500'
                  />
                )}
              </div>
              <div className="font-extrabold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent ">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";
import Header from "../components/Header";

type Props = {
  params: {slug: string}
}

export default async function Page({params}: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="bg-gradient-to-b from-gray-500 via-white to-gray-500 min-h-screen">
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="mt-10 bg-gradient-to-r from-purple-800 to-green-600 bg-clip-text drop-shadow-sm text-transparent text-4xl font-extrabold">
          {page.title}
        </h1>
        <div className="mt-10 text-2xl flex flex-col items-center font-mono gap-4">
          <PortableText 
            value={page.content} 
          />
        </div>
      </div>
    </div>
  );
}
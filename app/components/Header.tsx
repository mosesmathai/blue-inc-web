
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link"

export default async function Header() {
  const pages = await getPages();

  return (
    <nav className="pl-10 pr-12 py-4 transparent w-full flex justify-between border border-t-0 border-x-0 border-b-gray-500">
      <div>
        <Link href={'/'} className="flex gap-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
            </svg>
          </div>
          <div className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-green-600 to-purple-600 bg-clip-text text-transparent">
            Blue Tech Inc
          </div>
        </Link>
      </div>
      <div className="flex gap-4 text-xl text-gray-600 font-extrabold">
        {pages.map((page) => (
          <Link key={page._id} href={`/${page.slug}`} className='hover:text-gray-800 active:text-gray-800'>
           {page.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

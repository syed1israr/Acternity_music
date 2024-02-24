import { headers } from "next/headers";

export default function page () {
  return (
   <header  className="rounded-full bg-white py-4 px-6 text-black shadow-md hover:shadow-lg cursor-pointer mt-10" >
    <h1 className="text-3xl font-cool text-center">Your Website Title</h1>
   </header>
  )
}

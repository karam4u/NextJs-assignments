import Link from "next/link";


export default function Home() {
  return (
   <> <h1 className="text-white text-center p-20 text-6xl">WELCOME TO HOME PAGE </h1>

    <Link href="/about" className="bg-red-600 font-bold p-4 text-3xl"> About </Link> 
    </>
  );
}

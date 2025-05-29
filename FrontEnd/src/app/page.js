import Link from 'next/link'

export default function Home() {  
  return (
    <div>
      <div>Hello</div>
      <Link className="bg-white text-black px-4 py-2 my-2 " href="/create">Create</Link>
    </div>
  )
}


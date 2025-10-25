import Link from "next/link";



export default function Home() {
  return (
    <main>
      <h1>CPRG 306 ASSIGNMENT</h1>
      <ul>
        <li><Link className="text-blue-600 hover:underline hover:text-cyan-300" href="./week-2">Week 2 Assignment</Link></li>

        <li><Link className="text-blue-600 hover:underline hover:text-cyan-300" href="./week-3">Week 3 Assignment</Link></li>
        
        <li><Link className="text-blue-600 hover:underline hover:text-cyan-300" href="./week-4">Week 4 Assignment</Link></li>

        <li><Link className="text-blue-600 hover:underline hover:text-cyan-300" href="./week-5">Week 5 Assignment</Link></li>
        
        <li><Link className="text-blue-600 hover:underline hover:text-cyan-300" href="./week-6">Week 6 Assignment</Link></li>
      </ul>
    </main>
  );
}
import Link from "next/link";



export default function MyInfo(){


    return(
        <main>
            <h1>Name: Vincent Manimtim </h1>
            <ul>
                <li><Link href="https://github.com/VincentManimtim/cprg306-assignments.git" className="text-cyan-600 hover:underline hover:">My Github</Link></li>
            </ul>
        </main>
    );
}
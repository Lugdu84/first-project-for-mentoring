import Link from "next/link";


export default function Home() {
  return (
    <main >
      <h1>HomePage</h1>
      <Link href="/todos">Vers la page des todos</Link>
    </main>
  )
}

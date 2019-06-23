import Link from 'next/link'

export default () => (
  <div>
    <h1 style={{color: "blue"}}>Second Page</h1>
    <Link href="/index">
      <a>Go back!</a>
    </Link>
  </div>
)
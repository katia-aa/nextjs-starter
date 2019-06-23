import Link from 'next/link'

export default () => (
  <div>
    <h1 style={{color: 'pink'}}>Hello World!</h1>
    <Link href="/second">
      <a>View second page!</a>
    </Link>
  </div>
)

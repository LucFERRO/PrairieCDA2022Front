import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div id="navbar">
        <Link href="/customers">My Space</Link>
        <Link href="/animals">My animals</Link>
        <Link href="/visits">My visits</Link>
    </div>
  )
}

import React from 'react'

const Links = () => {
  const links = [
    { name: 'Twitter', url: 'https://twitter.com/ayatk_ch' },
    { name: 'GitHub', url: 'https://github.com/ayatk' },
    { name: 'Mastodon (ぱおぱお)', url: 'https://pawoo.net/@ayatk' },
    { name: 'Blog', url: 'http://ayatk.hatenablog.com' },
  ]

  return (
    <ul>
      {links.map((link) => (
        <li key={`${link.name}`}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  )
}

export default Links

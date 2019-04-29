import * as React from "react";

const Links = () => {
  const links = [
    { name: "Twitter", url: "https://twitter.com/ayatk_ch" },
    { name: "GitHub", url: "https://github.com/ayatk" },
    { name: "Mastodon (ぱおぱお)", url: "https://pawoo.net/@ayatk" },
    {
      name: "pixivFANBOX",
      url: "https://www.pixiv.net/fanbox/creator/17461152"
    },
    { name: "Blog", url: "http://ayatk.hatenablog.com" }
  ];

  return (
    <ul>
      {links.map(link => {
        return (
          <li>
            <a href={link.url}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;

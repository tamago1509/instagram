import React from 'react';
import './Footer.css'
 function Footer (){
  const listFooter = [
    {"title": "Giới thiệu", "href": "https://about.instagram.com/"},
    {"title": "Trợ giúp", "href": "https://help.instagram.com/"},
    {"title": "Báo chí", "href": "https://about.instagram.com/blog/"},
    {"title": "API", "href": "https://www.instagram.com/developer/"},
    {"title": "Việc làm", "href": "https://www.instagram.com/about/jobs/"},
    {"title": "Quyền riêng tư", "href": "https://www.instagram.com/legal/privacy/"},
    {"title": "Điều khoản", "href": "https://www.instagram.com/legal/terms/"},
    {"title": "Vị trí", "href": "https://www.instagram.com/explore/locations/"},
    {"title": "Tài khoản liên quan nhất", "href": "https://www.instagram.com/directory/profiles/"},
    {"title": "Hashtag", "href": "https://www.instagram.com/directory/hashtags/"},
    {"title": "Ngôn ngữ", "href": "https://about.instagram.com/"}

     ]


    return(
      <div className="footer-cover">
        {
          listFooter.map(head=>(
            <a className="foot-link" href={head.href} >{head.title}</a>
          ))
        }
        <p className="foot-link">&copy;2020 INSTAGRAM FROM FACEBOOK</p>
        </div>

    )
}

export default Footer;
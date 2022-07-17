import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'
import {SiCodeforces} from 'react-icons/si'

function HeaderSocials() {
  return (
    <div className="header__socials">
       <a href="https://www.linkedin.com/in/lakshit-pandey-66a0591b3/" target="_blank"><BsLinkedin/></a>
       <a href="https://github.com/legit0108" target="_blank"><FaGithub/></a>  
       <a href="https://leetcode.com/legit_123/" target="_blank"><SiLeetcode/></a>  
       <a href="https://www.codechef.com/users/legit_123" target="_blank"><SiCodechef/></a>  
       <a href="https://codeforces.com/profile/legit_123" target="_blank"><SiCodeforces/></a>  
    </div>
  )
}

export default HeaderSocials
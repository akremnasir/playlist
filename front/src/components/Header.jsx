import React from 'react'
import {Head, CenterDiv, Search} from '../styled/styled'
const Header = () => {
  return (
    <Head>
        <a href='/'><img src='/icons/icons8-play-button-circled-100.png' alt='logo' width={80}/></a>
        <CenterDiv> <Search placeholder='search by title'/> </CenterDiv>
    </Head>
  )
}

export default Header
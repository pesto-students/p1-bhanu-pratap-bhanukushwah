import React, { useContext } from 'react'

import { ShortLink } from '../'
import { GlobalContext } from '../../context/AppState'
import './ShortLinkList.css'

const ShortLinkList = () => {
    const { shortLinks } = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="short-links-list">
                <div className="title">
                    Shortened Links
                </div>
                {
                    shortLinks.length > 0 ? <ul>
                        {[...new Map(shortLinks.map(item => [item.code, item])).values()].map(shortLink => (<ShortLink key={shortLink.code} shortLinkDetails={shortLink} />))}
                    </ul> : <div>You haven't shortened a url!</div>
                }

            </div>
        </div>
    )
}

export default ShortLinkList
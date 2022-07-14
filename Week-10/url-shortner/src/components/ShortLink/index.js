import React, { useContext } from 'react'

import { GlobalContext } from '../../context/AppState'
import { useNotification } from '../../hooks/useNotification'
import './ShortLink.css'

const ShortLink = ({ shortLinkDetails }) => {
    const { short_link, original_link, full_short_link, code } = shortLinkDetails
    const { deleteShortLink } = useContext(GlobalContext)

    const notification = useNotification()

    const copyToClipboard = () => {
        navigator.clipboard.writeText(full_short_link)
        notification.open({
            status: 'success',
            message: "Copy the linked successfully!!"
        })
    }

    const handleDeleteShortLink = () => {
        deleteShortLink(code)
        notification.open({
            status: 'danger',
            message: "Link has been deleted!"
        })
    }

    return (
        <li className='short-link-item'>
            <p className='original-link'>{original_link}</p>
            <div className="short-link">
                <a href={full_short_link} target="_blank" rel='noreferrer'>{short_link}</a>
                <button onClick={copyToClipboard}><img src="/assets/copy-clipboard.svg" alt="clipboardicon" /></button>
                <button onClick={handleDeleteShortLink}><img src="/assets/delete.svg" alt="clipboardicon" /></button>
            </div>
        </li>
    )
}

export default ShortLink
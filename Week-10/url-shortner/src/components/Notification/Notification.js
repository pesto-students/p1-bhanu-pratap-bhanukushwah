import React from 'react'
import { GrClose } from 'react-icons/gr'

import { useTimeout } from '../../hooks/useTimeout'

const Notification = (props) => {
    const { close, notification } = props
    useTimeout(close, 5000)

    return (
        <div className={`notification notification-${notification.status || 'default'}`}>
            <button onClick={close} className="notification-close-button">
                <GrClose />
            </button>
            <div className="notification-text">{notification.message}</div>
        </div>
    )
}

export default Notification
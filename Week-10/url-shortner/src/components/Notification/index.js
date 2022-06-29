import React, { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'

import { NotificationContext } from '../../context/NotificationContext'
import { generateUniqueId } from '../../helpers/generateUniqueId'
import Notification from './Notification'
import './Notification.css'

export const NotificationProvider = (props) => {
    const [notifications, setNotifications] = useState([]);

    const open = (content) => setNotifications((currentNotifications) => [
        ...currentNotifications,
        {
            id: generateUniqueId(), content
        }
    ])
    const close = (id) => setNotifications((currentNotifications) => currentNotifications.filter(notification => notification.id !== id))


    const contextValue = useMemo(() => ({ open }), [])

    return (<NotificationContext.Provider value={contextValue}>
        {props.children}

        {
            createPortal(
                <div className="notification-wrapper">
                    {
                        notifications.map(notification => (
                            <Notification key={notification.id} close={() => close(notification.id)} notification={notification.content} />
                        ))
                    }
                </div>,
                document.body
            )
        }
    </NotificationContext.Provider>)
}

export default NotificationProvider
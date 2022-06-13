import React, { useState, useContext } from 'react'

import { createShortLink } from '../../apis/'
import { GlobalContext } from '../../context/AppState'
import { Loader } from '../'
import { isValidateURL } from '../../helpers/validateUrl'
import { useNotification } from '../../hooks/useNotification'
import './CreateShortLink.css'

const CreateShortLink = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { addShortLink } = useContext(GlobalContext)

    const notification = useNotification()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        let longUrl = event.target.url.value;
        if (isValidateURL(longUrl)) {
            let shortLinkDetails = await createShortLink(longUrl)
            addShortLink(shortLinkDetails)
            setIsLoading(false)
            notification.open({
                status: 'success',
                message: "Link has been created successfully!!"
            })
            event.target.reset()
        } else {
            notification.open({
                status: 'danger',
                message: "Please enter a valid url!"
            })
            setIsLoading(false)
        }
    }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h3 htmlFor="Title">Enter the URL to be shortened!!</h3>
                <div>
                    <input placeholder='https://google.com/careers' type="text" name="url" minLength={3} required />
                    {
                        isLoading ?
                            <button className='loading-button' type="submit" disabled><Loader /></button> :
                            <button type="submit">Shorten It!</button>
                    }
                </div>
            </form>

        </div>
    )
}

export default CreateShortLink
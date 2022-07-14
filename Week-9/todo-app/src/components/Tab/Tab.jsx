import React from 'react'

const Tab = ({ isSelected, title, onClick }) => {
    return (
        <div className={`tab-item ${isSelected ? 'selected' : ''}`} onClick={() => onClick(title)}>{title}</ div>
    )
}

export default Tab
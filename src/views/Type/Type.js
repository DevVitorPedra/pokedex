import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Type() {
    useEffect(() => {
        const typesSelector= document.querySelector('.types-selector')
        typesSelector.classList.add('show')
        return () => {
            typesSelector.classList.remove('show')
        }
    }, [])
    return (
        <div className="types">
            <select>
                <option>normal</option>
            </select>
            <div className="types-screen"></div>
        </div>
    )
}

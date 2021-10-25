import React, { useEffect } from 'react'

export default function Type() {
    useEffect(() => {
        const typesSelector= document.querySelector('.types-selector')
        typesSelector.classList.add('show')
        return () => {
            typesSelector.classList.remove('show')
        }
    }, [])
    return (
        <div>
            <p>types</p>
        </div>
    )
}

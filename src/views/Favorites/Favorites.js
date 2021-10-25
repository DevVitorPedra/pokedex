import React, { useEffect} from 'react'

export default function Favorites() {
    useEffect(() => {
        const favoritesSelector = document.querySelector('.favorites-selector')
        favoritesSelector.classList.add('show')
        return () => {
            favoritesSelector.classList.remove('show')
        }
    }, [])
    return (
        <div>
            Favorites
        </div>
    )
}

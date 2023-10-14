import React from 'react'
import "./Album.css"

interface AlbumProps {
  album: {name: string}
}

export const Album: React.FC<AlbumProps> = ({album}) => {
     return (<div className='displayAlbum'>{album.name}</div>);
}
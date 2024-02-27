import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};

function AlbumList({albumList}) {
    return (
        <div>
            <ul className='album-list'>
                {albumList.map(album =>(
                    <li key={album.id}>
                        <Album album={album}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;
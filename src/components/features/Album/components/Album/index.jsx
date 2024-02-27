import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired
};

function Album({ album }) {
    return (
        <div className='album'>
            <div className='thumbnail'>
                <img src={album.thumbnailUrl} alt={album.name} />
            </div>
            <p className='name'>{album.name}</p>
        </div>
    );
}

export default Album;
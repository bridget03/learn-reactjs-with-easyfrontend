import React from 'react';
import PropTypes from 'prop-types';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Buc tranh lem mau",
            thumbnailUrl: '	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/7/8/f/a/78fa0cf557d26165394e9e1ebf2dadf0.jpg'
        },
        {
            id: 2,
            name: "Den day thoi",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/3/5/0/6/350683b5a0892324a376a133d6708203.jpg'        
        },
        {
            id: 3,
            name: "Yeu nam",
            thumbnailUrl: '	https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/f/4/7/ef47f158028f5b5ea7c561b7f02b8548.jpg'
        }
    ]
    return (
        <div>
            <h2>You could like</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
import './components/AlbumList/style.css'
import './components/Album/style.css'

AlbumFeature.propTypes = {
    
};

export default function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Top 100 bài hát nhạc trẻ",
            thumbnailUrl: '	https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/2/c/4/b2c4b8cdf46138c56a48be6d4d370b4d.jpg'
        },
        {
            id: 2,
            name: "Top 100 pop Âu Mỹ",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/0/7/3/707385004545cb57d81234ebce42d598.jpg'        
        },
        {
            id: 3,
            name: "Top 100 nhạc EDM",
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/7/2/a/072ad73889c625846b27fea36fc12c13.jpg'
        }
    ]
    return (
        <div>
            <h2>Top 100</h2>
            <AlbumList albumList={albumList}/>

        </div>
    );
}

 function ColorBox(props) {
    const[color, setColor] = useState('white');
    const[count, setCount] = useState(0);

    return (
        <div>
            {color}
            <br/>
            {count}
            <br/>
            <button onClick={() => setColor('white')}> Change to white</button>

            <button onClick={() => setColor('black')}> Change to black</button>

            <button onClick={() => setCount(x => x + 1)}>click to increase</button>
        </div>
    );
}
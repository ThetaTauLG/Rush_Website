import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Owen from '../images/Owen.webp';
import Waverly from '../images/Waverly.webp';

const itemData = [
    {
        img: Owen,
        title: 'Owen Tabah',
        author: 'Co-Rush Chair',
    },
    {
        img: Waverly,
        title: 'Waverly Kremer',
        author: 'Co-Rush Chair',
    },
];

export default function RushChairs() {
    return (
        <ImageList sx>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
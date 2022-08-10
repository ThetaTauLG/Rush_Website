import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Filler from '../images/filler.webp';

const itemData = [
    {
        img: Filler,
        title: 'Owen Tabah',
        author: 'Co-Rush Chair',
    },
    {
        img: Filler,
        title: 'Waverly "Wavo" Kremer',
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
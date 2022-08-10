import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Filler from '../images/filler.webp';
import Aidan from '../images/Aidan.webp';
import Emma from '../images/Emma.webp';
import Paige from '../images/Paige.webp';
import Joseph from '../images/Joseph.webp';

const itemData = [
    {
        img: Aidan,
        title: 'Aidan Quinn',
        author: 'Corresponding Secretary',
    },
    {
        img: Emma,
        title: 'Emma "EKato" Katovich',
        author: 'Vice Regent',
    },
    {
        img: Paige,
        title: 'Paige Waters',
        author: 'Regent',
    },
    {
        img: Filler,
        title: 'Gavin Stafford',
        author: 'Scribe',
    },
    {
        img: Filler,
        title: 'Colin Blue',
        author: 'Treasurer',
    },
    {
        img: Joseph,
        title: 'Joseph Campbell',
        author: 'New Member Educator',
    },
];

export default function Exec() {
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
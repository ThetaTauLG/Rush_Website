import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Filler from '../images/filler.webp';
import Aidan from '../images/Aidan.webp';
import Emma from '../images/Emma.webp';
import Paige from '../images/Paige.webp';
import Joseph from '../images/Joseph.webp';
import Gavin from '../images/Gavin.webp';
import Colin from '../images/Colin.webp';

const itemData = [
    {
        img: Paige,
        title: 'Paige Waters',
        author: 'Regent',
    },
    {
        img: Emma,
        title: 'Emma Katovich',
        author: 'Vice Regent',
    },
    {
        img: Filler,
        title: 'Gavin Stafford',
        author: 'Scribe',
    },
    {
        img: Colin,
        title: 'Colin Blue',
        author: 'Treasurer',
    },
    {
        img: Joseph,
        title: 'Joseph Campbell',
        author: 'New Member Educator',
    },
    {
        img: Aidan,
        title: 'Aidan Quinn',
        author: 'Corresponding Secretary',
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
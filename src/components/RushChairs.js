import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { StaticQuery } from 'gatsby';
import Owen from '../images/Owen.webp';
import Waverly from '../images/Waverly.webp';
import { Typography } from '@mui/material';

const itemData = [
    {
        img: '../images/Owen.webp',
        title: 'Owen Tabah',
        author: 'Co-Rush Chair',
    },
    {
        img: '../images/Waverly.webp',
        title: 'Waverly Kremer',
        author: 'Co-Rush Chair',
    },
];

export default function RushChairs() {
    return (
        // <StaticQuery
        //     query=``
        <ImageList sx>
            {/* {itemData.map((item) => ( */}
            <ImageListItem key={'../images/Owen.webp'}>
                <StaticImage
                    src={'../images/Owen.webp'}
                    alt={'Owen Tabah'}
                    aspectRatio={8 / 10}
                />
                <ImageListItemBar
                    title={'Owen Tabah'}
                    subtitle={'Co-Rush Chair'}
                />
            </ImageListItem>
            <ImageListItem key={'../images/Waverly.webp'}>
                <StaticImage
                    src={'../images/Waverly.webp'}
                    alt={'Waverly Kremer'}
                    aspectRatio={8 / 10}
                />
                <ImageListItemBar
                    title={'Waverly Kremer'}
                    subtitle={'Co-Rush Chair'}
                />
            </ImageListItem>
            {/* ))} */}
        </ImageList>
    )
}
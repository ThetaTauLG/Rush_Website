import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function RushChairs() {
    return (
        <ImageList sx>
            <ImageListItem key={'../images/Owen.webp'}>
                <StaticImage
                    src={'../images/Owen.webp'}
                    alt={'Owen Tabah'}
                    aspectRatio={1 / 1}
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
                    aspectRatio={1 / 1}
                />
                <ImageListItemBar
                    title={'Waverly Kremer'}
                    subtitle={'Co-Rush Chair'}
                />
            </ImageListItem>
        </ImageList>
    )
}
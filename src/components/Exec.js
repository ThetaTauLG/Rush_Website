import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { StaticImage } from 'gatsby-plugin-image';

export default function Exec() {
    return (
        <ImageList>
            <ImageListItem key={'../images/Paige.webp'}>
                <StaticImage
                    src={'../images/Paige.webp'}
                    alt={'Paige Waters'}
                    aspectRatio={1 / 1}
                />
                <ImageListItemBar
                    title={'Paige Waters'}
                    subtitle={'Regent'}
                />
            </ImageListItem>
            <ImageListItem key={'../images/Emma.webp'}>
                <StaticImage
                    src={'../images/Emma.webp'}
                    alt={'Emma Katovich'}
                    aspectRatio={1 / 1}
                />
                <ImageListItemBar
                    title={'Emma Katovich'}
                    subtitle={'Vice Regent'}
                />
            </ImageListItem>
            <ImageListItem key={'../images/Gavin.webp'}>
                <StaticImage
                    src={'../images/filler.webp'}
                    alt={'filler'}
                    aspectRatio={1 / 1}
                />
                <ImageListItemBar
                    title={'Gavin Stafford'}
                    subtitle={'Scribe'}
                />
            </ImageListItem>
            <ImageListItem key={'../images/Colin.webp'}>
                <StaticImage
                    src={'../images/Colin.webp'}
                    alt={'Colin Blue'}
                    aspectRatio={1 / 1}
                />
                <ImageListItemBar
                    title={'Colin Blue'}
                    subtitle={'Treasurer'}
                />
            </ImageListItem>
            <ImageListItem key={'../images/Aidan.webp'}>
                <StaticImage
                    src={'../images/Aidan.webp'}
                    alt={'Aidan Quinn'}
                    aspectRatio={1 / 1}
                />
                <ImageListItemBar
                    title={'Aidan Quinn'}
                    subtitle={'Corresponding Secretary'}
                />
            </ImageListItem>
            <ImageListItem key={'../images/Joseph.webp'}>
                <StaticImage
                    src={'../images/Joseph.webp'}
                    alt={'Joseph Campbell'}
                    aspectRatio={1 / 1}
                />
                <ImageListItemBar
                    title={'Joseph Campbell'}
                    subtitle={'New Member Educator'}
                />
            </ImageListItem>
        </ImageList>
    )
}
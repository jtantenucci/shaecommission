import philip from 'public/philip.png';
import photo1 from 'public/photos/photo1.jpg'
import charcoal5 from 'public/charcoal/charcoal5.jpg'
import paint12 from 'public/paint/paint12.jpg'
export const MainArray = 
[
    {
        id: 1,
        img: philip,
        title: 'info',
        path: '/info',
        select: 'info-image',
        cols: 2,
    },
    {
        id: 2,
        img: charcoal5,
        title: 'charcoal',
        path: '/charcoal',
        select: 'charcoal-image',
        cols: 2,
    },
    {
        id: 3,
        img: photo1,
        title: 'photos',
        path: '/photos',
        select: 'photos-image',
        cols: 2,
    },
    {
        id: 4,
        img: paint12,
        title: 'paint',
        path: '/paint',
        select: 'paint-image',
        cols: 2,
    },
];
import { style } from '@vanilla-extract/css';

export default {
    container: style({
        minHeight: 'calc(100vh - 5rem)', // subtract the height of the header + a little extra
        padding: '2rem'
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center'
    }),
    heading: style({
        fontSize: '2rem'
    }),
    gallery: style({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20vw, 1fr))',
        // gridTemplateRows: 'masonry',
        gridTemplateRows: 'repeat(auto-fill, minmax(20vw, 1fr))',
        gap: '10px'
    }),
    wrapper: style({
        // position: 'relative',
        // maxWidth: '20vw',
        // marginBlock: '1rem',
    }),
    image: style({
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    })
};

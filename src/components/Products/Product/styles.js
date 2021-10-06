import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
        maxWidth: '100%',
        minHeight: '100%',
        backgroundColor: '#f7f7f7',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    },
    media: {
        height: '120px',
        paddingTop: '56.25%', //16:9
    },
    cardActions: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between',
    },
}));
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 200,
  },
  cardContent: {
    display: 'flex',
    flex: '1',
    minHeight: '160px',
    justifyContent: 'space-between',
    },
  cartActions: {
    display: 'flex',
    flex: '1',
    justifyContent: 'flex-end',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
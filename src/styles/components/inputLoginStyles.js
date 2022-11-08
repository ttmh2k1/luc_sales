import { makeStyles } from '@material-ui/core/styles';

export const InputLoginStyle = makeStyles(() => ({
  root: {
    backgroundColor: '#f5f8f8',
    width: '400px',
    height: '60px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '20px'
  },
  leftIcon: {
    margin: '20px',
    width: '20px',
    height: '20px'
  },
  inputText: {
    backgroundColor: 'transparent',
    fontSize: '1.8rem',
    fontFamily: 'Calibri',
    color: '#9da0a1',
    border: 'none',
    height: '100%',
    width: '100%',
    '&:focus': {
      outline: 'none'
    },
    '&::placeholder': {
      fontSize: '1.8rem',
      fontFamily: 'Calibri',
      color: '#9da0a1'
    }
  },
  hidePassword: {
    margin: '20px',
    width: '20px',
    height: '20px'
  }
}));

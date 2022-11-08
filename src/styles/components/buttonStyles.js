import * as Variables from './Variables';

// const buttonStyle = {
// eslint-disable-next-line no-unused-vars
const buttonStyle = (properties, theme) => ({
  button: {
    minWidth: properties_ => properties_.minWidth && properties_.minWidth,
    maxWidth: properties_ => properties_.maxWidth && properties_.maxWidth,
    borderRadius: '.5rem',
    border: '0.08rem solid #955b36',
    color: '#fff',
    height: properties_ => (properties_.height ? properties_.height : '4rem'),
    padding: '0 10px',
    // boxShadow: ' 0 .2rem .4rem 0 gray',
    width: properties.width,
    // margin: '1rem 2rem .7rem 2rem',
    margin: properties_ => properties_.margin,
    fontSize: '1.6rem',
    textTransform: 'none'
  },

  buttonIcon: {
    minHeight: '3rem',
    height: properties_ => (properties_.height ? properties_.height : '3rem'),
    width: '3rem',
    minWidth: '3rem',
    borderRadius: '.5rem',
    color: '#000',
    margin: '0.1rem .3rem'
  },
  buttonStatus: {
    maxHeight: '2.5rem',
    minWidth: '15rem',
    fontWeight: '600',
    // maxWidth: "15rem",
    background: 'blue',
    borderRadius: '.5rem',
    color: '#fff',
    // margin: '0.7rem',
    fontSize: '1.4rem',
    margin: properties_ => properties_.margin,
    '&:hover': {
      // you want this to be the same as the backgroundColor above
      backgroundColor: '#FFF',
      cursor: 'default'
    }
  },
  label: {
    // textTransform: "capitalize",
    fontSize: '1.6rem',
    color: '#000'
  },
  //

  disable: {
    background: Variables.DisableButtonColor,
    color: '#fff',

    '&:hover,&:focus': {
      background: Variables.DisableButtonColor
    }
  },
  warning: {
    background: Variables.WarningColor,
    color: '#fff',

    '&:hover,&:focus': {
      background: Variables.WarningColor
    }
  },
  green: {
    background: Variables.GreenColor,
    '&:hover,&:focus': {
      background: Variables.GreenColor
    }
  },
  yellow: {
    background: Variables.YellowColor,
    '&:hover,&:focus': {
      background: Variables.YellowColor
    }
  },
  purple: {
    background: Variables.PurpleColor,
    '&:hover,&:focus': {
      background: Variables.PurpleColor
    }
  },
  brown: {
    background: Variables.BrownColor,
    '&:hover,&:focus': {
      background: Variables.BrownColor
    }
  },
  blue: {
    background: Variables.BlueColor,
    '&:hover,&:focus': {
      background: Variables.BlueColor
    }
  },
  bluelight: {
    background: Variables.BlueLightColor,
    '&:hover,&:focus': {
      background: Variables.BlueLightColor
    }
  },
  red: {
    background: Variables.RedColor,
    '&:hover,&:focus': {
      background: Variables.RedColor
    }
  },
  grey: {
    background: Variables.GreyColor,
    '&:hover,&:focus': {
      background: Variables.GreyColor
    }
  },
  white: {
    background: Variables.WhiteColor,
    color: '#707070',
    '&:hover,&:focus': {
      background: Variables.WhiteColor
    }
  },

  border: {
    borderRadius: '20px'
  },
  transparent: {
    background: 'transparent',
    color: '#000',
    // border: "unset",
    // boxShadow: "unset",
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent'
      // boxShadow: 'none',
    }
  },
  isIcon: {
    minWidth: '41px',
    width: '60px',

    paddingLeft: '10px',
    paddingRight: '10px',
    '&,&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
      boxShadow: 'none'
    }
  }
});
export default buttonStyle;

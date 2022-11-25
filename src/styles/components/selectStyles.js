import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    icon: {
        fontSize: '2.3rem',
        right: '20px'
    },
    root: {
        padding: 0,
        // width: (props) => props.length,
        width: '100%'
    },
    disabledColor: {
        background: '#e9ebf1'
    },
    input: {
        display: 'flex',
        // backgroundColor: '#FFFFFF',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '5px',
        // width: (props) => props.length,
        width: '100%',
        height: '38px',
        // [theme.breakpoints.down('md')]: {
        //   maxWidth: '215px',
        // },
        color: '#000',
        fontFamily: 'Calibri',
        marginRight: '3px',
        fontSize: '1.6rem',
        textOverflow: 'ellipsis',
        // textOverflow:"hidden",
        padding: '0 0 0 8px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        font: 'initial',
        '&.MuiSelect-outlined.MuiSelect-outlined': {
            border: 'solid 1px rgba(0, 0, 0, 0.23)',
            '&.Mui-focused': {
                border: 'solid 2px #e79f39'
            }
        },
        '&:focus': {
            borderRadius: 5,
            border: 'solid 2px #e79f39'
        },
        '&:hover': {
            borderColor: '#000'
        }
    },
    get inputError() {
        return {
            ...this.input,
            '&.MuiSelect-outlined.MuiSelect-outlined': {
                border: 'solid 1px red',
                '&.Mui-focused': {
                    border: 'solid 2px #e79f39'
                }
            }
        };
    },
    selectMenu: {
        backgroundColor: 'red'
    },
    label: {
        fontSize: '1.6rem',
        height: '1.8rem',
        lineHeight: '1.8rem',
        fontWeight: 'bold',
        fontFamily: 'Calibri',
        marginBottom: '0.5em'
    },
    select: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        fontFamily: 'Calibri'
    },
    errorText: {
        color: 'red'
    }
}));

export default styles;

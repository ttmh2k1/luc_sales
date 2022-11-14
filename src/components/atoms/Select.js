/* eslint-disable no-unused-vars */
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Controller } from 'react-hook-form';

import styles from '../../styles/components/selectStyles';

const usePlaceholderStyles = makeStyles(theme => ({
    placeholder: {
        color: '#aaa'
    }
}));

const useStyles = makeStyles({
    select: {
        '&:after': {
            right: '11px',
            fontSize: '2.3rem'
        },
        '& .MuiSvgIcon-root': {
            right: '11px',
            fontSize: '2.3rem'
        },
        '& .MuiSelect-select.Mui-disabled': {
            cursor: 'default',
            background: '#e9ebf1',
            color: 'rgba(0, 0, 0, 0.38)'
        }
    }
});

const Placeholder = ({ children }) => {
    const classes = usePlaceholderStyles();
    return <div className={classes.placeholder}>{children}</div>;
};

export default function Selects({
    title,
    isRequired,
    children,
    name,
    id,
    setValue,
    value,
    isValidate,
    length,
    margin,
    disabled,
    control,
    error,
    placeholder,
    helperText,
    noTitle,
    setOpenSelect,
    ...otherProperties
}) {
    const properties = {};
    const classes = styles(properties);

    const iconClass = useStyles();

    const handleChange = event => {
        setValue(event.target.value);
    };

    if (isValidate && setOpenSelect) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: margin || '1.5rem 0rem 2rem 0rem',
                    position: 'relative',
                    width: '100%',
                    padding: '0 10px'
                }}
            >
                <p className={classes.label}>
                    {title ? (isRequired ? `${title} (*)` : title) : 'Input title'}
                </p>
                <FormControl disabled={disabled} variant="outlined" error>
                    <Controller
                        type="select"
                        render={({ field, fieldState, formState }) => (
                            <Select
                                {...field}
                                {...fieldState}
                                {...formState}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: '20rem'
                                        }
                                    }
                                }}
                                variant="outlined"
                                classes={{
                                    icon: classes.icon,
                                    disabled: disabled && classes.disabledColor
                                }}
                                value={field.value}
                                error={error}
                                onOpen={() => setOpenSelect(true)}
                                onClose={() => setOpenSelect(false)}
                                displayEmpty
                                renderValue={
                                    field.value !== ''
                                        ? undefined
                                        : () => <Placeholder>{placeholder || ''}</Placeholder>
                                }
                                className={iconClass.select}
                                input={(
                                    <InputBase
                                        error
                                        classes={{
                                            input: fieldState.error
                                                ? classes.inputError
                                                : classes.input,
                                            root: classes.root
                                        }}
                                    />
                                )}
                            >
                                {children}
                            </Select>
                        )}
                        name={name}
                        control={control}
                    />
                    {error && (
                        <FormHelperText
                            style={{ fontSize: '1.3rem', fontWeight: 500 }}
                            error={error}
                        >
                            {helperText}
                        </FormHelperText>
                    )}
                </FormControl>
            </div>
        );
    }
    if (isValidate && !setOpenSelect) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: margin || '1.5rem 0rem 2rem 0rem',
                    position: 'relative',
                    width: '100%',
                    padding: '0 10px'
                }}
            >
                <p className={classes.label}>
                    {title ? (isRequired ? `${title} (*)` : title) : 'Input title'}
                </p>
                <FormControl disabled={disabled} variant="outlined" error>
                    <Controller
                        type="select"
                        render={({ field, fieldState, formState }) => (
                            <Select
                                {...field}
                                {...fieldState}
                                {...formState}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            maxHeight: '20rem'
                                        }
                                    }
                                }}
                                variant="outlined"
                                classes={{
                                    icon: classes.icon,
                                    disabled: disabled && classes.disabledColor
                                }}
                                value={field.value}
                                error={error}
                                displayEmpty
                                renderValue={
                                    field.value !== ''
                                        ? undefined
                                        : () => <Placeholder>{placeholder || ''}</Placeholder>
                                }
                                className={iconClass.select}
                                input={(
                                    <InputBase
                                        error
                                        classes={{
                                            input: fieldState.error
                                                ? classes.inputError
                                                : classes.input,
                                            root: classes.root
                                        }}
                                    />
                                )}
                            >
                                {children}
                            </Select>
                        )}
                        name={name}
                        control={control}
                    />
                    {error && (
                        <FormHelperText
                            style={{ fontSize: '1.3rem', fontWeight: 500 }}
                            error={error}
                        >
                            {helperText}
                        </FormHelperText>
                    )}
                </FormControl>
            </div>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: margin || '1.5rem 0rem 2rem 0rem',
                padding: '0 10px',
                width: '100%'
            }}
        >
            {!noTitle && (
                <p className={classes.label}>
                    {title ? (isRequired ? `${title} (*)` : title) : 'Input title'}
                </p>
            )}
            <FormControl disabled={disabled}>
                <Select
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: '20rem'
                            }
                        }
                    }}
                    variant="outlined"
                    classes={{
                        icon: classes.icon,
                        disabled: disabled && classes.disabledColor
                    }}
                    value={value}
                    onChange={handleChange}
                    inputProps={{
                        id: name
                    }}
                    displayEmpty
                    className={iconClass.select}
                    renderValue={
                        value !== ''
                            ? undefined
                            : () => <Placeholder>{placeholder || ''}</Placeholder>
                    }
                    input={
                        <InputBase classes={{ input: classes.input, root: classes.root }} />
                    }
                >
                    {children}
                </Select>
            </FormControl>
        </div>
    );
}

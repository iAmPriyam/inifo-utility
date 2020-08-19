import React from 'react'
import { form, control, button } from 'react-validation'
import { TextField } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import InputAdornment from '@material-ui/core/InputAdornment'
import ColButton from '../../components/ColButton'
import {
  MuiPickersUtilsProvider,
  DateTimePicker,
  DatePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup'
import useWindowDimensions from '../hooks/useWindowDimensions'

// Define own Form component
const renderForm = formProperties => {
  const {
    getValues,
    validate,
    validateAll,
    showError,
    hideError,
    children,
    onSubmit,
    ...props
  } = formProperties
  return (
    // destruct non-valid props
    <form
      className={'common-form'}
      onSubmit={e => onSubmit(e, getValues())}
      {...props}
    >
      {children}
    </form>
  )
}

// Define own Input component
const renderInput = ({ error, isChanged, isUsed, ...props }) => {
  let InputProp = {
    startAdornment: (
      <InputAdornment position='start'>{props.startProp}</InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position='end'>{props.endProp}</InputAdornment>
    )
  }
  return (
    <div
      className='common-input react-form-input'
      dataistouched={isChanged ? 'true' : 'false'}
    >
      {/* <FormControl component="fieldset" data={isUsed}> */}
      <TextField {...props} InputProps={props.InputProps ? InputProp : null} />
      {isChanged && isUsed && error}
      {/* </FormControl> */}
    </div>
  )
}
const renderInputPwd = ({ error, isChanged, isUsed, ...props }) => {
  return (
    <div
      className='react-form-input'
      dataistouched={isChanged ? 'true' : 'false'}
    >
      {/* <TextField {...props} type='password' */}
      <TextField
        {...props}
        InputProps={{
          endAdornment: props.children
        }}
      />
      {isChanged && isUsed && error}
    </div>
  )
}
// Define own Select component
const renderSelect = ({ error, isChanged, isUsed, children, ...props }) => {
  return (
    <div
      className='common-input react-form-input'
      dataistouched={isChanged ? 'true' : 'false'}
    >
      <TextField select {...props} data-changed={isChanged}>
        {children}
      </TextField>
      {isChanged && isUsed && error}
    </div>
  )
}
const renderDatePicker = ({
  error,
  isChanged,
  views,
  isUsed,
  children,
  ...props
}) => {
  let val = props.value === '' ? null : props.value
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions()
  props.variant = 'inline'
  if (width < 911) props.variant = ''
  return (
    <div
      className='common-input react-form-input cal-input'
      dataistouched={isChanged ? 'true' : 'false'}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify='space-around'>
          <DatePicker
            className='datePicker'
            {...props}
            allowKeyboardControl={true}
            value={val}
            onChange={props.change}
            keyboardIcon={<i className='icon icon-calendar-icon' />}
          />
        </Grid>
        <i className='icon cal-icon icon-calendar-icon' />
      </MuiPickersUtilsProvider>
      {isChanged && isUsed && error}
    </div>
  )
}
// Define own Button component
const renderButton = ({ hasErrors, ...props }) => {
  return <button {...props} disabled={hasErrors} />
}
const renderButtonFancy = ({ hasErrors, ...props }) => {
  return (
    <ColButton className={`cursor-pointer ${props.className ? props.className : ''}`} {...props} hasErrors={hasErrors}>
      {props.children}
    </ColButton>
  )
}

const formValidCheck = ({ hasErrors, ...props }) => {
  return (
    <button disabled className='validIcon'>
      <i className={`icon ${hasErrors ? 'icon-unchecked' : 'icon-checked'}`} />
    </button>
  )
}

const renderRadioBottons = ({
  error,
  isChanged,
  isUsed,
  children,
  ...props
}) => {
  return (
    <div
      className='react-form-input'
      dataistouched={isChanged ? 'true' : 'false'}
    >
      <RadioGroup {...props}>{children}</RadioGroup>
    </div>
  )
}

const renderDateTimePicker = ({
  error,
  isChanged,
  views,
  isUsed,
  children,
  ...props
}) => {
  let value = props.dateTimeValue === '' ? null : props.dateTimeValue
  return (
    <div
      className='react-form-input'
      dataistouched={isChanged ? 'true' : 'false'}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify='space-around'>
          <DateTimePicker
            {...props}
            // className='datePicker'
            value={value}
            onChange={props.change}
            keyboardIcon={<i className='icon icon-calendar-icon' />}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      {isChanged && isUsed && error}
    </div>
  )
}

// Now call HOCs on components
const Form = form(renderForm)

const Input = control(renderInput)
const SelectInput = control(renderSelect)
const DatePickerInput = control(renderDatePicker)
const RadioBotton = control(renderRadioBottons)
const DateTimePickerInput = control(renderDateTimePicker)
const InputPwd = control(renderInputPwd)

const Button = button(renderButton)
const FancyButton = button(renderButtonFancy)
const FormValid = button(formValidCheck)

export {
  Input,
  Form,
  Button,
  SelectInput,
  DatePickerInput,
  RadioBotton,
  DateTimePickerInput,
  FancyButton,
  InputPwd,
  FormValid
}

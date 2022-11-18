import { DateTimePicker, DesktopDatePicker, LocalizationProvider, MobileDatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AccessibleIcon from "@mui/icons-material/Accessible";
import React from 'react';
import { Stack, TextField } from '@mui/material';

const DatePicker = () => {
  const [value, setValue] = React.useState(
    dayjs('2014-08-18T21:11:54'),
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleChange2 = () => {
  };
  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          mask='__/__/____'
          components={
            {
              OpenPickerIcon: AccessibleIcon
            }
          }
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField onChange={handleChange2} placeholder="DD/MM/YYYY" defaultValue={"DD/MM/YYYY"} size='small'{...params} />}
        />
        <TimePicker
          mask='__:__'
          inputFormat='HH:MM'
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField size='small' {...params} />}
        />
    </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
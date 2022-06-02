import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";


const BasicDateTimePicker= ({ date, setDate }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(props) => <TextField {...props} />}
				// label="DateTimePicker"
				value={date}
				onChange={(newValue) => {
					setDate(newValue);
				}}
			/>
		</LocalizationProvider>
	);
};

export default BasicDateTimePicker;

import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    formControl: {
      margin: theme.spacing(1),
    },

  })
);


export default function Filters() {
  const classes = useStyles();
  // const selectClasses = styles();
  const [age, setAge] = React.useState("10");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl} size="small" color="secondary" variant="outlined">
        <InputLabel id="companies-outlined-label">Company</InputLabel>
        <Select
          labelId="companies-outlined-label"
          id="companies-outlined"
          placeholder="Company"
          value={age}
          onChange={handleChange}
          label="Companies"
        >
          <MenuItem value={10}>All Companies</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        className={classes.formControl}
        size="small"
        defaultValue={10}
        color="secondary" variant="outlined"
      >
        <InputLabel id="camps-outlined-label">Camps</InputLabel>
        <Select
          labelId="camps-outlined-label"
          id="camps-outlined"
          value={age}
          onChange={handleChange}
          label="Camps"
        >
          <MenuItem value={10}>Campus</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

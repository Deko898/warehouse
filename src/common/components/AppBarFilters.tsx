import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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

      '& .MuiListItem-root': {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
      }
    },
    formControl: {
      margin: theme.spacing(1),
    },
  })
);

export default function Filters() {
  const classes = useStyles();
  const [age, setAge] = React.useState("10");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl
        className={classes.formControl}
        size="small"
        color="secondary"
        variant="outlined"
      >
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
          <MenuItem value={20}>
            <span>3LINX -</span>
            <span> 3LINX Unified Commerce</span>
          </MenuItem>
          <MenuItem value={30}>
            <span>FIRSTCL -</span>
            <span> First Choice Lighting</span>
          </MenuItem>
          <MenuItem value={40}>
            <span>EWF -</span>
            <span> EWatch Factory</span>
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl
        className={classes.formControl}
        size="small"
        defaultValue={10}
        color="secondary"
        variant="outlined"
      >
        <InputLabel id="facility-outlined-label">Facility</InputLabel>
        <Select
          labelId="facility-outlined-label"
          id="facility-outlined"
          value={age}
          onChange={handleChange}
          label="Facility"
        >
          <MenuItem value={10}>Campus</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

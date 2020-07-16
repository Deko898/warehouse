import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles, useSelectStyles } from "./styles/appBarFilters.styles";
import { InputLabel, ListSubheader } from "@material-ui/core";

export default function Filters() {
  const classes = useStyles();
  const selectClasses = useSelectStyles();
  const [company, setCompany] = React.useState("10");
  const [facility, setFacility] = React.useState("10");

  const handleCompanyChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCompany(event.target.value as string);
  };

  const handleFacilityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setFacility(event.target.value as string);
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
          value={company}
          onChange={handleCompanyChange}
          label="Companies"
        >
          <MenuItem value={10} className={selectClasses.root}>
            All Companies
          </MenuItem>
          <MenuItem value={20} className={selectClasses.root}>
            <strong>3LINX</strong>
            <span> 3LINX Unified Commerce</span>
          </MenuItem>
          <MenuItem value={30} className={selectClasses.root}>
            <strong>FIRSTCL</strong>
            <span> First Choice Lighting</span>
          </MenuItem>
          <MenuItem value={40} className={selectClasses.root}>
            <strong>EWF</strong>
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
          value={facility}
          onChange={handleFacilityChange}
          label="Facility"
        >
          <MenuItem value={10}>ALN - Allentown, PA</MenuItem>
          <MenuItem value={11}>BKLYN - Brooklyn, NY</MenuItem>
          <MenuItem value={12}>LAS - Las Vegas, NV</MenuItem>
          <MenuItem value={13}>LAX - Los Angeles, CA</MenuItem>
          <ListSubheader>GLA - Glasgow, UK (Campus)</ListSubheader>
          <MenuItem value={1}>GLA1 - Glasgow, UK</MenuItem>
          <MenuItem value={2}>GLA2 - Glasgow, UK</MenuItem>
          <MenuItem value={2}>GLA3 - Glasgow, UK</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

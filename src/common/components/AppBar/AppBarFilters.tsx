import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  useStyles,
  useSelectStyles
} from "./styles/appBarFilters.styles";
import { InputLabel } from "@material-ui/core";

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
          <MenuItem value={10} className={selectClasses.root}>
            <strong>
              <img src="data:image/png;base64,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"></img>
              ALN
            </strong>
            <span> Allentown, PA</span>
          </MenuItem>
          <MenuItem value={11} className={selectClasses.root}>
            <strong>
              <img src="data:image/png;base64,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"></img>
              BKLYN
            </strong>
            <span>Brooklyn, NY</span>
          </MenuItem>

          <MenuItem value={12} className={selectClasses.root}>
            <strong>
              <img src="data:image/png;base64,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"></img>
              GLA
            </strong>
            <span>Glasgow, UK (Campus)</span>
          </MenuItem>
          <MenuItem value={1} className={selectClasses.root}>
            <strong className={classes.childMargin}>GLA1</strong>
            <span>Glasgow, UK</span>
          </MenuItem>
          <MenuItem value={2} className={selectClasses.root}>
            <strong className={classes.childMargin}>GLA2</strong>
            <span>Glasgow, UK</span>
          </MenuItem>
          <MenuItem value={3} className={selectClasses.root}>
            <strong className={classes.childMargin}>GLA3</strong>
            <span>Glasgow, UK</span>
          </MenuItem>

          <MenuItem value={13} className={selectClasses.root}>
            <strong>
              <img src="data:image/png;base64,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"></img>
              LAS
            </strong>
            <span>Las Vegas, NV</span>
          </MenuItem>
          <MenuItem value={14} className={selectClasses.root}>
            <strong>
              <img src="data:image/png;base64,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"></img>
              LAX
            </strong>
            <span>Los Angeles, CA</span>
          </MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

import React from "react";
import MatTable from "../../../common/components/Table";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      padding: theme.spacing(2),
    },
    root: {
      "& .MuiListItem-root": {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
      },
    },
    formControlsWrapper: {
      display: "flex",
      alignItems: "center",
    },
    formControl: {
      flex: 1,
      margin: theme.spacing(1),
      "&:first-child": {
        marginLeft: 0,
      },
    },
  })
);

const OrderLookup: React.FunctionComponent = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("10");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <div className={classes.formWrapper}>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.formControlsWrapper}>
            <FormControl
              className={classes.formControl}
              size="small"
              color="secondary"
              variant="outlined"
            >
              <InputLabel id="clients-outlined-label">Clients</InputLabel>
              <Select
                labelId="clients-outlined-label"
                id="clients-outlined"
                placeholder="Clients"
                value={age}
                onChange={handleChange}
                label="Clients"
              >
                <MenuItem value={10}>All Clients</MenuItem>
                <MenuItem value={20}>Client</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              className={classes.formControl}
              size="small"
              defaultValue={10}
              color="secondary"
              variant="outlined"
            >
              <InputLabel id="dc-outlined-label">DC's</InputLabel>
              <Select
                labelId="dc-outlined-label"
                id="dc-outlined"
                value={age}
                onChange={handleChange}
                label="DC's"
              >
                <MenuItem value={10}>All DC's</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              size="small"
              defaultValue={10}
              color="secondary"
              variant="outlined"
            >
              <InputLabel id="carriers-outlined-label">Carriers</InputLabel>
              <Select
                labelId="carriers-outlined-label"
                id="carriers-outlined"
                value={age}
                onChange={handleChange}
                label="Carriers"
              >
                <MenuItem value={10}>All Carriers</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              size="small"
              defaultValue={10}
              color="secondary"
              variant="outlined"
            >
              <InputLabel id="ship-methods-outlined-label">
                Ship Methods
              </InputLabel>
              <Select
                labelId="ship-methods-outlined-label"
                id="ship-methods-outlined"
                value={age}
                onChange={handleChange}
                label="Ship Methods"
              >
                <MenuItem value={10}>All Ship Methods</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="date"
              label="Date Range"
              type="date"
              variant="outlined"
              defaultValue="2017-05-24"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
          >
            Show Results
          </Button>
        </form>
      </div>
      <MatTable />
    </div>
  );
};

export default OrderLookup;
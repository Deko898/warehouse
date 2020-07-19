import React from "react";
import MatTable from "../../../../common/components/Table/Table";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Card, CardContent } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { MOCK_ORDERS } from "../../../../mock/orders.mock";
import useOrderStyles from "../OrdersStyles";
import { useStyles } from "./orderLookup.styles";

const OrderLookup: React.FunctionComponent = () => {
  const classes = useStyles();
  const orderClasses = useOrderStyles();
  const [age, setAge] = React.useState("10");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  const headCells = [
    {
      id: "systemId",
      numeric: false,
      disablePadding: false,
      label: "Sys",
    },
    { id: "orderNumber", numeric: true, disablePadding: false, label: "Order" },
    { id: "dc", numeric: true, disablePadding: false, label: "DC" },
    {
      id: "clientId",
      numeric: true,
      disablePadding: false,
      label: "Client ID",
    },
    { id: "retailer", numeric: true, disablePadding: false, label: "Retailer" },

    { id: "lines", numeric: true, disablePadding: false, label: "lines" },
    { id: "qty", numeric: true, disablePadding: false, label: "Qty" },
    { id: "weigth", numeric: true, disablePadding: false, label: "Weight" },
    {
      id: "shipMethod",
      numeric: true,
      disablePadding: false,
      label: "Ship Method",
    },
    {
      id: "completeBy",
      numeric: true,
      disablePadding: false,
      label: "Complete By",
    },
    { id: "status", numeric: false, disablePadding: false, label: "Status" },
    { id: "action", numeric: false, disablePadding: false, label: "Action" },
  ];
  const columns = [
    {
      id: "systemId",
      isLink: true,
      path: "/orders/details/",
    },
    { id: "orderNumber" },
    { id: "dc" },
    {
      id: "clientId",
    },
    { id: "retailer" },

    { id: "lines" },
    { id: "qty" },
    { id: "weigth" },
    {
      id: "shipMethod",
    },
    {
      id: "completeBy",
    },
    { id: "status" },
    { id: "action" },
  ];

  const orders = MOCK_ORDERS;

  return (
    <Card>
      <CardContent className={orderClasses.root}>
        <div className={classes.formWrapper}>
          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.formControlsWrapper}>
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
        <MatTable
          rows={orders}
          headCells={headCells}
          keyField="systemId"
          columns={columns}
        />
      </CardContent>
    </Card>
  );
};

export default OrderLookup;

import React from "react";
import MatTable from "../../../../common/components/Table/Table";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import { MOCK_ORDERS } from "../../../../mock/orders.mock";
import useOrderStyles from "../OrdersStyles";
import { useStyles } from "./orderLookup.styles";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";

const OrderLookup: React.FunctionComponent = () => {
  const classes = useStyles();
  const orderClasses = useOrderStyles();
  const [carriers, setCarriers] = React.useState("10");
  const [shipMethod, setShipMethod] = React.useState("10");
  const [selectedRange, setSelectedRange] = React.useState(
    `${moment().subtract(6, "days").format("MM/DD/YYYY")} - ${moment().format("MM/DD/YYYY")}`
  );

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

  const datePickerInitialSettings: any = {
    endDate: moment(),
    ranges: {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
      "Last 7 Days": [moment().subtract(6, "days"), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "This Month": [moment().startOf("month"), moment().endOf("month")],
      "Last Month": [
        moment().subtract(1, "month").startOf("month"),
        moment().subtract(1, "month").endOf("month"),
      ],
    },
    startDate: moment().subtract(6, "days"),
  };

  const handleCarriers = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCarriers(event.target.value as string);
  };

  const handleShipMethods = (event: React.ChangeEvent<{ value: unknown }>) => {
    setShipMethod(event.target.value as string);
  };

  const handleApply = (e: any, picker: any) => {
    setSelectedRange(
      `${picker.startDate.format("MM/DD/YYYY")} - ${picker.endDate.format(
        "MM/DD/YYYY"
      )}`
    );
  };

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
                  value={carriers}
                  onChange={handleCarriers}
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
                  value={shipMethod}
                  onChange={handleShipMethods}
                  label="Ship Methods"
                >
                  <MenuItem value={10}>All Ship Methods</MenuItem>
                </Select>
              </FormControl>

              <DateRangePicker
                initialSettings={datePickerInitialSettings}
                onApply={handleApply}
              >
                {/* <input type="text" /> */}
                <div
                  id="reportrange"
                  style={{
                    background: "#fff",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    padding: "5px 10px",
                    flex: 1,
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderColor: "rgba(0, 0, 0, 0.23)",
                  }}
                >
                  <i className="fa fa-calendar" />
                  <span>{selectedRange}</span>
                  <i className="fa fa-caret-down" />
                </div>
              </DateRangePicker>
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
          showCheckbox={true}
          columns={columns}
        />
      </CardContent>
    </Card>
  );
};

export default OrderLookup;

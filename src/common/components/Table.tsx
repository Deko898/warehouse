import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import { Icon } from "@material-ui/core";

interface Data {
  systemId: string;
  orderNumber: string;
  dc: string;
  clientId: string;
  retailer: string;
  lines: number;
  qty: number;
  weigth: number;
  shipMethod: string;
  completeBy: string;
  status: string;
  action: string;
}

function createData(
  systemId: string,
  orderNumber: string,
  dc: string,
  clientId: string,
  retailer: string,
  lines: number,
  qty: number,
  weigth: number,
  shipMethod: string,
  completeBy: string,
  status: string,
  action: string
): Data {
  return {
    systemId,
    orderNumber,
    dc,
    clientId,
    retailer,
    lines,
    qty,
    weigth,
    shipMethod,
    completeBy,
    status,
    action,
  };
}

const rows = [
  createData(
    "1542364",
    "FBA15N1ZDX9T",
    "ALN",
    "CHEETAH",
    "AMZNFBADC",
    50,
    200,
    628,
    "OTHER",
    "Jun 15, 2020",
    "Being Packed",
    "edit"
  ),
  createData(
    "1538817",
    "FBA15N1ZDX9T",
    "ALN",
    "CHEETAH",
    "AMZNFBADC",
    50,
    200,
    628,
    "OTHER",
    "Jun 15, 2020",
    "Being Packed",
    "edit"
  ),
  createData(
    "1537621",
    "FBA15N1ZDX9T",
    "ALN",
    "CHEETAH",
    "AMZNFBADC",
    50,
    200,
    628,
    "OTHER",
    "Jun 15, 2020",
    "Being Packed",
    "edit"
  ),
  createData(
    "1548460",
    "FBA15N1ZDX9T",
    "ALN",
    "CHEETAH",
    "AMZNFBADC",
    50,
    200,
    628,
    "OTHER",
    "Jun 15, 2020",
    "Being Packed",
    "edit"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: HeadCell[] = [
  {
    id: "systemId",
    numeric: false,
    disablePadding: true,
    label: "Sys",
  },
  { id: "orderNumber", numeric: true, disablePadding: false, label: "Order" },
  { id: "dc", numeric: true, disablePadding: false, label: "DC" },
  { id: "clientId", numeric: true, disablePadding: false, label: "Client ID" },
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
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "action", numeric: true, disablePadding: false, label: "Action" },
];

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

export default function MatTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("systemId");
  const [selected, setSelected] = React.useState<any[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.systemId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, systemid: string) => {
    const selectedIndex = selected.indexOf(systemid);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, systemid);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="small"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.systemId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.systemId)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.systemId}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.systemId}
                      </TableCell>
                      <TableCell>
                        {/* <i class="fas fa-file-excel"></i> */}
                        <Icon className="fas fa-file-excel" />
                        {row.orderNumber}
                      </TableCell>
                      <TableCell>{row.dc}</TableCell>
                      <TableCell>{row.clientId}</TableCell>
                      <TableCell>{row.retailer}</TableCell>

                      <TableCell>{row.lines}</TableCell>
                      <TableCell>{row.qty}</TableCell>
                      <TableCell>{row.weigth}</TableCell>
                      <TableCell>{row.shipMethod}</TableCell>
                      <TableCell>{row.completeBy}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.action}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 35 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

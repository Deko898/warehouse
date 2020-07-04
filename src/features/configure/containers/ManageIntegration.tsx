import {
    Route,
    Redirect,
    withRouter,
    RouteComponentProps,
    Switch,
    useRouteMatch,
  } from "react-router-dom";
import React from "react";
import AppBreadcrumbs from "../../../common/components/BreadCrumbs/BreadCrumbs";
import {configureRoutes, availableIntegrations} from '../routes/ConfigureRoutes';
import ComponentTabs from "../../../common/components/ComponentTabs/ComponentTabs";
import { CardContent, Card, Grid } from "@material-ui/core";
import useOrderStyles from "../../orders/containers/OrdersStyles"; 
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

  const ManageIntegration: React.FunctionComponent<RouteComponentProps> = ({
    match,
    location
  }) => {
    const classes = useOrderStyles();
    const {path, url} = useRouteMatch();
    let breadcrumbs = path
    return (
        <>
        <AppBreadcrumbs breadcrumbs={breadcrumbs} />
 

        <Grid container spacing={2}>
          <Grid item >
          <Card style={{width: '200px'}}>
        <CardHeader style={{height: '90px', background: 'red'}}
        avatar={
          <IconButton aria-label="add to favorites">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </IconButton>
        }
        
        title="e c w id"
      />
          <CardActions>
        <Button size="small" color="primary">
          Settings
        </Button>
        <Button size="small" color="primary">
          Disable
        </Button>
      </CardActions>
        </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Card style={{width: '200px'}}>
        <CardHeader style={{height: '90px'}}
        avatar={
          <Avatar aria-label="recipe" >
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
          </Avatar>
        }
        
        title="e c w id"
      />
          <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
        </Card>
          </Grid>
          </Grid>
          <h2>Available Integrations</h2>
        <Card>
        <CardContent className={classes.root}>
          <ComponentTabs
            routes={availableIntegrations}
            showExtraInfo={true}
            withDivider={false}
          />
          <Route exact path={match.path}>
            {<Redirect to={`${match.path}/fulfilment`} />}
          </Route>
          {availableIntegrations.map((route: any) => (
            <Route
              path={`${match.path}${route.path}`}
              key={route.path}
              component={route.component}
            />
          ))}
        </CardContent>
        </Card>
        </>
    );
  };
  
  export default withRouter(ManageIntegration);
import React, { useState } from "react";
import {
  Hidden,
  TextField,
  FormControlLabel,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { useLoginStyles } from "./login.styles";
import { BlueCheckbox } from "../../common/components/BlueCheckbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationLoginSchema } from "../utils/validation";
import { IAppState } from "../../store/app-state.interface";
import { ILoginDto, IUser } from "../../models";
import { connect } from "react-redux";
import { requestLoginAction } from "../../store/modules/auth/actions";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import clsx from "clsx";

interface IProps {
  logIn: Function;
  user: IUser | null;
  isLoading: boolean;
  error: any;
}

const Login: React.FC<IProps> = ({ logIn, isLoading, user, error }) => {
  const classes = useLoginStyles();
  const history = useHistory();

  return (
    <div className={classes.loginWrapper}>
      <Hidden xsDown implementation="css">
      <Carousel
        className={classes.sliderContainer}
        autoPlay
        showIndicators={false}
        showThumbs={false}
        showArrows={false}
        stopOnHover={false}
        showStatus={false}
        infiniteLoop={true}
      >
        <div className={clsx(classes.imgWrapper, classes.slideOne)}></div>
        <div className={clsx(classes.imgWrapper, classes.slideTwo)}></div>
        <div className={clsx(classes.imgWrapper, classes.slideThree)}></div>
        <div className={clsx(classes.imgWrapper, classes.slideFour)}></div>
      </Carousel>
      </Hidden>
      <div className={classes.loginContentContainer}>
        <div className={classes.logoWrapper}></div>

        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          onSubmit={(values) => {
            logIn(values, history);
          }}
          validationSchema={validationLoginSchema}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              dirty,
              isValid,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form className={classes.formWrapper} onSubmit={handleSubmit}>
                <TextField
                  required
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  name="email"
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <TextField
                  required
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  size="small"
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <FormControlLabel
                  control={<BlueCheckbox name="rememberMe" />}
                  id="rememberMe"
                  label="Remember Me"
                  name="rememberMe"
                  onChange={handleChange}
                  value={values.rememberMe}
                />
                {error && <FormHelperText error={true}>{error}</FormHelperText>}
                <ErrorMessage
                  name="invalidRequest"
                  component="div"
                  className="invalid-feedback"
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!isValid || isLoading}
                >
                  Sign me in
                </Button>
              </form>
            );
          }}
        </Formik>
        <div className={classes.formFooter}>
          <p>© All Right Reserved 2020</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authState }: IAppState) => {
  return {
    isLoading: authState.isLoading,
    user: authState.user,
    error: authState.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logIn: (loginDto: ILoginDto, history: any) =>
      dispatch(
        requestLoginAction({
          isLoading: true,
          loginDto,
          callback: () => history.push("/"),
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { useState, useEffect } from "react";
import IconCircle from "../components/IconCircle";
import jio_logo from "../assets/images/jio-logo.png";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import routePath from "../shared/constants/RoutePath";

const ACCOUNT_TYPE = "jcms_customer";
const Home = () => {
    return (
        <div className="container-login">
            <div className="row h-100 m-0">
                <div className="login-box my-auto">
                    <div className="card align-items-center">
                        <div className="login-box-icon text-center mx-auto">
                            <IconCircle
                                size={"calc(2vw + 6.48rem)"}
                                color={"#FCB813"}
                                fontsize={"calc(3vw + 5rem)"}
                                image={jio_logo}
                            />
                        </div>
                        <h1 className="text-center gray-dark font-medium mar-l1 login-main-title">
                            Information Utility
                        </h1>
                        <h3 className="gray-dark font-light text-center welcome-text">
                            Choose the category
                        </h3>

                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{ height: "30vh" }}
                        >
                            <Grid item>
                                <Link to={routePath.PESTS_AND_DISEASES}>
                                    <Button
                                        style={{
                                            margin: "10px",
                                            backgroundColor: "#FCB813",
                                        }}
                                        padding={"0.5rem 5rem"}
                                        variant="contained"
                                    >
                                        Pests and Diseases
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link>
                                    <Button
                                        style={{ margin: "10px" }}
                                        color={"#FCB813"}
                                        padding={"0.5rem 5rem"}
                                        variant="contained"
                                    >
                                        Plant Data
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;

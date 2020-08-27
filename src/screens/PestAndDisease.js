import React from "react";
import { Grid, Typography, Fab, Button, Divider } from "@material-ui/core";
import routePath from "../shared/constants/RoutePath";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const style = {
    main_container: {
        minHeight: "100vh",
    },
    wrapper: {
        width: "800px",
        marginTop: "-220px",
        zIndex: "1000",
        marginBottom: "100px",
    },
    form_container: {
        backgroundColor: "#fff",
    },
};

export default function InsertData() {
    return (
        <>
            <Grid
                style={{
                    backgroundColor: "purple",
                    height: "250px",
                    position: "relative",
                    top: "0",
                    left: "0",
                }}
            ></Grid>
            <Grid
                container
                justify="flex-start"
                alignItems="center"
                style={style.main_container}
                direction="column"
            >
                <Grid
                    container
                    justify="flex-start"
                    alignItems="left"
                    style={style.wrapper}
                >
                    <Grid container>
                        <Fab color="primary" href="\">
                            <ArrowBackIcon />
                        </Fab>
                    </Grid>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        spacing={6}
                        style={style.form_container}
                    >
                        <Grid item container>
                            <Typography align="left" variant="h2" container>
                                Pests and Diseases
                            </Typography>
                            <Divider />
                        </Grid>

                        <Grid item xs={12} justify="flex-start" container>
                            <Link to={routePath.INSERT}>
                                <Button variant="contained" color="primary">
                                    Insert
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} justify="flex-start" container>
                            <Link to={routePath.DISPLAY}>
                                <Button variant="contained" color="primary">
                                    View
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

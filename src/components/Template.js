import React from "react";
import { Grid, Fab, Typography, Divider } from "@material-ui/core";
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

export default function Template() {
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
                justify="center"
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
                                Insert Data
                            </Typography>
                            <Divider />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

import React, { useState } from "react";
import {
    Grid,
    TextField,
    Typography,
    Fab,
    FormControl,
    InputLabel,
    Select,
    Button,
    Divider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import routePath from "../shared/constants/RoutePath";
import { create } from "../shared/constants/pests_and_diseases";
const style = {
    main_container: {
        minHeight: "Calc (100vh - 250px)",
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

export default function DisplayData() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [season, setSeason] = useState("");
    const [time, setTime] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [measures, setMeasures] = useState("");
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
                        <Fab
                            color="primary"
                            href={routePath.PESTS_AND_DISEASES}
                        >
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
                                Display Data
                            </Typography>
                            <Divider />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

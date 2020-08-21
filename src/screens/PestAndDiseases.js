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
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import pests_and_diseases from "../shared/constants/pests_and_disease.json";
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

export default function PestAndDiseases() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [season, setSeason] = useState("");
    const [time, setTime] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [measures, setMeasures] = useState("");
    let data = pests_and_diseases;
    data = {};
    console.log(data);
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
                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="age-native-simple">
                                    Type
                                </InputLabel>
                                <Select
                                    native
                                    value={type}
                                    onChange={(e) => {
                                        setType(e.target.value);
                                        console.log(type);
                                    }}
                                >
                                    <option disabled />
                                    <option value="pest">Pest</option>
                                    <option value="disease">Disease</option>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="standard-basic"
                                label="Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl>
                                <InputLabel htmlFor="age-native-simple">
                                    Season
                                </InputLabel>
                                <Select
                                    native
                                    value={season}
                                    onChange={(e) => {
                                        setSeason(e.target.value);
                                        console.log(season);
                                    }}
                                >
                                    <option disabled />
                                    <option value="Kharif">Kharif</option>
                                    <option value="Rabi">Rabi</option>
                                    <option value="Kharif & Rabi">
                                        Kharif &amp; Rabi
                                    </option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="standard-basic"
                                label="Time/Stage of Occurence"
                                value={time}
                                onChange={(e) => {
                                    setTime(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item container direction="column" xs={12}>
                            <Typography align="left">Symptomps</Typography>
                            <CKEditor
                                height={100}
                                config={{
                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",
                                        "numberedList",
                                        "bulletedList",
                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }}
                                style={{ width: "80%", height: "200px" }}
                                editor={ClassicEditor}
                                onInit={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log(
                                        "Editor is ready to use!",
                                        editor
                                    );
                                    editor.editing.view.change((writer) => {
                                        writer.setStyle(
                                            "width",
                                            "100%",
                                            editor.editing.view.document.getRoot()
                                        );
                                    });

                                    editor.editing.view.change((writer) => {
                                        writer.setStyle(
                                            "height",
                                            "250px",
                                            editor.editing.view.document.getRoot()
                                        );
                                    });
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setSymptoms(data);
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log("Blur.", editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log("Focus.", editor);
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            xs={12}
                            style={{ overflowX: "auto" }}
                        >
                            <Typography align="left">
                                Control Measures
                            </Typography>
                            <CKEditor
                                height={100}
                                config={{
                                    toolbar: [
                                        "heading",
                                        "|",
                                        "bold",
                                        "italic",

                                        "numberedList",
                                        "bulletedList",

                                        "|",
                                        "undo",
                                        "redo",
                                    ],
                                }}
                                style={{ width: "80%", height: "200px" }}
                                editor={ClassicEditor}
                                onInit={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log(
                                        "Editor is ready to use!",
                                        editor
                                    );
                                    editor.editing.view.change((writer) => {
                                        writer.setStyle(
                                            "width",
                                            "100%",
                                            editor.editing.view.document.getRoot()
                                        );
                                    });

                                    editor.editing.view.change((writer) => {
                                        writer.setStyle(
                                            "height",
                                            "250px",
                                            editor.editing.view.document.getRoot()
                                        );
                                    });
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setMeasures(data);
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log("Blur.", editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log("Focus.", editor);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} justify="flex-start" container>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    const value = {
                                        name,
                                        season,
                                        time,
                                        symptoms,
                                        measures,
                                    };
                                    let data = { pest: [] };
                                    data["pest"].push(value);
                                    console.log(data);
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

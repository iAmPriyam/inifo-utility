// import pests_and_disease from "./pests_and_disease.json";
const fs = require("fs");

const create = (data) => {
    fs.writeFileSync("./data.json", String(data), (err) => {
        if (err) throw err;
        console.log("file written");
    });
};

module.exports = { create };

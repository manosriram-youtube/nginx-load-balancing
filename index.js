const express = require("express");
const app = express();
const PORT = process.env.PORT;

if (!PORT) {
    throw new Error("PORT variable not defined");
}

app.get("/", (req, res) => {
    const data = `App running at PORT ${PORT}`;
    return res.send(data);
});

app.listen(PORT, "0.0.0.0", () => console.log(`Server at ${PORT}`));

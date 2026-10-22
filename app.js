const express = require("express");

const app = express();

app.use(express.json());

// Routes
app.use("/Loyalty", require("./routes/getCustomerDetails"));
app.use("/Loyalty", require("./routes/redeem"));

const PORT = 3001;

app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("Cashperq Mock Server Started");
    console.log("Listening on port " + PORT);
    console.log("--------------------------------");
});
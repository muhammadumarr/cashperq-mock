const express = require("express");
const router = express.Router();

router.post("/v1/redeem", (req, res) => {
    console.log("--------------------------------");
    console.log("Incoming Redemption Request");
    console.log("--------------------------------");

    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    return res.status(200).json({
        status: "SUCCESS",
        message: "Request received and parsed successfully",
        receivedBody: req.body
    });
});

module.exports = router;
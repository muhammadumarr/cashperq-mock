const express = require("express");
const router = express.Router();

router.post("/v1/redeem", (req, res) => {
    console.log("--------------------------------");
    console.log("Incoming Redemption Request");
    console.log("--------------------------------");

    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    const institutionMnemonic = req.header("INSTITUTION-MNEMONIC");
    const authorization = req.header("Authorization");

    const {
        tenantId,
        customerId,
        txnCategoryId,
        loyaltyType,
        txnAmount,
        redeemAmount,
        currency,
        merchantId,
        sourceChannel,
        sourceTxnRefNo,
        instrumentType,
        instrumentNumber,
        txnDateTime
    } = req.body;

    if (!authorization) {

        return res.status(401).json({
            responseCode: "401",
            status: "UNAUTHORIZED"
        });

    }

    if (!institutionMnemonic) {

        return res.status(400).json({
            responseCode: "400",
            status: "FAILED",
            message: "Missing Institution Mnemonic"
        });

    }
    
    if (
        !tenantId ||
        !customerId ||
        !txnCategoryId ||
        !loyaltyType ||
        txnAmount == null ||
        redeemAmount == null ||
        !currency ||
        !merchantId ||
        !sourceChannel ||
        !sourceTxnRefNo ||
        !txnDateTime
    ) {

        return res.status(400).json({
            responseCode: "400",
            status: "FAILED",
            message: "Invalid Request"
        });

    }

    return res.status(200).json({
        status: "SUCCESS",
        message: "Request received and parsed successfully",
        receivedBody: req.body
    });
    
});

module.exports = router;
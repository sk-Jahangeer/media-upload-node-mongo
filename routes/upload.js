const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

router.post("/upload", upload.single("file"), async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");
    const imgUrl = `${req.protocol}://${req.get("host")}/file/${req.file.filename}`;
    return res.json(imgUrl);
});

module.exports = router;

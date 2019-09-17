const express = require('express');
const router = express.Router();

// @route   POST api/auth
// @desc    Register
// @access  Public
router.post("/", (req, res) => {
    res.send("Register in user");
});

module.exports = router;
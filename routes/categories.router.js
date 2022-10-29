const express = require('express');

const router = express.Router()

router.get("/", (req, res) => {
    res.json([
    // Diferentes tipos de seminarios para hacer buen uso de las finanzas en los diferentes aspectos en la vida
        {
            Nombre: " Seminario de finanzas hogar ",
        },
        {
            Nombre: "Seminario de finanzas empresa",
        },
    ]
    )
})

module.exports = router
const express = require('express')

const router = express.Router()

app.get("/seminarios", (req, res) => {
    res.json([
    // Diferentes tipos de seminarios para hacer buen uso de las finanzas en los diferentes aspectos en la vida
        {
            Nombre: " Seminario sobre cómo saber manejar bien tus finanzas en el hogar ",
            Tipo: "Hogar",
            Duración: "2:30 horas",
        },
        {
            Nombre: " Seminario de como gestionar tus ahorros ",
            Tipo: "Hogar",
            Duración: "2 horas",
        },
        {
            Name: "Seminario para evitar los gastos hormigas ",
            Tipo : "Hogar",
            Duración:"40 minutos",
        },
        {
            Name: "Seminario sobre cómo disminuir los costos en tu negocio ",
            Tipo : "Empresa",
            Duración:"2:55 horas",
        },
        {
            Nombre: " Seminario de cómo aplicar correctamente el diagnóstico financiero a tu empresa ",
            Tipo: "Empresa",
            Duración: "3 horas",
        },
        {
            Nombre: " Seminario para la declaración de renta ",
            Tipo: "Empresa",
            Duración: "1:45 horas",
        },

        {
            Nombre: " Seminario de cómo aplicar correctamente el diagnóstico financiero a tu empresa ",
            Tipo: "Empresa",
            Duración: "1:25 horas",
        },
        
    ]
    )
})

module.exports = router
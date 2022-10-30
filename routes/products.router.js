const express = require('express')

const router = express.Router() 

router.get("/", (req, res) => {
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
            Nombre: "Seminario para evitar los gastos hormigas ",
            Tipo : "Hogar",
            Duración:"40 minutos",
        },
        {   Nombre: " Seminario sobre cómo utilizar de la mejor manera tu tarjeta crédito y débito ",
            Tipo: "Hogar",
            Duración: "2:30 horas",
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
            Nombre: " Seminario de por qué es importante realizar el análisis financiero en la empresa ",
            Tipo: "Empresa",
            Duración: "1:25 horas",
        },
  
    ])
    
})

module.exports = router

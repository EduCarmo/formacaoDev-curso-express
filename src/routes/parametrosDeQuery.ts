import { Router } from "express";

const router = Router();


// /cores/:id -> é um parametro de rota. O que eu quero acesasr
// /cores?ordenaPor=nome&case=upper -> é um parametro de query
router.get("/cores", (req, res) => {
    let cores = ["azul", "vermelho", "verde", "amarelo"]
    // console.log(req.query)

    if (req.query.case === "upper") {
        cores = cores.map(cor => cor.toUpperCase())
    } else if (req.query.case === "lower") {
        cores = cores.map(cor => cor.toLowerCase())
    }

    if (req.query.punct) {
        cores = cores.map(cor => `${cor}${req.query.punct}`)
    }

    if (req.query.filtro) {
        cores = cores.filter(cor => cor.toLocaleLowerCase().includes(`${req.query.filtro}`))
    }

    res.status(200).send(cores)
})

export default router
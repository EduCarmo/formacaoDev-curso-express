import path from "path"
import { Router } from "express";

const router = Router();

router.get("/variavel", (req, res) => {
    let v = "Adeus"
    res.send(v)
})

router.get("/variavelNumerica", (req, res) => {
    let v = 1758
    res.json(v)
})

router.get("/objeto", (req, res) => {
    const obj = { nome: "Maria", idade: 54 }
    res.send(obj) // obj será enviado como JSON
})

router.get("/arrayDeObjetos", (req, res) => {
    const objs = [
        { modelo: "Gol", ano: 1998 },
        { modelo: "Palio", ano: 1999 },
        { modelo: "Uno", ano: 2000 }
    ]
    res.send(objs)
})


router.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "pagina.html"))
})

router.get("/pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "assets", "arquivo.pdf"))
})

export default router
import express from "express";
import rotasBasico from "./routes/basico";
import rotasDiferentesRetornos from "./routes/diferentesRetornos";
import rotasAninhadas from "./routes/rotasAninhadas";
import rotasStatus from "./routes/status";
import rotasParametrosDeRotas from "./routes/parametrosDeRotas";
import rotasParametrosDeQuery from "./routes/parametrosDeQuery";
import rotasMetodos from "./routes/metodos";

const app = express();
const porta = 8080;


//middleware
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next()
// })

//middleware para leituras do body para requisição
app.use(express.urlencoded({extended: true}))


app.use(rotasBasico)
app.use(rotasDiferentesRetornos)
app.use("/protudos", rotasAninhadas)
app.use("/status", rotasStatus)
app.use("/parametrosDeRota",rotasParametrosDeRotas)
app.use("/parametrosDeQuery", rotasParametrosDeQuery)
app.use("/metodos", rotasMetodos)


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})
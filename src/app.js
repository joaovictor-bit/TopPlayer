import express from "express"
import cors from "cors"
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.json({msg: "henry fiotão"})
})

app.use("/usuarios",usuarioRoutes)


export default app
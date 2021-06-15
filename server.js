const path = require("path")
const express = require("express")
const PORT = process.env.PORT || 1234

const app = express()

app.use(express.static("build"))

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "build/index.html"))
})
app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT))

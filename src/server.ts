import app from './app'

const port = process.env.SERVER_PORT || 8888

const server = app.listen(port, ()=> process.stdout.write(`Server running on port: ${port}`))

export default server

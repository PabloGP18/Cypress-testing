const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000

const appPath = path.join(__dirname, '..', 'app')

// Serve static files from the 'app' folder
app.use(express.static(appPath))

// Define the catch-all route
app.get('*', (req, res) => {
  // Get the requested path
  const requestedPath = req.path

  // Map the requested path to the corresponding HTML file
  const filePath = path.join(appPath, requestedPath + '.html')

  // Serve the HTML file if it exists, otherwise return a 404 error
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('Page not found')
    }
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

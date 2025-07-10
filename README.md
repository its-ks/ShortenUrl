<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: auto;
      padding: 30px;
      line-height: 1.6;
      background: #f8f8f8;
      color: #333;
    }
    h1, h2, h3 {
      color: #1a1a1a;
    }
    code {
      background-color: #eee;
      padding: 2px 6px;
      border-radius: 4px;
    }
    pre {
      background: #eee;
      padding: 10px;
      overflow-x: auto;
      border-left: 4px solid #2196f3;
    }
    .badge {
      display: inline-block;
      background: #007bff;
      color: white;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 12px;
      margin-right: 5px;
    }
  </style>
</head>
<body>

  <h1>🔗 URL Shortener</h1>
  <p><strong>A simple and efficient URL shortening API built with Node.js, Express, and MongoDB.</strong></p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Shortens long URLs using unique short codes</li>
    <li>Stores URLs in MongoDB with expiration date</li>
    <li>Tracks click count on each short URL</li>
    <li>Redirects to original long URL via short code</li>
    <li>Includes expiration check logic (7 days default)</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>
  <span class="badge">Node.js</span>
  <span class="badge">Express.js</span>
  <span class="badge">MongoDB</span>
  <span class="badge">Mongoose</span>
  <span class="badge">Nanoid</span>
  <span class="badge">Postman</span>

  <h2>📁 Project Structure</h2>
  <pre>
/Models
  └── urlschema.js
/Routes
  └── routes.js
.env
server.js
package.json
  </pre>

  <h2>📦 Installation</h2>
  <pre>
# Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
npm install

# Set up .env
BASE_URL=http://localhost:5000
MONGODB_URI=mongodb+srv://&lt;your-connection-string&gt;

# Start the server
npm start
  </pre>

  <h2>📨 API Endpoints</h2>

  <h3>1. POST /shorten</h3>
  <p>Creates a short URL for a given long URL.</p>
  <pre>
POST http://localhost:5000/shorten
Content-Type: application/json

{
  "url": "https://www.example.com/very/long/url"
}
  </pre>
  <p><strong>Response:</strong></p>
  <pre>
{
  "shortUrl": "http://localhost:5000/abc123",
  "clicks": 0
}
  </pre>

  <h3>2. GET /:code</h3>
  <p>Redirects to the original long URL if the short code exists and is not expired.</p>
  <pre>
GET http://localhost:5000/abc123
  </pre>

  <h2>📌 Example</h2>
  <p>Use Postman to test:</p>
  <ul>
    <li>POST http://localhost:5000/shorten</li>
    <li>GET http://localhost:5000/UvJ2Da</li>
  </ul>

  <h2>🧪 Sample Response Document</h2>
  <pre>
{
  "longUrl": "https://github.com/its-ks/url-shortener",
  "short_code": "UI98Pd",
  "created": "2025-07-09T11:21:45.512Z",
  "expired": "2025-07-16T11:21:45.512Z",
  "clickCount": 1
}
  </pre>

  <h2>📷 Screenshots (optional)</h2>
  <ul>
    <li><strong>Postman POST request:</strong> shorten URL</li>
    <li><strong>GET request:</strong> redirection and count increase</li>
  </ul>

  <h2>📄 License</h2>
  <p>This project is licensed under the MIT License.</p>

</body>
</html>

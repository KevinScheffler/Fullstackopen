```mermaid
sequenceDiagram
participant Browser
participant Server
Browser-->>Server: HTTP GET request https://studies.cs.helsinki.fi/exampleapp/spa
Server-->>Browser: sends text/html
Browser-->>Server: HTTP GET request https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Browser: sends text/css
Browser-->>Server: HTTP GET request https://studies.cs.helsinki.fi/exampleapp/spa.js
Server-->>Browser: sends application/javascript
note over Browser: Browser executes spa.js<br/>and requests data.json from server
Browser-->>Server: HTTP GET request https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Browser: sends application/json
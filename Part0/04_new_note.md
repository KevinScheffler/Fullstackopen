```mermaid
sequenceDiagram
note over Client: User enters input data and clicks save button.
note over Client: The Client will then send the user data to the server.
participant Client
participant Server
note over Server: The Server creates a new object with the note data attached.<br/>The Server then adds the new object to the notes array.
Client-->>Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server-->>Client: HTTP Status code 302, URL Redirect to /notes
Client-->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server-->>Client: text/html file
Client-->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
Server-->>Client: text/css file
Client-->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server-->>Client: application/javascript file
Client-->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->>Client: application/json file

```mermaid
sequenceDiagram
note over Browser: Type text in input field and click save button.
note over Browser: Request Payload:<br/> {content: "new note"  date: "2024-06-08T13:47:42.522Z"}
participant Browser
participant Server
Browser-->>Server: HTTP POST request https://studies.cs.helsinki.fi/exampleapp/new_note_spa
note over Server: Server adds the payload object to<br/> the notes array and sends JSON<br/> to browser
Server-->>Browser: HTTP Status Code 201 Created
Server-->>Browser: Response: {"message":"note created"}


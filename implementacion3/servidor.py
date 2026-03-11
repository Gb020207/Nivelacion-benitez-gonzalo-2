import http.server
import socketserver

PORT = 5000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Servidor corriendo en http://localhost:5000")
    httpd.serve_forever()
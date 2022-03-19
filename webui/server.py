import http.server
import socketserver
import webbrowser

IP = "192.168.1.127"
PORT = 8000
URL = "http://" + IP + ":" + str(PORT)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer((IP, PORT), Handler) as httpd:
    print(f"serving on {URL}")
    webbrowser.open(URL)
    httpd.serve_forever()


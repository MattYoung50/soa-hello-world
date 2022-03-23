import http.server
import socketserver
import webbrowser

IP = "127.0.0.1"
PORT = 8000
URL = "http://" + IP + ":" + str(PORT)

with socketserver.TCPServer((IP, PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    print(f"serving on {URL}")
    webbrowser.open(URL)
    httpd.serve_forever()


import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';


const server = createServer((req, res) => {
   const {url, method} = req;
   console.log('url',url)
   console.log('method',method)
  switch (url) {
    case '/about':
        switch (method) {
            case 'GET':
                const htmlFile = readFileSync('./src/index.html','utf-8')
                res.end(htmlFile)
                return;

            case 'DELETE':
                res.end("delete in about")
                return
        }
        return;
    case '/video':
        switch (method) {
            case 'GET':
                res.end("get in video")
                return

            case 'DELETE':
                res.end("delete in video")
                return
        }
        case '/index.css':
            const cssFile = readFileSync('./src/index.css', 'utf-8')
            res.end(cssFile)
            return
    return
  }
});


server.listen(4545, () => {
    console.log("server listing on port 4545")
})

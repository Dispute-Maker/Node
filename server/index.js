const http = require("http");
const fs = require("fs");
const url = require("url");
const myServe = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  // console.log('new request')
  const log = `${Date.now()} : ${req.url} : New Request Recived\n`;
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Hello this is a HOMEPAGE");
        break;
      case "/about":
        const myname = myUrl.query.myname;
        res.end(`Hi, ${myname}`);
        break;
      case "/contact":
        res.end("my contacts are 345342543");
        break;
      default:
        res.end("error 404");
    }
  });
});
myServe.listen(5000, () => console.log("Server Started"));

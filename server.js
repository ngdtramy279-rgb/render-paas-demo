const express = require("express");

const app = express();

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Render PaaS Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          text-align: center;
          padding-top: 100px;
        }

        .box {
          background: rgba(255,255,255,0.15);
          padding: 40px;
          margin: auto;
          max-width: 600px;
          border-radius: 20px;
        }

        h1 {
          font-size: 40px;
        }

        p {
          font-size: 20px;
        }
      </style>
    </head>

    <body>
      <div class="box">
        <h1>☁️ Xin chào!</h1>

        <p>
          Đây là ứng dụng được triển khai trên Render.
        </p>

        <p>
          <strong>Mô hình điện toán đám mây: PaaS</strong>
        </p>

        <p>
          Render cung cấp môi trường để triển khai và chạy ứng dụng.
        </p>

        <p>
          Sinh viên: Nguyễn Đặng Trà My
        </p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

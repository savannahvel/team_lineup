const fs = require('fs');

module.exports = function generateHtml(data) {
    let html = `
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>Team Roster</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
        integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    </head>

    <body>
    <main class="container-fluid">
       <div class="d-flex justify-content-center mt-5">
                    <h1>Meet the Team</h1>
            </div>
            <div class="row" style="max-width: 1000px; margin: 0 auto;>
    `;
    for (const key in data) {
        if (data[key].role === 'Manager') {
            html += `
            <div id="employee" class="d-flex justify-content-center col-lg-4 p-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top border-radius-5" src="https://loremflickr.com/g/320/240/boy,girl/all" alt="Profile Picture">
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <h6 class="card-subtitle mb-3">${data[key].role}</h6>
                        <p class="card-text mb-2">Employee ID: ${data[key].id}</p>
                        <p class="card-text mb-2">Office Number: ${data[key].officeNumber}</p>
                        <a href="mailto: ${data[key].email}" class="card-link">Email</a>
                    </div>
                </div>
            </div>
            `
        }
        else if (data[key].role === 'Engineer') {
            html += `
            <div id="employee" class="d-flex justify-content-center col-lg-4 p-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top border-radius-5" src="https://loremflickr.com/g/320/240/men, women/all" alt="Profile Picture">
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <h6 class="card-subtitle mb-3">${data[key].role}</h6>
                        <p class="card-text mb-2">Employee ID: ${data[key].id}</p>
                        <a href="https://github.com/${data[key].github}" class="card-link">Github: ${data[key].github}</a></br>
                        <a href="mailto: ${data[key].email}" class="card-link">Email</a> 
                    </div>
                </div>
            </div>
            `
        }
        else {
            html += `
            <div id="employee" class="d-flex justify-content-center col-lg-4 p-4">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top border-radius-5" src="https://loremflickr.com/g/320/240/people/all" alt="Profile Picture">
                    <div class="card-body">
                        <h5 class="card-title">${data[key].name}</h5>
                        <h6 class="card-subtitle mb-3">${data[key].role}</h6>
                        <p class="card-text mb-2">Employee ID: ${data[key].id}</p>
                        <p class="card-text mb-2">School: ${data[key].school}</p>
                        <a href="mailto: ${data[key].email}" class="card-link">Email</a>
                    </div>
                </div>
            </div>
            `
        }
    }
    const closingHtml = `
            </div>
        </main>
    </body>
    </html>
    `
    html += closingHtml;

    fs.writeFile('./dist/index.html', html, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Webpage was generated successfully. Launch index.html to view.')
        })    
}
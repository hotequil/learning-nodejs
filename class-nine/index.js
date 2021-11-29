const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const urlSend = '/send-file';

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    if(request.url === urlSend){
        const form = new formidable.IncomingForm();

        form.parse(request, (error, fields, files) => {
            const { file } = files;
            const oldPath = file.filepath;
            const newPath = `/home/hotequil/git/nodejs/learning-nodejs/class-nine/${file.originalFilename}`;

            fs.rename(oldPath, newPath, errorRename => {
                if(errorRename) throw errorRename;

                response.write('<span>Upload success!</span> <br> <a href="/">Back</a>');
                response.end();
            });
        });
    } else{
        response.write(`
            <form action="${urlSend}" method="POST" enctype="multipart/form-data">
                <input type="file" name="file">
                <input type="submit" value="Send">
            </form>
        `);

        response.end();
    }
});

server.listen(4000, () => console.log('Server is running'));

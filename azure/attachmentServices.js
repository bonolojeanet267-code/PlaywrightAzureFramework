const azureClient = require('./azureClient');

class AttachmentService {

    async upload(runId, resultId, filePath) {

        console.log(

            `Uploading ${filePath}`

        );

    }

}

module.exports = new AttachmentService();
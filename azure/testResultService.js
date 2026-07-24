const azureClient = require('./azureClient');

class TestResultService {

    async updateResult(runId, testCaseId, outcome) {

        console.log(

            `Updating Test Case ${testCaseId} -> ${outcome}`

        );

    }

}

module.exports = new TestResultService();
require('dotenv').config();

module.exports = {

    organization: process.env.AZURE_ORGANIZATION,

    project: process.env.AZURE_PROJECT,

    testPlanId: process.env.AZURE_TEST_PLAN,

    testSuiteId: process.env.AZURE_TEST_SUITE,

    personalAccessToken: process.env.AZURE_PAT

};
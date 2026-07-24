class AzureReporter {

    onBegin(config, suite) {

        console.log('=================================');
        console.log('Starting Playwright Execution...');
        console.log(`Total Tests: ${suite.allTests().length}`);
        console.log('=================================');

    }

    async onTestEnd(test, result) {

        console.log('---------------------------------');
        console.log(`Test: ${test.title}`);
        console.log(`Status: ${result.status}`);

        const annotation = test.annotations.find(
            annotation => annotation.type === 'AzureTestCase'
        );

        if (annotation) {

            const azureTestCaseId = annotation.description;

            const azureStatus =
                result.status === 'passed'
                    ? 'Passed'
                    : 'Failed';

            console.log(`Azure Test Case: ${azureTestCaseId}`);
            console.log(`Azure Status: ${azureStatus}`);

            // Next we'll call Azure APIs here
            // await testRunService.updateResult(...);

        }

        console.log('---------------------------------');

    }

    onEnd() {

        console.log('=================================');
        console.log('Execution Finished');
        console.log('=================================');

    }

}

module.exports = AzureReporter;
class AzureReporter {

    onBegin(config, suite) {

        console.log('Starting Playwright Execution...');
        console.log(`Total Tests: ${suite.allTests().length}`);

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

        }

        console.log('---------------------------------');

    }

    onEnd() {

        console.log('Execution Finished');

    }

}

module.exports = AzureReporter;
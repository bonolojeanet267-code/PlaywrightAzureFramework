// @ts-check

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 60 * 1000,

  expect: {
    timeout: 10000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [

      ['list'],

      ['html', {
          outputFolder: 'playwright-report',
          open: 'never'
      }],

      ['./reporters/AzureReporter.js']

  ],

  use: {

    baseURL: 'https://www.saucedemo.com',

    browserName: 'chromium',

    headless: false,

    viewport: {
      width: 1920,
      height: 1080
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    video: 'on',

    actionTimeout: 10000,

    navigationTimeout: 30000

  },

  projects: [

    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'Firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'WebKit',
      use: {
        ...devices['Desktop Safari']
      }
    }

  ]

});
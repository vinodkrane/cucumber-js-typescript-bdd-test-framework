const reporter = require('cucumber-html-reporter')

const options = {
 // themes : either (bootstrap, heirarchy, foundation, simple)
 theme: 'bootstrap',
 jsonFile: 'reports/cucumber_report.json',
 output: 'reports/cucumber_report.html',
 reportSuiteScenarios: true,
 launchReport: false,
}

reporter.generate(options)
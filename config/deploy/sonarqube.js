import { scan } from "sonarqube-scanner";

scan(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.login": "admin",
      "sonar.password": "www12345",
      "sonar.projectName": "portal-imkas",
      "sonar.projectDescription": "Just for demo...",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.sources": "./src",
      "sonar.test.inclusions":
        "**/*.test.tsx,**/*.test.ts,**/*.test.jsx,**/*.test.js",
      "sonar.exclusions": "**/*.test.tsx,**/*.test.jsx",
      "sonar.tests": "./src",
      "sonar.testExecutionReportPaths": "test-report.xml",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => process.exit()
);

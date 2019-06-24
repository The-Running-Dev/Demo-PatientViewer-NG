## Patient Viewer

A Responsive UI demo application built with Angular 8.

Demo: https://patientviewer-ng.azurewebsites.net

## Running Locally

### Requirements
- NodeJS (https://nodejs.org/en/download/current/)

### Steps
In PowerShell or Bash

1. Clone the repository:

    ```git clone https://github.com/The-Running-Dev/Demo-PatientViewer-NG```

2. Install the dependencies:

    ```npm intstall```

3. Run the application:

    ```npm run start```
4. Access the applications:

    The Angular UI will open a browser to http://localhost:4200

## Running Tests
In PowerShell or Bash

1. Complete the steps above in "Running Locally"
3. Run the tests:

    ```npm run test```

## Project Structure and Rational

In development mode, data for the application is provided though the In-Memory-Web-API service implemented in the PatientInMemoryService. In producton, the data comes from a MVC/WebAPI application published to https://patientviewer.azurewebsites.net. The code for the MVC/WebAPI projects resides at https://github.com/The-Running-Dev/Demo-PatientViewer-NET.

### Deployment
The application is setup to deploy through an ```Azure Pipeline``` every time there is code committed to this GitHub repository.

#### Technologies
* Angular 8 (https://angular.io) for demo client consumer
* TypScript (http://www.typescriptlang.org/) for strongly typed JavaScript

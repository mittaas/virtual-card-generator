The aim of this SDK is to demonstrate the flow of Virtual Card functionality on web platform. The code utilizes openbanking-java-sdk integrated with Open Banking APIs (the details of which can be found here https://github.com/HashApithon/openbanking-java-sdk#readme).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Once the localhost is generated, the flow will be taken through the card generation using the Open Banking PISP flow.

Used GitBash to run code through commandline.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:4001](http://localhost:4001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Note: 
For Windows, update below details in file 'package.json':
"start": "PORT=4001 && react-scripts start"

For MAC, update below details in file 'package.json':
"start": "PORT=4001 react-scripts start"

In case the error occurred during running npm commands, use GitBash to execute following:
Step 1: npm install react-scripts 
Step 2: npm i dotenv
Step 3: npm start

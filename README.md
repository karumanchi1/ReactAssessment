The Project:

 This project is a React application that simulates a retailer's rewards program. The rewards program awards points to customers based on their purchases, and the number of points awarded depends on the amount spent in each transaction. The application takes in a record of every transaction during a three-month period and calculates the reward points earned for each customer per month and total. The application can be used to record new transactions and the reward points are calculated based on the added transaction. 

 This project demonstrates the use of functional components, custom hooks and the Context API to share state between components. Additionally, the project includes unit tests for the components and hooks to ensure the functionality of the application.

Project Setup:

 1. Clone the repository to your local machine using Git.
 2. Once the repository is cloned, navigate to the project directory in your terminal or command prompt.
 3. Install the project dependencies by running the command npm install.
 4. After the dependencies are installed, you can run the project by running npm start
 5. This will start the development server and open the project in your default web browser. If the project does not open automatically in your web browser, navigate to http://localhost:3000 to view the application.
 6. Run the tests for the project by running the command npm test.

The Application:

Check out the application here: https://react-assessment-karumanchi1.vercel.app/


How to use the App:

 This is a Single Page Applicaton with two main components on the home screen. Once the page is loaded, the Rewards section of the page fetches the total reward points by the customer with customer id 1. This is done by simulating making an API call. In reality, the loadig calls a custom hook that calculates the total rewaard points. However, the simulation of the API Call is done by returning a Promise that resolves after a timeout.  you can use Add Transaction button to record new transactions. This will add new transaction to the data set. Adding new transactions recalculates the total reward points of the customers.

Data set: 

 The data set used is an Array of Objects, each carrying the details of transactions made by users in the last three months. For the sake of simplicity, the application holds the data of only 5 customers. 
 This is a sample transaction of the data set used :
      {
     customerId: "1",
     name: "Michael Scott",
     transactionDate: "2022-01-01",
     amount: 120,
     key: "2022-01-01T00:53:17.161Z",
   },


Libraries used: 

 No external Libraries are used to build this project. 


Testing: 

 Added a total of 5 test suites. The tests mainly test the core functionality of the application including calculation of reward points and recording of new transaction. Even though the test coverage is not upto the suggested level of 80%, it covers the working of both the functionalities.

Scope and Imporvements:

 The scope of the project is very limited as the assessment is only to calculate the reward points by simulating making API Requests. However, to increase interactiveness of the application, "add transaction" functionality is added. The scope can be further improved by hosting the data on a real DataBase and fetching it through backend by making API Calls. further, a functionality to register new customers can also be added.




# Budget Manager

Budget App is an application for tracking your own finances, specifically money expenses and income. The main purpose of the application is to make it easier to track your own finances.

Team: *Anna Belegova , Viktoriia Ilienko, Vladyslav Hordiienko*.

Link to full documentation: https://docs.google.com/document/d/1ZNRClOIRlwfz3rmwuE8O2rj0ADk9NiNsUoKyBgoa8rA/edit

## Contents of this README
- [Description](#description)
- [Project Structure](#project-structure)
- [Functionality](#functionalities)
- [Requirements](#requirements)
- [Initialization Procedure](#initialization-procedure)
- [Deployment](#deployment)
- [For Any Questions](#for-any-questions)

## Project Structure

- FinanceMicroservice: `demo/FinanceModule`. Contains all the logic related to goals and debts.
- TransactionMicroservice: `demo/TransactionModule`. Contains all the logic related to transactions.
- UserMicroservice: `demo/UserMicroservice`. Contains all the logic related user authorization, authentication.
- Front end:  `demo/front_module`. Contains all the logic related to front end.
- Documentation: `README.md`. This file, containing brief description of the usage and purpose of the Budget Manager.

## Functionalities
Budget Manager's main purpose is providing simple and intuitive way for *creating*, *deleting*, *tracking* transactions, goals and debts.
1. Registration and Login
2. Add transaction category
3. Add transaction (expense/income) - fill name, amount, date and category of transaction
4. Save the transaction
5. Edit the transaction
6. Add finance (goal/debt) - goal: fill name and amount of goal, debt: fill name, amount, date, name of person to give back and interest rate od debt
7. Save the finance
8. Edit the finance
9. Look at all the goals and transactions you have

## Requirements

A quick description of the fulfilled requirements for easier localization.

### Non-Mandatory(-2 points) Requirements

| Requirement                                                              | Location                                                                       | Status                              |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------|
| Use of cache (e.g., Hazelcast)                                           | `demo/FinanceModule` - CacheConfig.java, GoalController.java                   | Fulfilled                           |
| Use of messaging principles (Kafka or JMS)                               | `demo/FinanceModule/kafka`,<br/> `demo/TransactionModule/kafka`                | Fulfilled                           |
| Application security using basic authorization or OAuth2                 | `demo/UserMicroservice` - WebSecurityConfig.java                               | Fulfilled                           |
| Use of Interceptors (at least one class)                                 | `demo/TransactionModule` - ExpenseInterceptor, IncomeInterceptor               | Fulfilled                           |
| Use of one of the following technologies: SOAP, REST, GraphQL, Java RMI  | REST                                                                           | Fulfilled                           |
| Use of Elasticsearch                                                     | `demo/TransactionModule` - TransactionController.java, TransactionService.java | Not working, <br/>but we came close |

### Mandatory Requirements

| Requirement                                                                  | Location                                                                                                                                                                                                                                                                                                                                                                                      | Status    |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| Technology/Language selection                                                | Java/SpringBoot + JS/React + PostgreSQL                                                                                                                                                                                                                                                                                                                                            | Fulfilled |
| README                                                                       | `README.md`, current document                                                                                                                                                                                                                                                                                                                                                                 | Fulfilled |
| Use of common DB (relational or graph)                                       | relational, PostgreSQL                                                                                                                                                                                                                                                                                                                                                                        | Fulfilled |
| Deployment to production server                                              | [Deployment instructions](#deployment)                                                                                                                                                                                                                                                                                                                                                        | Fulfilled |
| SW architecture design selection                                             | Client-Dispatcher-Server (more in full document)                                                                                                                                                                                                                                                                                                                                              | Fulfilled |
| Initialization procedure                                                     | [Initialization Procedure](#initialization-procedure)                                                                                                                                                                                                                                                                                                                                         | Fulfilled |
| Use of 5 design patterns                                                     | **Memento** - GoalMemento, `demo/FinanceModule` <br/>**Strategy** - InterestCalculationStrategy  `demo/FinanceModule`(SimpleInterestCalculationStrategy,  CompoundInterestCalculationStrategy)<br/>**Interceptor** - ExpenseInterceptor, IncomeInterceptor `demo/TransactionModule`<br/>**DTO** - dto folder in UserMicroservice, TransactionModule, FinanceModule <br/>**Promise** - frontend | Fulfilled |
| Each team member contributes 2 use cases (to ensure software is not trivial) | 3 members => 6 UC                                                                                                                                                                                                                                                                                                                                                                             | Fulfilled |
| Javadoc                                                                      | Present in all service layers <br/> and for additional functionalities                                                                                                                                                                                                                                                                                                                        | Fulfilled |


## Initialization Procedure
Final working version can be found in "FinalAllModules+FrontEnd" branch.
### For Starting the Program

1. Clone the Repository.For starting program you need to git clone repo FinalAllModules+FrontEnd.
2. Navigate to the Frontend Module: cd front_module.
3. Install Dependencies. npm install
4. Start the Frontend. npm start
5. Start the Backend Microservices.We recommend using IntelliJ IDEA for this step.
-  Open IntelliJ IDEA.
- Start the three required microservices.
6. Done.

## Deployment
### Deployment Version of the Application
1. The deployment version of the application is maintained on a separate branch named "Deployment version".
2. You can find the live application at: https://budgetapp-yybm.onrender.com.  
   **Note: The server is hosted for free, so it may take 1-5 minutes to load initially.**

### For Any Questions
Please contact email:
belegann@fel.cvut.cz
ilienvik@cvut.cz
hordivla@fel.cvut.cz

Thank you for taking the time to review the Budget Manager project. We hope it works well for you :)

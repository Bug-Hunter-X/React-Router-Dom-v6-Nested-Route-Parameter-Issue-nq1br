# React Router Dom v6 Nested Route Parameter Issue

This repository demonstrates a problem with nested routes and parameters in React Router Dom v6.  The issue occurs when a nested route with a parameter is defined within a parent route.  In some cases, this leads to incorrect rendering or crashes.

The solution provided addresses this issue by using the `useParams` hook correctly within the nested component and ensuring that the parent route is correctly structured.  See the `AppSolution.js` file for the working solution. 
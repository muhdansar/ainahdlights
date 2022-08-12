# ainahdlights
Mini storefront for a small home-based business 

<img width="587" alt="Screenshot 2022-08-12 at 1 28 00 PM" src="https://user-images.githubusercontent.com/106030879/184290547-88431f10-19cd-4e26-8430-887136977013.png">

# Stack Used
## PostgreSQL
used to create, read, update, and delete data in databases consisting of separate tables with shared data points
## Express
used for routing of back end calls to PostgreSQL database and tables
## React
used for modular rendering of components on a page as well as front end specific functions

# General Approach
The general approach was to design a simple front-end to see what the back-end and front-end functions and calls would look like, before fully
fleshing out the requirements for database and tables, and then the predicated front-end functions that would return and handle the returned data.

Business needs and the way the business operates was taken into consideration when designing the database requirements. The site was written iteratively, instead of doing up the back-end or front-end completely before moving on to the rest.
Accordingly, functions were also created and tested iteratively to make sure that they were working before moving on to the next one.

# Dependencies:
Back-End:
    "bcrypt": "^5.0.1",
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "pg": "^8.7.3"
    
 Front-End:
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "router": "^1.3.7"
    
 # Major Hurdles
 User authentication was broken upon loading and was unable to be solved timely. Mapping arrays within a react component was also an issue, so the stopgap solution was to hardcode iterations of arrays.
 For the site to be fully deployable these 2 hurdles would have to be solved.
 
 On the back-end, learning SQL queries for the first time was also challenging, but ultimately rewarding in being able to quickly grasp and get the data needed.
 
 

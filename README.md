# Login Authentication

Build a simple Login/Register System using React or React Native

## Objective
> - Demonstrate the full-stack development process of a simple web application.
> - Demonstrate the use of tools and techniques you are familiar with (e.g. JavaScript,  React, Node, DB).
> - Demonstrate the ability to quickly grasp new concepts and find your way around in  applying them (such as the use of GraphQL, Prisma, etc.). 

## Installation
Link to [repository](https://github.com/Cjir/LoginAndRegisterFormReact)

Open Link to repository
```
1.Go to Master Branch
```
```
2. Clone Repository
```

Open Login and Register System Folder
```
1.  cd login-register
        or
    open login-register folder
```
```
2.  npm install
        or
    yarn install
```
```
3.  cd ..
        or
    return to main folder from login-register
```
Initializating Server
```
4.  From Main Folder
      
    cd curl https://codeload.github.com/howtographql/react-apollo/tar.gz/starter | tar -xz --strip=1 react-apollo-starter/server

    Select
        demo server
        region US
```
Open 2 Seperate Terminals
```
5.  Terminal 1  
        cd server
        yarn start

    Terminal 2
        cd login-register
        yarn start
```   
Open Prisma server
```
    Under server folder
        1. Open Prisma Folder
        2. Open Prisma.yml on editor
        3. Open Link to Endpoint
```
Create A New User On Sign In
```
   # Use Query

    {
	    users {
	    name
        email
        password
        }
    }

```
## Tools
- React
- ReactStrap
- Reactout Router
- GraphQL
- Apollo
- Prisma
- Node

## Usage example

Web Application Login.

## Resources
1. [Core GraphQL Concepts](https://www.howtographql.com/basics/2-core-concepts/)

2. [React + Apollo](https://www.howtographql.com/react-apollo/0-introduction/)

## Roadmap
1. Create a Single Page Login App
2. Allow Input Date From
    - New User Sign Up 
    - Current User Login\
    \
_In-Progress_
3. User Authentication
4. Allow for User to Post New Data on to a Blog POst

## Developer
Christopher John Roman

Project status
> - Ongoing

# Freefolk Technical Interview

As part of the process for recruiting new Data Art members into the Freefolk team the candidates go through an initial interview with Data Art employees. We believe that there should be some final checks from our side to make sure that we are also happy with the technical competency of the contracts we choose to hire. We have chosen to conduct a practical coding interview for this purpose. This project contains the base code for the interview and guidelines on running it.

## Background
This project was created using `create-react-app`. The following libraries (along with relevant typings) were also added:
* redux + react-redux
* nanoid
* enzyme
* bootstrap + reactstrap 

### Project structure
* Common components are under the `components/` directory.
* Pages are put into separate folders under `pages/`. If a page needs to be divided into many components, the intention is that these components exist in the sub-directory for that page.
* All Redux logic is under `state/`, with each state slice given a separate sub-directory.
* There is a file `initial-state.ts` at the root level that contains mock data for the Redux store. This is used to avoid having to create a backend for fetching data from an API.

## Setting up the interview
The candidate should have access to an editor with the contents of the `freefolk-technical-interview` folder. This README should *not* be visible to the candidate! 

Before the interview, navigate to the `freefolk-technical-interview` directory and run:
```shell script
npm install
npm start
``` 

There should now be a running app opened in the browser. Check that the app works by navigating to the various pages. It will now auto-refresh if any code changes.

## Interview script 

### Introduction
Introduce the interviewers and context for the code base:
* This is a small front end web application.
* In the past, it was written in pure JavaScript. But it's been undergoing a rewrite to use TypeScript, React and Redux.
* The previous developer working on this was part way through the migration but left before finishing.
* During the interview, we'll try to finish some of the work they started.

Show the candidate the running web application and demonstrate the 3 pages. Note that there is some functionality, but the app is not complete.

### Activity 1
Instruct the candidate to find the files under `state/players` - note that they are both written in JavaScript.

The candidate should start by converting `reducer.js` to TypeScript. If they finish this quickly, ask them to convert the `actions.js` file too.

**Interviewer note**: the candidate will need to rename the files to have a `.ts` extension. When they do this, the auto-reload may stop working, meaning we need to re-run `npm start` in the terminal.

#### Success criteria
* The candidate should be able to figure out the shape of the players state by inspecting the reducer and action creators.
* There should be no usage of `any` in the typed code.

### Activity 2
Ask the candidate to find the component for the players page. Tell them that the code for the (legacy) pure-JS version of the page is still in the code base. The candidate should write a React component that looks the same as the legacy page. The only difference is that the new component should take the players state from Redux. 

#### Success criteria
* The candidate should create a working functional component. 
* They should use `player-page-legacy.js` as inspiration for writing the component.
* They should demonstrate an understanding of using React hooks to get data from the Redux state.

### Activity 3
Our product manager wants us to add filtering functionality to the players page. Ask the candidate to add an input to the page for filtering the table on player names.

Initially, there is no need to offer more detail than this. Ideally the candidate should then ask for details such as:
 * What filtering logic to apply - i.e. exact match, substring, fuzzy match etc.
   * In response, we should ask them to implement a partial (substring) match.
 * What should it look like?
   * Since we're not looking to test CSS knowledge, a simple labelled input above the table should suffice

#### Success criteria
* The filter works as instructed.

### Follow up
If the candidate finishes the 3 exercises, here are some additional topics for discussion.
#### Testing
* The project is set up with Jest and Enzyme
* If we wanted to achieve 100% test coverage, what kind of tests would we need? They can just describe test structure here, rather than actually implementing them.
* Have they heard of snapshot testing and what is their opinion on it?


#### Code splitting
* Is their code already split into different components? If not, could it be?
* What are the benefits of making smaller components?
* Are there any drawbacks?

#### Project structure
* How do they feel about the current project structure? How could it be improved?

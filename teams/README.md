# Working with TS and React
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

# RUNNING THE APP
Local URL: `localhost:3000`
```
npm install
npm start -s
```
----
# DIRECTORY STRUCTURE
<pre>
src
  |_ actions  // redux actions & thunks
  |_ assets   // static assets like images, PDF, etc.
  |_ components // stateless function (dumb) components that only does UI rendering
  |_ constants  // constants used for action types
  |_ containers // ES6 class (smart) components that serve as "parent/controller" for the "dumb" components
  |_ reducers   // redux reducers for state management
  |_ store      // THE REDUX STORE
  |_ styles     // SASS files for different components
  |_ utils      // helper methods
  |
  index.ejs     // index template file for webpack
  index.js      // main entry file
  routes.js     // react routing
</pre>

# UNIT TESTS
## Framework: Jest + Enzyme
To run test:
```
npm run test
```
Unit test files always have file names like `[component_name].spec.js` (i.e. MediaList.spec.js)
They are present along-side with the component files

# LINT
To run lint:
```
npm run lint
```

# RUNNING THE APP
Local URL: `localhost:3000`
```
npm install
npm start -s
```
----
# REQUIREMENTS
## Using React/Redux:
1. Get cat images from "http://mapd-cats.azurewebsites.net/catpics”
2. Get cat facts from "http://mapd-cats.azurewebsites.net/catfacts”
3. Append the results to DOM.
    - One image will have one fact associated with it.
4. Be able to remove/delete images (with attached fact) from DOM.

----

Bonus points for using:
- Linting
- Tests
- ES6

Style points:
- Grid Layout
- Basic Animation
- SASS

Feel free to add additional functionality such as:
- Rearrange images on DOM.
- Sorting by length of fact.
- Adding additional pictures/quotes.

----

Please use your github account and call the repo: ‘cats’

When completed, please let us know and state how long the project took to complete.

# Q & A
## About The "Business" Requirements:
* The cat image call returns an XML with several nodes, all I need for this practice is the image URL right?
    * Yes, all you need is the image.
* There seems to be no relation between the cat images & cat facts, I'm assuming I will just pair them together in any order right?
    * Correct.
* I'm assuming the UI/layout will be up to my discretion right?
    * Correct
* What do you actually mean by "Grid Layout"?
    * You can look up "Grid Layout".
* Are the items listed in bonus points "flexible"? i.e. can I use LESS or PostCSS instead of SASS? etc.
    * Yes.  Feel free to substitute any technology you'd like.
    * The only technologies that we feel are mandatory are "react/redux"
* Do I NOT get bonus points for doing things not listed there?
    * Definitely.  But do keep in mind the requirements of the assignment before venturing off onto a crazy path.  We had one individual create an platform fighting game once with the cats.  The game was very cool, but the code was very poorly written! :)
* Tests = unit tests?
    * Yes.  but if you'd like to implement E2E, I'm sure it wouldn't hurt.  :p

## About "Tech" Requirements:
* I'm assuming NodeJS should be the base stack, but am I allowed to choose any stack I want?
    * Sure.
* Am I allowed to use any existing React/Redux boilerplates/frameworks?
    * Yes.
* Am I allowed to use libraries/packages as needed? (i.e. SASS, Babel, Bootstrap, Lodash, etc.)
    * Yes, you are allowed.

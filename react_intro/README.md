# PROJECT: React intro

AUTHOR: Matthew Allen

## TASKS

### 0. Basic application - `task_0/dashboards/src/`, `task_0/dashboard/src/App.css`, `task_0/dashboard/src/App.js`

#### Create a basic app named `dashboard` using `create-react-app` in your `task_0` directory.

You will need a favicon and the Holberton logo.  Download them and add them to the `src/` directory under `dashboard/`.

##### Holberton Logo

<img src='https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230907%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230907T171257Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ad58a4d385af5f5c4db053713af84f4e7f5544d0711ae9a19f9d328e379a74dd' alt='Holberton logo image'>

##### Favicon

<img src='https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2019/11/e240f8157634d33a9757.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230907%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230907T171257Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=75d8028998e988f0ac1acc20acf9eaf0865eb425c9320b1d1b89fa0c0ec27282' alt='Holberton favicon image'>

#### Remove the unused files:

* `service-worker`
* `index.css`
* `App.test.js`

#### In `task_0/dashboard/src/App.js`, create a function `App` that returns:

* a header div with a class named `App-header` containing the Holberton logo and an h1 with the text `School dashboard`
* a body div with a class named `App-body` containing at least one paragraph with the text `Login to access the full dashboard`
* a footer div with a class named `App-footer` containing at least one paragraph with the text `Copyright 2020 - holberton School`

#### Modify the App.css to make the project look like the following screenshot:

<img src='https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/7743eba00239687a6fdd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230907%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230907T171257Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d15804cf0be829807cbe5b8a14d4fb8f5924dd789f2bff6027556879ac6c4fbb' alt="project screenshot image"/>

#### Requirements:

* When running, there should not be any lint error in the console.

### 1. Embedding expressions, functions - `task_1/dashboard/src/`, `task_1/dashboard/src/utils.js`, `task_1/dashboard/src/App.js`, `task_1/dashboard/src/Notifications.css`, `task_1/dashboard/src/Notifications.js`, `task_1/dashboard/src/index.js`

#### Using your code from the previous task, in `task_1/dashboard/src/utils.js`:

* Create a function named `getFullYear` that will return the current year
* Create a function named `getFooterCopy`:
  * It accepts one argument `isIndex` (boolean).  When true, the function should return `Holberton School`.  When false, the function should return `Holberton School main dashboard`
* Modify the footer returned in `task_1/dashboard/src/App.js` to use these two functions

#### In `task_1/dashboard/src/Notifications.js`, create a Notifications element:

* It should import React
* It should export a function
* The function should return a `div` with the class `Notifications`
* The div should contain a paragraph with th etext `Here is the list of notifications`
* Import the file `Notifications.css`

#### In `task_1/dashboard/src/Notifications.css`, style the Notifications class:

* Add a border and some padding around the `div`

#### Render the Notifications element:

* Modify `task_1/dashboard/src/index.js` to render the new element (`Notifications`) in a `div` named `root-notifications`
* Check that you can see the two elements on the browser, and using the React browser extensions

#### Requirements:

* When running, there should not be any lint error in the console

### 2. Modify the App - `task_2/dashboard/src/`, `task_2/dashboard/src/App.js`

#### Using your code from the previous task, in `task_2/dashboard/src/App.js` under the paragraph that says `Login to access the full dashboard`:

* add a label and input for email
* add a label and input for password
* when the user clicks on a label, it should select the corresponding input
* add one button element with the text "OK"

### 3. Modify the Notifications - `task_2/dashboard/src/`, `task_2/dashboard/src/utils.js`, `task_2/dashboard/src/Notifications.js`, `task_2/dashboard/src/Notifications.css`

#### In `task_2/dashboard/src/utils.js`:

* Create a function named `getLatestNotification` that returns the following string: `<strong>Urgent requirement</strong> - complete by EOD`

#### In `task_2/dashboard/src/Notifications.js` in the Notifications div:

* add a button element with inline styling (without using the CSS file):
  * show button on right side of notifications box
  * `aria-label` is `Close`
  * when user clicks on the button it logs to the console `Close button has been clicked`
* in the button element add a child `img` element that will import the `close-icon.png` image.
* after the paragraph add an unordered list
  * the list has the following items:
    * The first one has a default priority and says `New course available`
    * The second one has an urgent priority and says `New resume available`
    * Add the priority to the first and second items of the list using a `data` attribute
    * The last item correctly displays the content of `getLatestNotification` using `dangerouslySetInnerHTML`

#### In `task_2/dashboard/src/Notifications.css`:

* style the notification prioritites using their data attribute: set the color of default items to blue, and the color of urgent items to red.

#### Requirements:

* When running there should not be any lint error in the console
* Your app should look like the following screenshot:

<img src='https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/8d639e2671ebe15575ad.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230907%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230907T171257Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=bc95b5eb3df428e7e58bbecaf32ea9491dabbb1b8674319f83e03c326651521a' alt='app screenshot image'>

### 4. Create basic tests with four tests - `task_3/dashboard/src/utils.test.js`

#### In `task_3/dashboard/src/utils.test.js`:

* Write a test to check that the function `getFullYear` returns the correct year (be careful to not create a time bomb)
* Write a test to check that `getFooterCopy` returns the correct string when the argument is true or false
* Write a test checking the returned string for `getLatestNotification`

### 5. Install Enzyme - `task_3/dashboard/src/setupTests.js`

* Install Enzyme with `npm`
* Create a file named `setupTests.js` and configure the adapter for Enzyme

### 6. Create React tests - `task_3/dashboard/src/App.test.js`, `task_3/dashboard/src/Notifications.test.js`

#### In `task_3/dashboard/src/App.test.js` create four tests:

* test that App renders without crashing
* verify that App renders a div with the class `App-header`
* verify that App renders a div with the class `App-body`
* verify that App renders a div with the class `App-footer`

#### In `task_3/dashboard/src/Notifications.test.js` create three tests:

* test that Notifications render without crashing
* verify that Notifications render three list items
* verify that Notifications render the text `Here is the list of notifications`

#### Requirements:

* When running the test suites, you should see the following result
```
Test Suites: 3 passed, 3 total
Tests: 11 passed, 11 total
```
* You must use shallow rendering to write the React tests

### 7. Deploy to a GitHub page - `task_4/`

Deploy your application to GitHub Pages using `gh-pages` branch and `create-react-app`

Your application should be working correctly when accessing the GitHub URL.

### 8. Create a project using Webpack - `task_5/dashboard/config/webpack.config.js`, `task_5/dashboard/dist/index.html`, `task_5/dashboard/src/index.js`

Without reusing `create-react-app` or the code from the previous exercise, start a brand new npm project.

Reusing what you learned during the Webpack module:

* Set up a system to output a `bundle.js` file in a `dist` folder
* Set up a dev server with hot reloading
* Create a `src` folder that will contain your JavaScript
* Set up a simple html file in the `dist` folder that will import the bundle file in the `body` tag.

Install and configure the various plugins to support:

* inline source map
* style loader
* css loader
* image webpack loader

### 9. Install Babel - `task_5/dashboard/.babelrc`, `task_5/dashboard/config/webpack.config.js`

* Install Babel, and in `task_5/dashboard/.babelrc`, add the presents for `preset-env` and `preset-react`
* Add a `babel-loader` to the Webpack configuration so you can support `js` and `jsx` files
* Import the files that you wrote in the previous task.  All the JavaScript and React code should be within the `src` folder

At this point, running `webpack-dev-server` should correctly execute your code, and you should be able to see the dashboard like in the last task.

### 10. Reorganize the files - `task_5/dashboard/src/App/App.css`, `task_5/dashboard/src/App/App.js`, `task_5/dashboard/src/App/App.test.js`, `task_5/dashboard/src/Notifications/Notifications.css`, `task_5/dashboard/src/Notifications/Notifications.js`, `task_5/dashboard/src/Notifications/Notifications.test.js`, `task_5/dashboard/src/utils/utils.js`, `task_5/dashboard/src/utils/utils.test.js`, `task_5/dashboard/config/webpack.config.js`, `task_5/dashboard/src/assets/holberton-logo.jpg`, `task_5/dashboard/dist/favicon.ico`

Let's organize the files in our project:

* Every file related to the App, should be within an `App` folder
* Every file related to the Notifications, should be within a `Notifications` folder
* Every file related to the utils functions, should be within a `utils` folder
* Every asset file should be within the `assets` folder
* Set up the `favicon.ico` in the `dist` folder
* Webpack config file should be within a `config` folder if it isn't already

### 11. Testing - `task_5/dashboard/config/setupTests.js`, `task_5/dashboard/package.json`

Install Jest and Enxyme to run your test suites

Move the `setupTests.js` file to `config` folder if you have not already.

#### Requirements:

* Your `package.json` should have the two following scripts:

```
"start": "webpack-dev-server --mode development --config config/webpack.config.js",
"test": "jest"
```

* Running the first script should start your dev server and build without any error
* Running the second script should start your test suites and pass for each test
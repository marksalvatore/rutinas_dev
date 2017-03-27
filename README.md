# REACT

#### Tutorial (March 2017)
Based on Wes Bos's _Catch of the Day_ tutorial

___

#### Links
* [React Docs](https://facebook.github.io/react/docs/hello-world.html)
* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [JS Study Plan!](https://medium.freecodecamp.com/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.coq3crkvq)
* [Understanding React](https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.ipn319q06)
* [Handling THIS in React](https://medium.com/@housecor/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56#.k1is072c8)
* [Learning Resources](https://github.com/markerikson/react-redux-links)

#### Setup
+ index.html lives in public/
+ Instead of calling required files from index.html, we'll use a "module bundler" to import them with ES6 from index.js. **WebPack** is the favorite bundler among *React'ers*. Since it's a pain to set up, Facebook released [Create React App](https://github.com/facebookincubator/create-react-app), which simplifies tooling to get up and running. It's basically a simple interface on top of WebPack. 
+ The package.json comes assembled. See [Create React App](https://github.com/facebookincubator/create-react-app) for details.
+ **src/index.js** is the main application file

#### Steps
+ run `npm init`
+ run `npm create-react-app`
This installs **package.json** with all the dependencies we need and makes npm our task runner:  
    + npm start
    + npm watch
    + npm build
    + npm eject
+ run `npm start` to open the app on http://localhost:3000
+ The component we'll build will eventually get placed in the components directory, but we can begin building it in **index.js**
+ Open index.js and add `import React from 'react';` This will save the react object installed by WebPack, to the variable React. The actual React code will be in /static/js/bundle.js. Anything you add to index.js will be included in bundle.js.

#### React Concepts
+ React's data flow is **unidirectional**: data can only go from parent components to their children via **props**, not the other way around.

+ Sometimes though, a component needs to react to data that doesn't come from a parent component (such as user input for example). And this is where the **state** comes in.

+ A metaphor to understand the difference between props and state is the Etch-A-Sketch, where the color and knob positions are _props_ (inherent to the device) while the drawing itself (not inherent) is the _state_. 

+ Note that **a component's state can also be passed on to its children as a prop**. You can think of this as a big river flowing downhill, with the router, data layer, and various components each adding their own little stream of data to form the main app state.

+ Inside a component, state is managed using the **setState** function, which is often called inside an event handler:

```javascript
    class MyComponent extends React.Component {
      handleClick = (e) => {
        this.setState({clicked: true});
      }
      render() {
        return a href="#" onClick={this.handleClick}>Click me </a>;/
      }
    }
```

+ In practice, the vast majority of data in a React app will be a prop. It’s only when you need to accept user input that you’ll use state to handle the change. 

+ A **functional component** is a function that takes a props object as argument, and returns a bunch of HTML. Almost like a traditional template, with the key difference that you can still use whatever JavaScript code you need inside that function:
```javascript
    const myComponent = props => {
      return <p>Hello {props.name}! Today is {new Date()}
    }
```
    The consequence of using the functional component syntax is that you can't have methods inside your component. But it turns out that the majority of components don't need them.

    By the way, one of these methods is setState(), so this means **functional components cannot have state**. For that reason they’re often referred to as stateless functional components.

    Since functional components require much less boilerplate code, it makes sense to use them whenever possible. For this reason, most React apps contain a healthy mix of both syntaxes.

    After using React for a while, people started seeing two distinct “flavors” of code appear in their components: one flavor was concerned with UI logic such as showing and hiding thing. And the other was all about data logic, such as loading data from your server.

    This led to the distinction between **container components** and **presentational components** (also sometimes known as _smart_ and _dumb_ components). Container components should handle your data, but not your UI. Presentational components should keep your data and data logic, but not logic for the UI.

+ **/static/js/bundle.js** contains the react code and your app.
+ import from **'string'** If a string it assumes it's a node module
+ import MyComponent from './some/path/MyComponent';
+ React uses **HTML5 push state**, which can change the URL without reloading the page.

#### Creating a component
+ Create a class with a render method (required minimum) in index.js
```javascript
class StorePicker extends React.Component {  
    render(){  
        return <p>StorePicker Component</p>  /
    }  
}
```

+ Then render (display) your component:
```javascript
render(<StorePicker/>, document.querySelector('#main'));
```
+ Put component in its own file
    + ./components/MyComponent.js 
    + add `import React from 'react';`
    + add a stylesheet `import '../css/style.css';`
    + add class for MyComponent
    + add `export default StorePicker;`

#### JSX
Makes it easy to write html inside javascript, but has no logic or loops, etc.
+ Must be inside return( 'jsx here')
+ You can only return one parent element
+ Comments must go inside that parent element 
+ Comments go inside brackets `{ /* comment here */ }`
+ All html tags must terminate like `<br/>`

#### Stateless Functions
When you only need to render HTML out to the DOM, there's no need to import all of React. You'll only need a **stateless functional component**. To do that you don't need a class, nor render(). It's customary to use arrow functions to define the functions (components). See [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```javascript
import React from 'react';

// STATELESS FUNCTION
const Header = (props) => {
    return (
        <header className='main'>
            <h1>Site Title</h1>
            <h3><span>{props.tagline}</span></h3>
        </header>
    )
}
export default Header;
```

#### Using React Router 4
Enables you to show/hide components based on uri
+ Make a stateless function component to be your router. Call that router in index.js (that call is really the first call to your app).
+ index.js -> router.js -> app.js -> other components which -> their children, etc.
+ Your router will be the parent component for your app.
+ `import React from 'react';`
+ `import { BrowserRouter, Match, Miss } from 'react-router';`
+ import your top level components.
+ Return `<BrowserRouter>` and be sure to have contents return one parent div, because it kinda works like the JSX return function only wanting one parent element.

```javascript
import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

const Router = () => {
    return (
        <BrowserRouter basename="/catchoftheday">
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter> /
    )
}

export default Router; 
```

#### Helper file 
* It's useful to create a helper.js for functions that are used globally or throughout your app. 
* Simply import a file of **named export functions**:

```javascript
import { getFunName } from '../helpers'; 
```

* Use like this: 
```javascript
defaultValue={getFunName()}
```

#### Events
* **onSubmit** event listens for submit and keyboard enter.
* **render()** is bound to its component class, so _this_ refers to the class when inside render() and **ONLY** inside render(). Unless you explicitly bind each method to the class like this:
```javascript
constructor() {
    super(); // constructs base React component with this class and binds *this* to the class
    this.someMethod = this.someMethod.bind(this);
}
```

* You can also bind _this_ by using **ref**. In the following example, when the input element is rendered on the page, **storeInput** will be made a reference to that input's value, on the class.

```javascript
    <input type="text" 
        required 
        placeholder="Store Name" 
        defaultValue={ getFunName() } 
        ref={(input) => this.storeInput = input } 
    /> /
```
* Two main ways to make **this** point to the component class:
    * Use constructor component:
    
    ```javascript
    constructor() {
        super(); // constructs base React component with this class
        this.goToStore = this.goToStore.bind(this);
        this.mySecondMethod = this.mySecondMethod.bind(this);
        this.myThirdMethod = this.myThirdMethod.bind(this);
    }
    ```

    * Or bind the class directly to the event listener on the element:
    ```javascript
    <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
    ```

#### React Router 4
You can route pages using the **Redirect** component by importing it from **react-router** or you can use the imperative API of router which is **.transitionTo()**. In order to access this function, you need to surface the router from the parent through **contextTypes**. You basically have to tell react that you want to use the router in _context_ (the router was imported into a parent element so it's there but...) you need to attach a **contextTypes** object to the component class:

```javascript
StorePicker.contextTypes = {
    // This will provide access to transitionTo()
    // and will display as a 'Context' under 'router' in devTools
    router: React.PropTypes.object
}
```

Then you can go to a page like this:
```javascript
this.context.router.transitionTo('/store/${storeId}');
```

#### STATE
A representation of all data in your app. Each component has own state. Think of it as one object (in React that object is called **State**) that contains all the data for some piece (or all) of your application. So to change data on a page, you'd update the State object and React will update the DOM. **State should be tied to the highest level component that needs access to that data**. Set State to your component with a constructor method:
```javascript
    constructor() {
      super(); // inits component so we can use "this"

      this.addFish = this.addFish.bind(this);
      // getinitialState
      this.state = {
        fishes: {},
        order: {}
      };
    }
```

In order to enable child components to use a parent's function or state, you have to pass it to the child components via **props**. In React, attributes are known as props (short for “properties”). Props are how components talk to each other:
```javascript
    <Inventory addFish={this.addFish} >
```

And to pass that function yet another level down:
```javascript
    <AddFishForm addFish={ this.props.addFish } >
```

##### Using the React Console
1. In DevTools click the React tab and type your component in the searchbox
1. select the element you want to explore then
1. go to console and type ```$r``` to see props for that object

#### Useful JavaScript
* Use **Object.keys()** to convert an object of objects to an array of objects so you can loop over them using **.map()**:
```javascript
{   
    Object
    .keys(this.state.fishes)
    .map( key => <Fish key={key} details={this.state.fishes[key] } > )
}
```

#### Firebase
* After creating a project, select "Database", then "RULES" and change read, write, both to false.
* Determine which of your states will be kept in Firebase and which in local storage.
* In order to sync state to firebase, use **Rebase**
    * Create a new file in src, not as a component, _base.js_
    * In that file ```import Rebase from 're-base';```
    * Then create a connection to your firebase db:
        * Go to Overview on Firebase and click "Add Firebase to your web app". You only need apiKey, authDomain, and databaseURL. Base.js should look like following:
    ```javascript
        import Rebase from 're-base';

        const base = Rebase.createClass({
            apiKey: "",
            authDomain: "",
            databaseURL: ""
        });

        export default base;
    ```

    * Then import base.js into your App component: 
    ```javascript
    import base from '../base';
    ```

    #### React Lifecycle Hooks
    Use the "componentWillMount" hook. We'll need to create a function of the same name in our App.js. 
    ```javascript
    import base from '../base';
    ...
    componentWillMount() {
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    ```

#### HTML5 Local Storage
* Use React Lifecycle Methods for this as well:
* componentWillUpdate:
    ```javascript
    componentWillUpdate(nextProps, nextState) {
        console.log("Something changed:");
        console.log({nextProps, nextState});
    }
    ```
* In DevTools, click "Application" then Local Storage and your domain name.
* Local store is key:value 
* It's like an object that only stores strings (no objects)
* localStorage.setItem('key', 'value');
* localStorage.getItem('key');
```javascript
    // local storage
    componentWillUpdate(nextProps, nextState) {
        console.log("Something changed:");
        console.log({nextProps, nextState});
        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
    }
```

#### React Animation
```javascript
import CSSTransitionGroup from 'react-addons-css-transition-group';
```
* Then swap out the element you want to animate with **CSSTransitionGroup**
* And add in animation params: component, transitionName, transitionEnterTimeout, transitionLeaveTimeout
```javascript
<CSSTransitionGroup 
    className="order"
    component="ul" // so CSSTransitionGroup gets rendered out as a ul
    transitionName="order"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
>
```
* React injects two classes (an A and B point) when the element is rendered (_order-enter, _order-leave-active_) and two classes when it's removed (_order-enter, _order-leave-active_). You can then transition from A to B:

```css
    .order-enter {
        transition: all 0.5s;
        // Initial state
        transform: translateX(-120%); // start from out of view
        max-height: 0; 
        padding: 0 !important; 
        &.order-enter-active {
            // Final state
            transform: translateX(0); // end up in view
            max-height: 60px; 
            padding: 2em 0 !important;
        }
    }

    .order-leave {
        transition: all 0.5s;
        transform: translateX(0);
        &.order-leave-active {
            transform: translateX(120%);
            max-height: 0;
            padding: 0;
        }
    }
```

#### PropTypes 
* Validate the data that enters our components (like data types). Just add a 
function below your component:
```javascript
    ComponentName.propTypes = {
        myString: React.PropTypes.string.isRequired
    }
```
* This will error (development only) if the rules are not met.

#### Authentication with Firebase
Review video #24. There's a lot to it.
* Go to Firebase Authentication tab and set up your "sign-in providers", like Github, Twitter, Facebook, etc.
* Register a new OAuth application each provider you want to use, copying the API key and secret from each into your selected providers on Firebase.
    * [Github](https://github.com/settings/applications/new)
    * [Facebook](https://developers.facebook.com/apps)
    * [Twitter](https://apps.twitter.com/)
* Then within the component you want authorizaion, create a method to render out the buttons for those providers:

     ```javascript
     renderLogin() {
        return (
            <div>
                <nav className="login"></nav>
                <h2>Inventory</h2>
                <p>Sign in to manager your store.</p>
                    <button className="github" onClick="{ () => this.authenticate('github')}">Log in with GitHub</button>
                    <button className="twitter" onClick="{ () => this.authenticate('twitter')}">Log in with Twitter</button>
                    <button className="facebook" onClick="{ () => this.authenticate('facebook')}">Log in with Facebook</button>
            </div>
        );
     }
    ```

* Add a state to the constructor:
```javascript
constructor() {
    ...

    this.state = {
        uid: null,
        owner: null
    }
}
```

* Be sure to set your rules on firebase:
```javascript
{
    "rules": {
        // won't let people delete an existing room
        ".write": "!data.exists()",
        ".read": true,
        "$room" : {
          // only the store owner can edit the data
          ".write" : "newData.child('owner').val() === auth.uid",
          ".read" : true
        }
    }
}
```

#### How to publish
* `npm run build`
* add path to home in package.json"
```javascript
    "homepage": "http://www.salvatore.us/catchoftheday",
```

* add basename to your router tag with the folder name if you're not serving it from root:  
```javascript
    <BrowserRouter basename="/catchoftheday">
```

* create .htacess to route all uri's beyond catchoftheday to index.html:  
```
RewriteEngine On  
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

RewriteRule ^ /catchoftheday/index.html [L]
```
* Currently this file is not included in the build, so be sure to include it with the built files. 

#### Ejecting from create-react-app 
'npm run eject' will take the training wheels off your app so you can fine tune your build using webpack directly.
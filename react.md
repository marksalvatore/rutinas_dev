# REACT

#### Markup

+ Images: `![]() "Tool tip"` // Bang is for image, brackets for the alt, and parens for the path

[1]: https://docs.angularjs.org/tutorial/
+ Code blocks:
+ 
```javascript
function chomp() {
	var goo = 3;
	var gle = 5;
	goo + gle = 6;
}
```

#### Tools for course
+ React **DevTools** for Chrome
+ Babel package for **Sublime Text** 
+ Module bundler **WebPack**


#### Setup
+ index.html lives in public/
+ Instead of calling required files from index.html, we'll use a "module bundler" to import them with ES6 from index.js. **WebPack** is the favorite bundler among *React'ers*. Since it's a pain to set up, Facebook released **Create React App**, simplifies tooling to get up and running. It's basically a simple interface on top of WebPack.
+ The package.json had already been assembled for this course (not sure why he didn't step us through it).
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
+ The component we'll build will eventually get placed in the components directory, but we'll use **index.js** while we build it. Open index.js.
+ Add `import React from 'react';` This will save the react object, installed by WebPack, to the variable React. The actual React code will be in /static/js/bundle.js. Anything you add to index.js will be included in bundle.js.


#### React Concepts
+ Component - a reusable piece of your website, invoked by your html element.
+ **/static/js/bundle.js** contains the react code and your app.
+ import from 'string', if a string it assumes a node module
+ import MyComponent from './some/path/MyComponent';
+ React uses **HTML5 push state**, which can change the URL without reloading the page. I think it can also load only the elements on a page that change (need to verify this).

#### Creating a component
+ Create a class with a render method (required minimum) in index.js
`class StorePicker extends React.Component {  
	render(){  
		return <p>StorePicker Component</p>  
	}  
}
`
+ Then render (display) your component:
`render(<StorePicker/>, document.querySelector('#main'));`
+ Put component in its own file
	+ ./components/MyComponent.js 
	+ add `import React from 'react';`
	+ add a stylesheet `import '../css/style.css';`
	+ add class for MyComponent
	+ add `export default StorePicker;`

#### JSX
Makes it easy to write html inside javascript
+ Must be inside return( 'jsx here')
+ You can only return one parent element
+ Comments must go inside that parent element 
+ Comments go inside brackets `{ /* comment here */ }`
+ All html tags must terminate like `<br/>`


#### Stateless Functions
When you only have to render HTML out to the DOM (only need a render() method), there's no need to import all of React. You'll only need a "stateless functional component". To do that you don't need a class, nor render(). It's customary to use arrow functions to define the functions (components). See [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### Using React Router 4
Enables you to show/hide components based on uri
+ Make a component (stateless function) to be your router. Call that router in index.js (that call is really the first call to your app).
+ `import React from 'react';`
+ `import { BrowserRouter, Match, Miss } from 'react-router';`
+ import your top level components.
+ Return `<BrowserRouter>` and be sure to have contents return one parent div, because it kinda works like the JSX return function only wanting one parent element.

#### Helper file 
It's usefule to create a helper.js for functions that are used globally or throughout your app.
Simply import a file of *named export* functions:
+ `import { getFunName } from '../helpers';`
+ Use like this: `defaultValue={getFunName()}`

#### Events
+ **onSubmit** event listens for submit and keyboard enter.
+ **render()** is bound to its component class, so _this_ refers to the class. However, other functions inside the class but outside render(), are NOT bound. You must bind them manually using **ref**, a way to reference inputs.

The following use of **ref** means that when the input element is rendered onto the page, **storeInput** will be made a reference on the class itself, to that input's value.

` 
	<input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={(input) => this.storeInput = input } />
`
+ Two main ways to make **this** point to the component class:
	* Use constructor component:
	
	```javascript
	constructor() {
		super(); // constructs base React component with this class
		this.goToStore = this.goToStore.bind(this);
		this.mySecondMethod = this.mySecondMethod.bind(this);
		this.myThirdMethod = this.myThirdMethod.bind(this);
	}
	```
	* Bind the class directly to the event listener on the element:
	```javascript
	<form className="store-selector" onSubmit={this.goToStore.bind(this)}>
	```

#### React Router 4
You can route pages using the **Redirect** component by importing it from **react-router** or you can use the imperative API of router which is **.transitionTo()**. In order to access this function, you need to surface the router from the parent through **contextTypes**. You basically have to tell react that you want to use the router in _context_ (the router was imported into a parent element so it's there but...) by attaching a **contextTypes** object to the component class:

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
A representation of all data in your app. Each component has own state. Think of it as one object (in React that object is called **State**) that contains all the data for some piece (or all) of your application. So to change data on a page, you'd update the State obejct and React will update the DOM. State should be tied to the highest level component that needs access to that data. Set State to your component with a constructor method:
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
In order to enable child components to use a parent's function or state, you have to pass it to the child components via **props**:
```javascript
    <Inventory addFish={this.addFish} />
```
And to pass that function yet another level down:
```javascript
    <AddFishForm addFish={ this.props.addFish }/>
```



##### Using React Console
1. In React tab searchbox, type name of component
1. select the element
1. go to console and type ```$r``` to see props for that object

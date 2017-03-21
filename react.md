# REACT

#### Links
* [Study Plan!](https://medium.freecodecamp.com/* a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.coq3crkvq)
* [React Concepts](https://medium.freecodecamp.com/* the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.ipn319q06)
* [Handling THIS in React](https://medium.com/@housecor/* react-binding-patterns-5-approaches-for-handling-this-92c651b5af56#.k1is072c8)
* [Learning Resources](https://github.com/markerikson/react-redux-links)

#### Setup
+ index.html lives in public/
+ Instead of calling required files from index.html, we'll use a "module bundler" to import them with ES6 from index.js. **WebPack** is the favorite bundler among *React'ers*. Since it's a pain to set up, Facebook released [Create React App](https://github.com/facebookincubator/create-react-app), simplifies tooling to get up and running. It's basically a simple interface on top of WebPack. 
+ The package.json had already been assembled. See [Create React App](https://github.com/facebookincubator/create-react-app) for how it's put together and how to use it.
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
+ React's data flow is **unidirectional**: data can only go from parent components to their children (via **props**, not the other way around.

+ Sometimes though, a component needs to react to data that doesn't come from a parent component (such as user input for example). And this is where the **state** comes in.

+ A metaphor to understand the difference between props and state is the Etch-A-Sketch, where the color and knob positions are _props_ (inherent to the device) while the drawing itself (not inherent) is the _state_. 

+ Note that **a component's state can also be passed on to its own children as a prop**. You can think of this as a big river flowing downhill, with the router, data layer, and various components each adding their own little stream of data to form the main app state.

+ Inside a component, state is managed using the **setState** function, which is often called inside an event handler:

```javascript
    class MyComponent extends React.Component {
      handleClick = (e) => {
        this.setState({clicked: true});
      }
      render() {
        return a href="#" onClick={this.handleClick}>Click me /a;
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
    The consequence of using the functional component syntax is that you lose access to the component methods we just talked about. But it turns out that in practice that’s perfectly fine, since the vast majority of your components probably won’t need them.

    By the way, one of these methods is setState, and this means functional components cannot have state. For that reason they’re often referred to as stateless functional components.

    Since functional components require much less boilerplate code, it makes sense to use them whenever possible. For this reason, most React apps contain a healthy mix of both syntaxes.

    After using React for a while, people started seeing two distinct “flavors” of code appear in their components: one flavor was concerned with UI logic such as showing and hiding thing. And the other was all about data logic, such as loading data from your server.

    This led to the distinction between container and presentational components (also sometimes known as “smart” and “dumb” components). Container components should handle your data, but — and this is the important part — not your UI. Presentational components are just the opposite. You should keep data logic and UI logic in separate components.


+ **/static/js/bundle.js** contains the react code and your app.
+ import from 'string', if a string it assumes it's a node module
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
Makes it easy to write html inside javascript, but has no logic or loops, etc.
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
In order to enable child components to use a parent's function or state, you have to pass it to the child components via **props**. In React, attributes are known as props (short for “properties”). Props are how components talk to each other:
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

---

#### Useful JavaScript
* Use **Object.keys()** to convert an object of objects to an array of objects so you can loop over them using **.map()**:
```javascript
{
    Object
    .keys(this.state.fishes)
    .map(key => <Fish key={key} details={this.state.fishes[key] } />)
}
```
This arrow ( => ) returns what follows.


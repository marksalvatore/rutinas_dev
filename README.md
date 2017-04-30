# Rutinas

Rutinas is an app to assist you when you practice pool. It contains more than 50 drills you can group into one or more routines. You can then record each drill performance and monitor your progress over time.

### Technology
Rutinas was built as a web app in React (15.5) and designed for mobile. I adhered to current best practices and standards, although I broke from the convention of adding a suffix "Container" to the name of smart components. Instead, I used a suffix of "Render" for the names of the dumb components, thereby leaving the pure component name for the container. 

I gave each component its own stylesheet namespaced with the component name. I extracted global and helper styles into their own files which are called from each component's stylesheet if needed.

This app uses JSON and localStorage in the Web Storage API.

- Mark Salvatore
April 30, 2017
mark@salvatore.us

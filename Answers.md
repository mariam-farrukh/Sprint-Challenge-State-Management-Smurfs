1. What problem does the context API help solve?

It is used to manage large applications that have many components. It can help us maintain a clean state. No longer need to pass props down from component to component since we store data in the context data by setting up global data that lots of components share.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are like objects that can take up to two properties, type and payload. Reducers take in two arguments, initialstate and the action. Reducers never update the state directly, but always return a new object. The store is a redux application contains the state of the entire application. It is the core of the application in terms of data management.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Applicatoin state is global (like the store) and can be used by all components in the app. Component state lives in the specific component and has to be passed down by props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a middleware that allows us to handle async operations inside our action creators. By making API calls with thunk, we can control action creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API seems to be my favorite because it replaces useState, and is just alot cleaner and easier to use. You don't have to pass down props to every component to get it to work.
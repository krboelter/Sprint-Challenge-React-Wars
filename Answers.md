# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS makes it easier to make components and create a complex website easier, faster and more organized.

1. What does it mean to think in react?

    I think it means to change your way of thinking from vanilla JavaScript and think in components, different syntax for
    things like props and use states.  It gets you thinking about what your JavaScript does and where it belongs in your
    project.

1. Describe state.

    State is something that occurs within the main function.  The initial state is the variable, then, when you call the setState
    version of the function you created, it changes that variable for the re-rendered state.  A change of state will cause a re-render.

1. Describe props.

    Props is a placeholder variable that allows you to refer to the function in which you are dealing, almost like this for an object.
    Props then gets a name (props.name) and when you call your element you can give it a name="someString".

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are things that happen in consequence of the nature of React rendering during state changes.  For instance, if you want to make an axios call, it will call every time there is a re-render.  We use 'useEffect' to prevent this and it can be synced up with a partiular variable so whenever there is a state change to the indicated variable, the useEffect function will allow the axios call to function as intended.

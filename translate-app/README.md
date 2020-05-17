### Using React Context System

This is simple examples uses React context system.  

The React Context systems, helps to share the data between nested components. Unlike props, which is passed to the direct child components.

From Top to bottom, the context feature, can be used to pass the data to its nested componets. 

However, there is a drawback in this feature, comparing _Redux_ lib. Passing data between different store components will be hard when using React context System. 

Unlike in Redux, we have a centralized a store and actions from different components can make change of the store data.

In summary, React Context System, can be used for simple applications. If we are going to make Complex/large web applications, still we need _Redux_ in place to save the earth.
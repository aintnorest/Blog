backdrop: {
    Enter: { x: 0, y: 0, z: 1, opacity:spring(0, [40, 40]) },
    Leave: { x: 0, y: 0, z: 1, opacity:spring(0, [40, 40]) },
    Styles(val) {
        return { x: spring(val.x), y: spring(val.y), z: -10, opacity: spring(val.opacity)};
    },
    VM(store) {
        return require("vms/backdrop")(store);
    }
},


difference between routes and shells. Each route contains so many shells and at specific states. url is based of routes not shells.

routeTree maybe...

```
        <shellName>: {
            onEnter: {x:0, y:0, z:0, opacity:0 },
            onLeave: {x:0, y:0, z:0, opacity:0 },
            /* I dont think I actually need Styles
                Styles(val) {
                    return { x: spring(val.x), y: spring(val.y), z: -10, opacity: spring(val.opacity)};
                },
            */
            connection(props) {

            },
            auth(state) {
                //return true or false. Is allowed to be augmented separately from rest of route.
            },
            reducer: ['reducer1Name','reducer2Name']
        }
```
let props = {};
props.listeners = {};
let s = store.getState();
reducer.forEach(i) {
    props[reducer[i]] = s[reducer[i]];
    props.listeners[reducer[i]] = function(cb) {
        //sets up a listener for u any time that data changes you'll recieve the new data as the param of the function call... These are cleaned up when a shell is removed from the view or maybe just set a timeout to do it in half a second.
    }
}
store.getState()
s[reducer[0]]

```
        <routeName>: {
            shells: [
                { key: <shellName>, data: <optional>, x: 0, y: 0, z: 0, opacity: 0 },
                { key: <shellName>, data: <optional>, x: 0, y: 0, z: 0, opacity: 0 },
                { key: <shellName>, data: <optional>, x: 0, y: 0, z: 0, opacity: 0 },
            ],
            auth(store) {
                //return true if the route is aloud. return false if it is not.
            }
        }
```
Need to setup a clean way to connect a shell porc component with the store while still being able to test the logic of statements without using a DOM / React of any kind.
I'd like to have instances of shell components so I don't need a new entry for each version. not a priority.
I want them to register the reducers they require, I want to be able to query the nav for what requires are requested and by what.

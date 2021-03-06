# redom-state
[RE:DOM](https://redom.js.org) state handling example

## Demo
https://pakastin.github.io/redom-state/

## How it works?
The whole [redux](https://github.com/reactjs/redux)-like [state handling code is only 447 bytes](https://github.com/pakastin/redom-state/blob/master/js/utils/dispatch.js) uncompressed. Redux is [30.1 KB](https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.js) for comparison.

It uses native HTML events to dispatch actions upstream and RE:DOM component updates to update views downstream. That's it :)

Here's the action definitions:
https://github.com/pakastin/redom-state/blob/master/js/actions.js

This is what binds everything together:
https://github.com/pakastin/redom-state/blob/master/js/utils/api.js

## Benefits
- Fast
- Small
- Asynchronous, but immediate
- Flexible (stopPropagation etc)

## Future
I will release this as a separate library or some parts included in RE:DOM. For now it's just an experiment.

## Run
```
npm start
```

Then navigate to [http://localhost:8080/](http://localhost:8080/)

## Dev mode
```
npm run dev
```

# memfs-webpack

Example of how to use [`memfs`][memfs] with [`webpack`][webpack].

Basically you need to add an alias like this:

```js
        alias: {
            'fs': 'memfs',
        }
```

to your `webpack.config.js`:

```js
module.exports = {
    devtool: 'inline-source-map',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'fs': 'memfs',
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
};
```

### Getting started with this example

```js
git clone https://github.com/streamich/memfs-webpack
cd memfs-webpack
npm install
npm run start
```

Now open your browser and go to [http://localhost:8080/index.html](http://localhost:8080/index.html).
Open dev console and you should see:

    index.js:4 Hello world!
    index.js:5 Object {/text.txt: "Hello world!"}

It is output from `memfs`, although in the code we used the actual `fs` module:

```js
import {vol, writeFileSync, readFileSync} from 'fs';

writeFileSync('/text.txt', 'Hello world!');
console.log(readFileSync('/text.txt', 'utf8'));
console.log(vol.toJSON());
```



[memfs]: https://github.com/streamich/memfs
[webpack]: https://github.com/webpack/webpack


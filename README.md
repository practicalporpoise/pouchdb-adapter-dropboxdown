# PouchDB Adapter DropboxDOWN

> An adapter to use [`dropboxDOWN`](https://github.com/practicalporpoise/dropboxdown) with [pouchDB](https://github.com/pouchdb/pouchdb) in the browser.

## Extremely experimental, use at your own risk.

## Usage with PouchDB in browser

### Install

`npm install pouchdb-browser pouchdb-adapter-dropboxdown dropboxdown`

### Use

```js
var PouchDB = require('pouchdb-browser')
PouchDB.plugin(require('pouchdb-adapter-dropboxdown'))
var db = new PouchDB('mydb', {
  adapter: 'dropboxdown',
  root: '<root folder>',
  accessToken: '<dropbox access token>',
})

db.put('foo', 'bar')
```

## License

[MIT](./LICENSE) © 2018-present [Practical Porpoise](https://github.com/maxogden).

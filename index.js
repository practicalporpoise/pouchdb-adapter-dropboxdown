const CoreLevelPouch = require('pouchdb-adapter-leveldb-core')
const DropboxDown = require('dropboxdown')

function DropboxDownPouch(opts, callback) {
  var _opts = Object.assign({ db: DropboxDown }, opts)
  CoreLevelPouch.call(this, _opts, callback)
}

DropboxDownPouch.valid = function() {
  return true
}

DropboxDownPouch.use_prefix = false

export default function(PouchDB) {
  PouchDB.adapter('dropboxdown', DropboxDownPouch, true)
}

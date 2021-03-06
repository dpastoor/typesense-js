'use strict'

import Collections from './Collections'
import Documents from './Documents'
import Document from './Document'
import ApiCall from './ApiCall'

class Collection {
  constructor (configuration, name) {
    this._configuration = configuration
    this._name = name
    this._documents = new Documents(this._configuration, this._name)
    this._individualDocuments = {}
  }

  retrieve () {
    return new ApiCall(this._configuration).get(this._endpointPath())
  }

  delete () {
    return new ApiCall(this._configuration).delete(this._endpointPath())
  }

  documents (documentId) {
    if (documentId === undefined) {
      return this._documents
    } else {
      if (this._individualDocuments[documentId] === undefined) {
        this._individualDocuments[documentId] = new Document(this._configuration, this._name, documentId)
      }
      return this._individualDocuments[documentId]
    }
  }

  _endpointPath () {
    return `${Collections.RESOURCEPATH}/${this._name}`
  }
}

module.exports = Collection

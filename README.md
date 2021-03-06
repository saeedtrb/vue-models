# vue-models

[![Version](https://img.shields.io/npm/v/vue-models.svg)](#)
[![Build](https://travis-ci.org/nickforddesign/vue-models.svg?branch=master)](#)
[![Coverage Status](https://coveralls.io/repos/github/nickforddesign/vue-models/badge.svg?branch=master)](https://coveralls.io/github/nickforddesign/vue-models?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> A better models plugin for Vue.js

## Installation

``` bash
npm install vue-models
```

## Demo

Clone the repository and run `npm start` or view a live demo [here](https://cdn.rawgit.com/nickforddesign/vue-models/70cc0921/dist/index.html).

## Setup

```js
import Vue from 'vue'
import VueModels from 'vue-models'

Vue.use(VueModels)
```

## Models

The Model class returns a Vue instance with some default helper methods and computed properties. The following is an example of extending the Model class:

```js
import { Model } from 'vue-models'

export class User extends Model {
  static defaults() {
    return {
      name: 'user',
      computed: {
        full_name() {
          return `${this.first_name} ${this.last_name}`
        }
      }
    }
  }
  static schema() {
    return {
      first_name: {
        type: String
      },
      last_name: {
        type: String
      }
    }
  }
}

```

```js
import UserModel from './models/user'

const user = new UserModel({
  first_name: 'Jane',
  last_name: 'Doe'
})

console.log(user.full_name) // returns 'Jane Doe'

```

## Computed Properties

The Model class has some default methods and computed attributes that are useful for basic CRUD operations, but can be overrided by passing options to the constructor:

### Model.basePath

An overwriteable property that defaults to the name of the model (with rudimentary pluralization). To override the default value, either pass a new one as a computed property, or in the root level of the options.

For a custom static basePath:

```js
import { Model } from 'vue-models'

export class Property extends Model {
  static defaults() {
    return {
      name: 'property',
      basePath: 'properties'
    }
  },
  static schema() {
    return {}
  }
}

```

Or a computed basePath:

```js
import { Model } from 'vue-models'

export class User extends Model {
  static defaults() {
    return {
      name: 'user',
      computed: {
        basePath() {
          return `${this.role}s`
        }
      }
    }
  }
  static schema() {
    return {
      role: {
        type: String
      }
    }
  }
}

```

### Model.urlRoot

A computed property that defaults to ${basePath}/${id}, (ie. /users/12345678). This will be used for all CRUD operations except create, which will not have access to an id.

### Model.url

Returns either the basePath if the model is new, or the urlRoot if the model already has an id. This is used for all CRUD operations. If overrided, this property will be used for all CRUD operations.
<!-- An overwriteable attribute that is used for XHR requests. This will override the construction of the urls used for all CRUD operations. -->

### Model.isNew

Based on whether or not the model has an id. Affects whether or not Model.save is a POST or PUT.

## Methods

### Model.fetch()

Fetches the model via a GET at Model.url

### Model.save(data, options)

Data must be valid json, options may contain a `path` property in order to deviate from the standard urlRoot.

### Model.destroy()

Sends a DELETE request for the model.

### Model.reset()

Uses the schema definition to reset all values to their default values.

### Model.toJSON()

Returns all approved data attributes, in addition to all computed properties as json.


## Binding to Vue components

Models can be bound to a Vue component using the following syntax:

```js
export default {
  models: {
    user() {
      return new UserModel(data)
    }
  },
  created() {
    console.log(this.$user.full_name);
  }
}
```

NOTE: By default, models are reset when the parent component is destroyed. To disable this, the `persist: true` option can be provided in the model options.

## Schema

Model classes use a static schema method to defined the initial data properties for the Vue instance. The schema format is heavily influenced by JSON Schema, with few differences. JSON Schema is frequently used for validation, while `vue-models` uses a schema to define initial state, and to transform data. Data can be transformed by creating custom type classes that mimic the behavior of the native constructors. Run the demo for a comprehensive example of data transformation that handles extended JSON ObjectIds and ISODates.

The following is an example of some nested structures in a schema definition. It should look familar to those who have used JSON Schema.

```js
import { Model } from 'vue-models'

export class User extends Model {
  static defaults() {
    return {
      name: 'user'
    }
  }
  static schema() {
    return {
      preferences: {
        type: Object,
        properties: {
          notifications: {
            type: Object,
            properties: {
              email: {
                type: Boolean
              },
              text: {
                type: Boolean
              }
            }
          },
          privacy: {
            type: Object,
            properties: {
              sendBugReports: {
                type: Boolean,
                default: true
              }
            }
          }
        }
      },
      friends: {
        type: Array,
        items: {
          type: Object,
          properties: {
            id: {
              type: String
            }
          }
        }
      }
    }
  }
}
```

NOTE: By default, `vue-models` will print warnings in the console is data is set on a model without a matching schema definition. This is particularly important for root-level keys, which Vue will not be able to make reactive. To disable these warnings, pass `schemaWarnings: false` as an option when initting the plugin with Vue.

```js
import Vue from 'vue'
import VueModels from 'vue-models'

Vue.use(VueModels, {
  schemaWarnings: false
})
```

## Types

Below is an example of creating a custom type for converting MongoDB entended json ISODates to friendlier locale strings. The MongoDB date key `$date` is passed to the parent class, `Type`, so that the `ISODate` class knows where to look for the value. The `in` method defined how the data should be validated and processed before setting the state, and the `out` method defines how the data should be transformed before encoding or saving the model.

```js
import { Type } from 'vue-models'

export class ISODate extends Type {
  constructor(value) {
    super(value, '$date')
    return this
  }
  in(value) {
    const parsed = new Date(value)
    if (!isNaN(parsed.getTime())) {
      this.value = value
    } else {
      throw new TypeError(`Invalid date: "${value}"`)
    }
  }
  out() {
    return this.value
      ? new Date(this.value).toLocaleString()
      : undefined
  }
}

```

## Requests

This plugin uses the [`vue-requests`](http://github.com/nickforddesign/vue-requests) plugin, which is a wrapper around the fetch API and includes the [`whatwg-fetch`](https://github.com/github/fetch) polyfill.

## Build Setup

``` bash
# install dependencies
npm install

# serve demo at localhost:8080
npm start

# run tests with jest
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
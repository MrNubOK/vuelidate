import { isRef } from '@vue/composition-api'

export function isFunction (val) {
  return typeof val === 'function'
}

export function isObject (val) {
  return val !== null && (typeof val === 'object' || isFunction(val))
}

/**
 * Unwraps a ref, returning its value
 * @param val
 * @return {*}
 */
export function unwrap (val) {
  return isRef(val) ? val.value : val
}

/**
 * @typedef ValidatorObject
 * @property {Function} $validator
 * @property {Function|String} $message
 * @property {Object|Array} $params
 */

/**
 * Returns a standard ValidatorObject
 * Wraps a plain function into a ValidatorObject
 * @param {ValidatorObject|Function} validator
 * @return {ValidatorObject}
 */
export function getValidatorObj (validator) {
  return isFunction(validator.$validator)
    ? validator
    : {
      $validator: validator
    }
}

/**
 * Returns whether a value is truthy ot not.
 * @param {Function|*} prop
 * @return {boolean}
 */
export function isTruthy (prop) {
  prop = unwrap(prop)
  return Boolean(isFunction(prop) ? prop() : prop)
}

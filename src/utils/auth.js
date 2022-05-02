import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '../constant/index'
import { setItem, getItem } from './storage'

export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

export function isCheckTimeout() {
  var currentTime = Date.now()
  var timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}

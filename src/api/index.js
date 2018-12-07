// TODO: replace with backend calls ...
// Defaults until backend is in place
const defaultHistoryData = [{}]
const defaultSkillsData = []
const defaultThemeData = {
  darkPrime: '#333054',
  medPrime: '#6761A8',
  lightPrime: '#9C93FF',
  darkNeutral: '#B1B1B1',
  medNeutral: '#E2E2E2',
  lightNeutral: '#F9F9F9',
  accent: '#ABFAFF'
}

class API {
  _endpoint
  _defaultData
  _localStorageKey
  _isDataSaved = false

  constructor(endpoint, defaultData) {
    this._endpoint = endpoint
    this._defaultData = defaultData

    this._localStorageKey = `${endpoint.toUpperCase()}_LOCAL_KEY`
    this._isDataSaved = localStorage.getItem(this._localStorageKey) !== null
  }

  // TODO: fix to call an API backend instead of 
  getData() {
    return this._isDataSaved ?
      localStorage.getItem(this._localStorageKey) :
      this._updatedAndReturn(this._defaultData)
  }

  // TODO: fix to call an API backend instead of 
  postData(data) {
    this._updatedAndReturn(data)
  }

  // TODO: fix once API is in
  _updatedAndReturn(data) {
    localStorage.setItem(this._localStorageKey, data)

    return localStorage.getItem(this._localStorageKey)
  }
}

export default {
  history: new API('history', defaultHistory),
  skills: new API('skills', defaultSkills),
  theme: new API('theme', defaultTheme)
}
// TODO: replace with backend calls ...
// Defaults until backend is in place
import tempPageData from './temp-data/page.data'
import tempThemeData from './temp-data/theme.data'

class API {
  getEndpoint
  getDefaultData
  getLocalStorageKey
  getIsDataSaved

  constructor(endpoint, defaultData) {
    let _endpoint = endpoint
    let _defaultData = JSON.stringify(defaultData)
    let _localStorageKey = `${endpoint.toUpperCase()}_LOCAL_KEY`
    let _isDataSaved = localStorage.getItem(_localStorageKey) !== null

    this.getEndpoint = () => _endpoint
    this.getDefaultData = () => _defaultData
    this.getLocalStorageKey = () => _localStorageKey
    this.getIsDataSaved = () => _isDataSaved
  }

  // TODO: fix to call an API backend instead of 
  getData() {
    return this.getIsDataSaved() ?
      localStorage.getItem(this.getLocalStorageKey()) :
      this.updateAndReturn(this.getDefaultData())
  }

  // TODO: fix to call an API backend instead of 
  postData(data) {
    data = JSON.stringify([data])
    this.updateAndReturn(data)
  }

  resetData() {
    const data = JSON.stringify([this.getDefaultData()])
    this.updateAndReturn(data);
  }

  // TODO: fix once API is in
  updateAndReturn(data) {
    localStorage.setItem(this.getLocalStorageKey(), data)

    return localStorage.getItem(this.getLocalStorageKey())
  }
}

export const pages = new API('pages', tempPageData)
export const theme = new API('theme', tempThemeData)
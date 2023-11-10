class Fetcher {
  private static isUseJWT = false
  private static accessToken: string = ""
  private static defaultHeader = {
    "Content-Type": "application/json"
  }
  static withJWT() {
    Fetcher.accessToken = localStorage.getItem('accessToken') || ''
    Fetcher.isUseJWT = true
    return Fetcher
  }
  private static initJWT() {
    Fetcher.accessToken = ''
    Fetcher.isUseJWT = false
  }
  static get(url: string, query: Record<string, string> | undefined, isJson: false): Promise<Response>
  static get<T = any>(url: string, query?: Record<string, string>, isJson?: undefined | true): Promise<T extends undefined ? any : T>
  static get(url: string, query: Record<string, string> | undefined, isJson = true) {
    const headers = Fetcher.isUseJWT ? { 'Authorization': Fetcher.accessToken, ...Fetcher.defaultHeader } : Fetcher.defaultHeader
    const config = {
      method: 'GET',
      headers: headers
    }
    Fetcher.initJWT()
    return (
      isJson ?
        fetch(url + new URLSearchParams(query), config).then(res => res.json()) :
        fetch(url + new URLSearchParams(query), config)
    )
  }

  static post(url: string, params: any, isJson: false): Promise<Response>
  static post<T = any>(url: string, params?: any, isJson?: undefined | true): Promise<T extends undefined ? any : T>
  static post(url: string, params: any, isJson = true) {
    const headers = Fetcher.isUseJWT ? { 'Authorization': Fetcher.accessToken, ...Fetcher.defaultHeader } : Fetcher.defaultHeader
    const config = {
      method: 'POST',
      body: JSON.stringify(params),
      headers: headers
    }
    Fetcher.initJWT()
    return (
      isJson ?
        fetch(url, config).then(res => res.json()) :
        fetch(url, config)
    )
  }
}

export default Fetcher
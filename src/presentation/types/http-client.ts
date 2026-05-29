export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface FetchOptions {
  method?: HttpMethod
  body?: unknown
  headers?: Record<string, string>
  accessToken?: string
}
import { ApiError } from '@/presentation/types/auth'
import type { FetchOptions } from '../types/http-client'

const BASE_URL = process.env.API_URL ?? 'http://localhost:3333'

export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

export async function httpClient<T>(
  path: string,
  options: FetchOptions = {},
): Promise<T> {
  const { method = 'GET', body, headers = {}, accessToken } = options

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  }

  if (accessToken) {
    requestHeaders['Authorization'] = `Bearer ${accessToken}`
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const error: ApiError = await response.json().catch(() => ({
      message: 'Erro inesperado. Tente novamente.',
      statusCode: response.status,
    }))

    throw new HttpError(response.status, error.message)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}
import {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  AuthUser,
} from '@/presentation/types/auth'

export async function loginService(data: LoginRequest): Promise<AuthUser> {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const json = await res.json()
  if (!res.ok) throw new Error(json.error ?? 'Erro ao fazer login.')
  return json.user
}

export async function registerService(data: RegisterRequest): Promise<AuthUser> {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const json = await res.json()
  if (!res.ok) throw new Error(json.error ?? 'Erro ao criar conta.')
  return json.user
}

export async function logoutService(): Promise<void> {
  await fetch('/api/auth/logout', { method: 'POST' })
}

export async function refreshTokenService(refreshToken: string): Promise<AuthUser> {
  const res = await fetch('/api/auth/refresh-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.error ?? 'Erro ao renovar token.')
  return json.user
}

export async function forgotPasswordService(data: ForgotPasswordRequest): Promise<string> {
  const res = await fetch('/api/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const json = await res.json()
  if (!res.ok) throw new Error(json.error ?? 'Erro ao solicitar redefinição.')
  return json.message
}

export async function resetPasswordService(data: ResetPasswordRequest): Promise<string> {
  const res = await fetch('/api/auth/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const json = await res.json()
  if (!res.ok) throw new Error(json.error ?? 'Erro ao redefinir senha.')
  return json.message
}
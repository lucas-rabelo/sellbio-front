export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
  confirmPassword: string
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface LoginResponse extends AuthTokens {
  user: AuthUser
}

export interface RegisterResponse extends AuthTokens {
  user: AuthUser
}

export interface RefreshTokenResponse extends AuthTokens {}

export interface ValidateTokenResponse {
  valid: boolean
  user?: AuthUser
}

export interface AuthUser extends AuthTokens {}

export interface ApiError {
  message: string
  statusCode: number
}
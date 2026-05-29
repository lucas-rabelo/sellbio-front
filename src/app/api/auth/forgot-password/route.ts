import { NextRequest, NextResponse } from 'next/server'
import { forgotPasswordService } from '@/presentation/services/auth.service'
import { HttpError } from '@/presentation/lib/http-client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    await forgotPasswordService(body)

    return NextResponse.json(
      { message: 'Se o e-mail estiver cadastrado, você receberá as instruções.' },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json({ error: error.message }, { status: error.statusCode })
    }
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
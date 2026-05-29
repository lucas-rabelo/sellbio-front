import { NextRequest, NextResponse } from 'next/server'
import { resetPasswordService } from '@/presentation/services/auth.service'
import { HttpError } from '@/presentation/lib/http-client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    await resetPasswordService(body)

    return NextResponse.json(
      { message: 'Senha alterada com sucesso.' },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof HttpError) {
      return NextResponse.json({ error: error.message }, { status: error.statusCode })
    }
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
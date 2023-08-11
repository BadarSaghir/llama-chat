import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    
    const prompt = searchParams.get('prompt') as string

   console.log(searchParams)
    return NextResponse.json({ message:prompt })

}
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Test endpoint hit!');
  return NextResponse.json({ message: 'API is working!' });
}

import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json('Get task');
}

export function POST() {
    return NextResponse.json('Create task');
}
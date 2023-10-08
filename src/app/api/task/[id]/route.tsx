import { NextResponse } from "next/server";

export function GET(request: any, { params }:any){
    return NextResponse.json('Get task '+params.id)
}

export function PUT(request: any, { params }:any){
    return NextResponse.json('Update task '+params.id)
}

export function DELETE(request: any, { params }:any){
    return NextResponse.json('Delete task '+params.id)
}
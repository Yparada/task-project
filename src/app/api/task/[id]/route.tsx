import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: any) {
    const task = await prisma.task.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    return NextResponse.json(task);
}

export async function PUT(request: any, { params }: any) {
    const data = await request.json();
    const taskUpdated = await prisma.task.update({
        where: {
            id: parseInt(params.id)
        },
        data: data
    })
    return NextResponse.json(taskUpdated);
}

export async function DELETE(request: any, { params }: any) {
    try {
        const taskRemoved = await prisma.task.delete({
            where: {
                id: parseInt(params.id)
            }
        });
        return NextResponse.json(taskRemoved);
    } catch (error: any) {
        return NextResponse.json(error.message);

    }
}
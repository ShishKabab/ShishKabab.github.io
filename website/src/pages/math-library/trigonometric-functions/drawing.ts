import { AABB, RawVec2, Vec2 } from "./types";
import { aabbSize } from "./utils";

export function drawRectBorders(ctx: CanvasRenderingContext2D, aabb: AABB, borderWidth: number) {
    const rectSize = aabbSize(aabb)
    ctx.fillRect(aabb.min.x, aabb.min.y, rectSize.x, borderWidth); // top
    ctx.fillRect(aabb.max.x - borderWidth, aabb.min.y, borderWidth, rectSize.y); // right
    ctx.fillRect(aabb.min.x, aabb.max.y - borderWidth, rectSize.x, borderWidth); // bottom
    ctx.fillRect(aabb.min.x, aabb.min.y, borderWidth, rectSize.y); // left
}

export function drawFilledCircle(ctx: CanvasRenderingContext2D, pos: Vec2, radius: number) {
    ctx.beginPath()
    ctx.arc(
        pos.x,
        pos.y,
        radius,
        0,
        Math.PI * 2
    )
    ctx.fill()
}

export function drawFilledRect(ctx: CanvasRenderingContext2D, aabb: AABB) {
    const rectSize = aabbSize(aabb)
    ctx.fillRect(aabb.min.x, aabb.min.y, rectSize.x, rectSize.y)
}

export function drawLine(ctx: CanvasRenderingContext2D, fromPos: Vec2, toPos: Vec2) {
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(fromPos.x, fromPos.y)
    ctx.lineTo(toPos.x, toPos.y)
    ctx.stroke()
}

export function drawText(ctx: CanvasRenderingContext2D, pos: RawVec2, text: string) {
    ctx.translate(pos.x, pos.y)
    ctx.scale(1, -1)
    ctx.fillText(text, 0, 0)
    ctx.scale(1, -1)
    ctx.translate(-pos.x, -pos.y)
}
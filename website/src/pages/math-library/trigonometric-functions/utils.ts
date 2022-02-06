import { AABB, Vec2, RawVec2 } from "./types";

export function aabbSize(aabb: AABB): Vec2 {
    return aabb.max.minus(aabb.min)
}

export function aabbContains(aabb: AABB, pos: RawVec2) {
    return (
        pos.x >= aabb.min.x && pos.x <= aabb.max.x &&
        pos.y >= aabb.min.y && pos.y <= aabb.max.y
    )
}

export function aabbHalfSize(aabb: AABB) {
    return aabb.max.minus(aabb.min).divScalar(2)
}

export function aabbCenter(aabb: AABB, halfSize?: Vec2) {
    return aabb.min.plus(halfSize ?? aabbHalfSize(aabb))
}

export function aabbOverlap(a: AABB, b: AABB) {
    const halfSizeA = aabbHalfSize(a)
    const halfSizeB = aabbHalfSize(b)
    const centerA = aabbCenter(a, halfSizeA)
    const centerB = aabbCenter(b, halfSizeB)
    return (
        Math.abs(centerA.x - centerB.x) < halfSizeA.x + halfSizeB.x &&
        Math.abs(centerA.y - centerB.y) < halfSizeA.y + halfSizeB.y
    )
}

export function aabbFromPoint(point: Vec2, size: Vec2): AABB {
    const halfSize = size.divScalar(2);
    return { min: point.minus(halfSize), max: point.plus(halfSize) }
}

export function radiansToDegrees(radians: number) {
    return radians * 180 / Math.PI
}

export function degreesToRadians(degrees: number) {
    return degrees * Math.PI / 180
}

export interface RawVec2 {
    x: number
    y: number
}

export class Vec2 implements RawVec2 {
    constructor(public x: number, public y: number) { }

    static fromObject({ x, y }: RawVec2) {
        return new Vec2(x, y)
    }

    plus(other: RawVec2) {
        return new Vec2(this.x + other.x, this.y + other.y)
    }

    minus(other: RawVec2) {
        return new Vec2(this.x - other.x, this.y - other.y)
    }

    divScalar(scalar: number) {
        return new Vec2(this.x / scalar, this.y / scalar)
    }

    divComponents(other: RawVec2) {
        return new Vec2(this.x / other.x, this.y / other.y)
    }

    mulScalar(scalar: number) {
        return new Vec2(this.x * scalar, this.y * scalar)
    }

    mulComponents(other: RawVec2) {
        return new Vec2(this.x * other.x, this.y * other.y)
    }

    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    normalized() {
        return this.divScalar(this.magnitude())
    }

    inverted() {
        return new Vec2(-this.x, -this.y)
    }

    isZero() {
        return this.x === 0 && this.y === 0
    }

    angle() {
        return Math.atan2(this.y, this.x)
    }

    rotated(radians: number) {
        return new Vec2(
            Math.cos(radians) * this.x - Math.sin(radians) * this.y,
            Math.sin(radians) * this.x + Math.cos(radians) * this.y
        )
    }

    copy() {
        return new Vec2(this.x, this.y)
    }
}

export interface AABB {
    min: Vec2
    max: Vec2
}

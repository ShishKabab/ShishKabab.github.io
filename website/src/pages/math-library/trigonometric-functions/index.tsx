import React from "react"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import * as drawing from "./drawing"
import { AABB, Vec2 } from "./types"
import { degreesToRadians, radiansToDegrees } from "./utils"

export default class TrigonometricFunctions extends React.Component {
    canvasRef = React.createRef<HTMLCanvasElement>()
    program: Program | null = null

    constructor(props: {}) {
        super(props)
    }

    componentDidMount() {
        this.maybeInitApp()
    }

    componentWillUnmount() {
        this.maybeDestroyApp()
    }

    maybeInitApp() {
        const canvas = this.canvasRef.current
        if (canvas) {
            this.program = initApp(canvas)
        }
    }

    maybeDestroyApp() {
        if (this.program) {
            return destroyApp(this.program)
        }
    }

    async componentDidUpdate() {
        await this.maybeDestroyApp()
        this.maybeInitApp()
    }

    render() {
        return (
            <Layout>
                <SEO title="Math library - Trigonometric functions" />
                <canvas ref={this.canvasRef} />
            </Layout>
        )
    }
}

enum AngleUnit {
    Radians,
    Degrees,
}

interface Program {
    stoppedCallback?(): void
    ctx: CanvasRenderingContext2D
    canvasAABB: AABB
    startTime: number
    time: number

    angleUnit: AngleUnit
    origin: Vec2
    direction: Vec2
}

interface Frame {
    totalMilisecondsElapsed: number
    frameMilisecondsElapsed: number
    totalSecondsElapsed: number
    frameSecondsElapsed: number
}

function initApp(canvas: HTMLCanvasElement): Program | null {
    canvas.width = 500
    canvas.height = 500
    const ctx = canvas.getContext("2d")
    if (!ctx) {
        return null
    }

    const startTime = performance.now()
    const program: Program = {
        ctx,
        canvasAABB: {
            min: new Vec2(0, 0),
            max: new Vec2(canvas.width, canvas.height),
        },
        startTime,
        time: startTime,
        angleUnit: AngleUnit.Radians,
        origin: new Vec2(0, 0),
        direction: new Vec2(10, 10).normalized(),
    }

    const doFrame = () => {
        const frame: Frame = getFrame(program)

        ctx.save()
        ctx.translate(0, canvas.height)
        ctx.scale(1, -1)
        ctx.fillStyle = "#EEE"
        drawing.drawFilledRect(ctx, program.canvasAABB)
        drawDebugInfo(program, frame)

        const angle =
            program.direction.angle() +
            degreesToRadians(10) * frame.frameSecondsElapsed
        program.direction = new Vec2(Math.cos(angle), Math.sin(angle))

        ctx.translate(canvas.width / 2, canvas.height / 2)

        ctx.strokeStyle = "#000"
        const direction = program.direction.mulScalar(200)
        const A = program.origin
        const B = program.origin.plus(new Vec2(direction.x, direction.y))
        const C = program.origin.plus(new Vec2(direction.x, 0))
        drawing.drawLine(ctx, A, B)
        drawing.drawLine(ctx, A, C)
        drawing.drawLine(ctx, B, C)

        ctx.fillStyle = "#F60"
        ctx.textBaseline = "top"
        drawing.drawText(
            ctx,
            B.plus(C.minus(B).divScalar(2)).normalized().mulScalar(30),
            `${radiansToDegrees(program.direction.angle())}`
        )

        ctx.restore()

        if (!program.stoppedCallback) {
            requestAnimationFrame(doFrame)
        } else {
            program.stoppedCallback()
        }
    }
    requestAnimationFrame(doFrame)

    return program
}

function getFrame(program: Program) {
    const newTime = performance.now()
    const frameMilisecondsElapsed = newTime - program.time
    program.time = newTime
    const totalMilisecondsElapsed = newTime - program.startTime
    const frame: Frame = {
        totalMilisecondsElapsed,
        frameMilisecondsElapsed,
        totalSecondsElapsed: totalMilisecondsElapsed / 1000,
        frameSecondsElapsed: frameMilisecondsElapsed / 1000,
    }
    return frame
}

function destroyApp(app: Program) {
    return new Promise<void>(resolve => {
        app.stoppedCallback = () => resolve()
    })
}

function drawDebugInfo(program: Program, { frameMilisecondsElapsed }: Frame) {
    const { ctx } = program

    ctx.fillStyle = "#F60"
    ctx.textBaseline = "top"

    // // Screen borders
    // draw.drawRectBorders(ctx, program.canvasAABB, constants.CANVAS_BORDER_WIDTH)

    // Frame time
    drawing.drawText(
        ctx,
        { x: 10, y: program.canvasAABB.max.y - 10 },
        `Elapsed: ${frameMilisecondsElapsed}`
    )
}

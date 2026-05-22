import {useRef} from "react";
import './backgroundCircle.css'

export default function BackgroundCircle({ color, top = 60 }: { color: string, top?: number }) {
    // put this in a ref object to prevent the graphic to move when the window resizes because of the appearance of keyboard
    const refTop = useRef(((top * window.innerHeight) / 100) - 2 * window.innerWidth);

    return (
        <div
            style={{ background: color, top: refTop.current }}
            className="background-circle"
        />
    )
}

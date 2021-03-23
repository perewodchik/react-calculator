import './Display.css'

type DisplayProps = {
    content: string
}

function Display(props: DisplayProps) {
    return (
        <div className="Display">
            <span className="Display__content">{props.content}</span>
        </div>
    )
}

export default Display;
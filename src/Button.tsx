import './Button.css';

type ButtonProps = {
    content: string,
    notify: (arg0: string) => void
}

function Button(props: ButtonProps) {

    const handleClick = () => {
        props.notify(props.content);
    }

    return (
        <div className="Button" onClick={handleClick}>
            <span className="Button__content">{props.content}</span>
        </div>
    );
}

export default Button;
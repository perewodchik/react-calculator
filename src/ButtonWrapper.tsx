import './ButtonWrapper.css'
import Button from './Button'

type ButtonWrapperProps = {
    notify: (arg0: string) => void
}

function ButtonWrapper(props: ButtonWrapperProps) {
    return (
        <div className='ButtonWrapper'>
            <Button content="+" notify={props.notify}/>
            <Button content="-" notify={props.notify}/>
            <Button content="*" notify={props.notify}/>
            <Button content="/" notify={props.notify}/>

            <Button content="7" notify={props.notify}/>
            <Button content="8" notify={props.notify}/>
            <Button content="9" notify={props.notify}/>
            <Button content="^" notify={props.notify}/>

            <Button content="4" notify={props.notify}/>
            <Button content="5" notify={props.notify}/>
            <Button content="6" notify={props.notify}/>
            <Button content="CA" notify={props.notify}/>

            <Button content="1" notify={props.notify}/>
            <Button content="2" notify={props.notify}/>
            <Button content="3" notify={props.notify}/>
            <Button content="C" notify={props.notify}/>

            <Button content="0" notify={props.notify}/>
            <Button content="." notify={props.notify}/>
            <Button content="ln" notify={props.notify}/>
            <Button content="=" notify={props.notify}/>
        </div>
    )
}

export default ButtonWrapper;
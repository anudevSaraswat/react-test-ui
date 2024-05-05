export function Button({ message }) {
    
    function handleClick() {
        alert(message)
    }
    
    return (
        <button onClick={handleClick}></button>
    )
}
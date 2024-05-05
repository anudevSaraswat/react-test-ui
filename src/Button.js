export function Button({ message, children }) {
    
    function handleClick() {
        alert(message)
    }
    
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}
function Actions(probs) {
    return (
        <div>
            <button onClick={probs.plus} className="button">+</button>
            <button onClick={probs.min} className="button">-</button>
        </div>
    );
}
export default Actions;
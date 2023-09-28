import './styles/element.css';

function Element(props) {
    return (
        <>
            <div className="element-container" id={props.properties.name}>
                <div className="elementName">
                    <p>{props.properties.name}</p>
                </div>
                <div className="symbol">
                    <p>{props.properties.symbol}</p>
                </div>
                <div className="number">
                    <p>{props.properties.number}</p>
                </div>
            </div>
        </>
    )
}


export default Element;
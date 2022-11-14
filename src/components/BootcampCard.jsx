const BootcampCard = ({bootcamp}) => {
    return (
        <div className="grid col-3">
            <div className="bootcamp-name">{bootcamp.name}</div>
            <div>{bootcamp.shortDescription}</div>
            <button>Join</button>
        </div>
    )
}

export default BootcampCard
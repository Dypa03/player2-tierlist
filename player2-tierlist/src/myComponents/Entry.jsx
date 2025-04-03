export default function Entry(props) {
    

    return (
    <div className="character-entry">
        <h2>{props.rank}. {props.characterName}</h2>
        <p className="videogameReference">{props.videogameReference}</p>
        <img 
            src={props.image.src} 
            alt={props.image.alt} 
        />
        <p className="description">{props.descriptionIntro}</p>
        <p className="description">{props.description}</p>
        <p className="description">{props.descriptionSummary}</p>
        <h3 className="tier">{props.tier}</h3>
    </div>
    )
}
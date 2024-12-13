export default function Entry(props) {
    console.log(props)
    return (
        <div className="entry-item">
            <div className="img">
                <img src={props.img.src} alt="" srcSet={props.img.srcset} />
            </div>
            <div className="details">
                <section className='top'>
                    <div>
                        <img src="/placeholder.png" width='20px' alt="" srcSet="" />
                        <p>{props.country}</p>
                    </div>
                    <a href={props.googleMapsLink}><p>View on Google Maps</p></a>
                </section>
                <section className="loc">
                    <h1>{props.title}</h1>
                </section>
                <section className="bottom">
                    <p className="date">{props.dates}</p>
                    <p className="desc">{props.text}</p>
                </section>
            </div>
        </div>
    )
}
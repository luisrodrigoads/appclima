import '../styles/mainContentStyle.css';

export default function CityInfoContainer (props){

    const {city} = props;

    return(
        <main>
            <section className="info-section">
                <p className="name-city">{city.city}</p>
                <p className="main-temp">{city.temp} °c</p>
                <p className="textual-weather">{city.description}</p>
                <div className="max-min-temp-container">
                    <div className="temp">
                        <p>{city.forecast[0].min} °c</p>
                        <p>Min</p>
                    </div>
                    <div className="temp">
                        <p>{city.forecast[0].max} °c</p>
                        <p>Max</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
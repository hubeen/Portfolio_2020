import React from "react";
import "./Home.scss";
const Home = ({ ...props }) => {
    const handleClick = () => {
        props.history.push("/about");
    };

    return (
        <main className="main home nes-container is-dark is-rounded" onClick={handleClick}>
            <div className="title">
                <h1 className="title-text title-text--primary">Seunghyun Moon</h1> 
                <h1 className="title-text title-text--primary">Alfred Hubeen</h1>
                <h2 className="title-text title-text--secondary">Freelancer</h2>
                <h2 className="title-text title-text--tertiary nes-pointer flash">
                    - Click to Start -
                </h2>
            </div>
        </main>
    );

};

export default Home;
import React from "react";

export default function Representative(props) {
    return(
        <>
            {props.representative.deputes.map((elu) => {
                <article className="rep-container">
                    <div className="rep-card">
                        <header className="rep-header">
                            <h3>{}</h3>
                        </header>
                    </div>
                </article>
            })}
        </>
    )
}
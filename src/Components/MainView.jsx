import React from "react";

const MainView = () => {
    return(
        <div className="container">
            <form action="http://localhost:8080/add/images" method="post" enctype="multipart/form-data">
                <input type="file" multiple name="image"/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default MainView
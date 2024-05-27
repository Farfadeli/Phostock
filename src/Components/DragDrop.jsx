import React from "react";
import '../styles/style.css'

const DragDrop = () => {
    return (
        <form action="http://localhost:5001/upload" method="post" encType="multipart/form-data">
            <label htmlFor="import"><img src="/icons/file.png" alt=""/><p className="desc_file">Ajouter jusqu'a 1 Go d'images en les déplaçant ou en appuyant dans le carré ou en appuyant sur le boutton</p></label>
            <input type="file" multiple name="image" id="import" />
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default DragDrop
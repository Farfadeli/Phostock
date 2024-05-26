import React, { useEffect, useState } from "react";
import '../styles/style.css'
const MainView = () => {

    const [images, setImages] = useState([])

    const get_images = async () => {

        const url = "http://localhost:5001/images/"
        const api = await fetch(url)
        const data = await api.json()

        setImages(data)
        console.log(images)
    }

    useEffect(() => {
        get_images()
    },[])

    return(
        <div className="container">
            <form action="http://localhost:5001/upload" method="post" encType="multipart/form-data">
                <input type="file" multiple name="image"/>
                <button type="submit">Envoyer</button>
            </form>
            <div className="image_container">
                {console.log(images)}
                {
                    images.length == 0 ? "" : images.map(elem => <a download={elem.file_name} href={elem.file_path}><img src={elem.file_path} alt="" /></a>)
                }
            </div>
        </div>
    )
}

export default MainView
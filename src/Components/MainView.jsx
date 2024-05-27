import React, { useEffect, useState } from "react";
import '../styles/style.css'
import DragDrop from "./DragDrop";
import Header from "./Header";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div className="container">
            <Header/>
            <DragDrop />
            <h2>Les dernières photos ajoutées</h2>
            <div className="image_container">
                
                {console.log(images)}
                {
                    // eslint-disable-next-line eqeqeq
                    images.length == 0 ? "" : images.map(elem => <a download={elem.file_name} href={elem.file_path}><img src={elem.file_path} alt="" /></a>)
                }
            </div>
        </div>
    )
}

export default MainView
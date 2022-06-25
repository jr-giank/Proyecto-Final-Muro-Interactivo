import { React, useState } from "react";
import "../styles/NewPost.css";

export const NewPost = () => {

    const [preview, setPreview] = useState(null);
    const [text, setText] = useState('');

    const fileSelected = (event) => {
        const image = event.target.files[0];

        let reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        } 
        reader.readAsDataURL(image);
    }

    return(
        <div id="newPostPage">
            <section id="form-section">
                <form action="">
                    <h2>Make a post</h2>
                    <div className="form-info">
                        <label htmlFor="foto">Foto</label>
                        <input name="foto" type="file" onChange={fileSelected}/>
                    </div>
                    <div className="form-info">
                        <label htmlFor="infoPost">Comentario</label>
                        <textarea onChange={(event) => setText(event.target.value)} name="infoPost" rows="10"></textarea>
                    </div>
                    <button type="submit">Postear</button>
                </form>
            </section>
            <section id="preview">
                <div id="post-preview">
                    <img id="foto_preview" name='foto_preview' src={preview} alt="" />
                    {/* <p id="foto_preview">Aqui va la foto</p> */}
                    <p>{text}</p>
                </div>
            </section>
        </div>
    )
}
import React from "react";
import './Form.css'
import memesData from "./memesData";
export default function From() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })

    const [FormData, setFormData] = React.useState({
        topText: '',
        bottomText: ''
    })

    function handelChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });
        console.log(FormData)
    };


    function getMemeUrl(event) {
        event.preventDefault()
        const MemeArray = memesData.data.memes;
        const RandomIndex = Math.floor(Math.random() * MemeArray.length);
        const url = MemeArray[RandomIndex].url;
        setMeme(prevState => ({
            ...prevState,
            randomImage: url,
        })); // Update the state with the URL of the random meme
    }



    return (
        <div className="fromContainerDiv">
            <form>
                <div className="containAllElme">
                    <div className="inputsHolder">
                        <div className="topTextDivHolder">
                            <p className="upperText">Top text</p>
                            <input type="text" placeholder="top text" value={FormData.topText} name="topText" onChange={handelChange} />
                        </div>
                        <div className="bottomTextDivHolder">
                            <p className="upperText">bottom text</p>
                            <input type="text" placeholder="bottom text" value={FormData.bottomText} name="bottomText" onChange={handelChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="generateBtn" onClick={getMemeUrl}
                >  Get a new meme image  🖼</button>
                <div className="texts">
                    <div className="imgHandeler">
                        <h2 className="toptext">{FormData.topText}</h2>
                        <h2 className="bottomtext">{FormData.bottomText}</h2>

                    </div>

                </div>
                <img className="memeImg" src={meme.randomImage} alt="memeImg" />
            </form>



        </div>
    )
}
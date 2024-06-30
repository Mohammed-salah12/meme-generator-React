import React, { useEffect } from "react";
import './Form.css'
export default function From() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([]);



    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    function handelChange(event) {
        setMeme(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        });
        console.log(meme)
    };


    function getMemeUrl(event) {
        event.preventDefault()
        const RandomIndex = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[RandomIndex].url;
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
                            <input type="text" placeholder="top text" value={meme.topText} name="topText" onChange={handelChange} />
                        </div>
                        <div className="bottomTextDivHolder">
                            <p className="upperText">bottom text</p>
                            <input type="text" placeholder="bottom text" value={meme.bottomText} name="bottomText" onChange={handelChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="generateBtn" onClick={getMemeUrl}
                >  Get a new meme image  🖼</button>
                <div className="texts">
                    <div className="imgHandeler">
                        <h2 className="toptext">{meme.topText}</h2>
                        <h2 className="bottomtext">{meme.bottomText}</h2>

                    </div>

                </div>
                <img className="memeImg" src={meme.randomImage} alt="memeImg" />
            </form>



        </div>
    )
}
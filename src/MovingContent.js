import React, { useState } from 'react';
let arr = ["firsrt", "second", "third", "fourth", "last"];
let i = Math.floor(Math.random() * 5);
const Movingcontent = () => {

    const [imagestatus, setImagestatus] = useState("First");
    setTimeout(() => {
        setImagestatus(arr[Math.floor(Math.random() * 5)]);
    }, 2000);
    return (
        <div className="movingConatiner">
            <div className="buttoncontainer">
                <h1>
                    this is button container
                </h1>
            </div>
            <div className="itemscontainer">
                <div className="movecontainer">
                    <h1> {imagestatus}</h1>
                </div>
                <div className="writtenco">
                    <p className='darkcontainer'>Increase Your productivity</p>
                    <p className='content'>Paraphrase more text at once to finish writing faster.</p>
                    <p className='darkcontainer'>Access all modes</p>
                    <p className='content'>Get maximum control over how you paraphrase.</p>
                    <p className='darkcontainer'>Scan for plagiarism</p>
                    <p className='content'>Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</p>


                </div>
            </div>
        </div>
    )
}
export default Movingcontent
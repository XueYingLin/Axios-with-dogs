import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogList = () => {
    const [dogList, setDogList] = useState([]);

    useEffect(() => {
        axios
            .get('https://dog.ceo/api/breed/beagle/images')
            .then(res => {
                console.log("data", res.data);
                setDogList(res.data.message);
            })
    }, []);

    return (
        <div>
            {/* <img src={dogList} alt="dog picture" /> */}
            {dogList.map(dog => 
            <img src={dog} alt='dog images'/>
            )}
        </div>
    )
    


}

export default DogList;
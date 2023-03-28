import React from 'react';
import Card from '../inc/card';
import { useEffect, useState } from 'react';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1a3c5fdc288d8f4245dd5df33bc61a5d";
const DataMovie = () => {

    const [listData, setListData] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setListData(data.results);
            })
    }, [])


    return (
        <>
            {
                listData.length === 0 ? <center><h5>Loading...</h5></center> : listData.map((item) => (
                    <Card
                        key={item.id}
                        id = {item.id}
                        title={item.original_title}
                        img={'https://image.tmdb.org/t/p/w500'+item.poster_path}
                    />
                ))
            }
        </>
    );
};

export default DataMovie;
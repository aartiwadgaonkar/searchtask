import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
    const [results, setresults] = useState([])
    const [search, setsearch] = useState()
    const [page, setpage] = useState(1)
    const [Size, setSize] = useState(15)
    const fetchData = async () => {
        const { data } = await axios.get(`https://api.jikan.moe/v4/characters?page=${page}&limit=${Size}&q=${search}&order_by=favorites&sort=desc`)
        console.log(data, "data");
        setresults(data)
    }
    const handleSearch = (e) => {
        console.log(results, "res");
        fetchData()
    };
    const getData = async () => {
        const { data } = await axios.get(`https://api.jikan.moe/v4/characters?page=${page}&limit=${Size}`)
        console.log(data, "data");

        setresults(data)

    }
    useEffect(() => {
        getData()
    }, [page, Size])


    return (
        <div>
            {/* {JSON.stringify(search)} */}
            {/* {JSON.stringify(results)} */}
            {/* {JSON.stringify(results.pagination)} */}
            {/* {page} */}
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 offset-sm-3'>
                        <h2>Search Anime Characters</h2>
                        <input type="text" className='mx-3' value={search} onChange={e => setsearch(e.target.value)} />
                        <button onClick={e => handleSearch()}>Search</button>
                        {
                            results.pagination &&
                            <h4>total {results.pagination.items.total} matching anime characters found</h4>
                        }
                    </div>
                </div>
            </div>


            {
                results.pagination && results.pagination.items.count == 0
                    // results.data
                    ? <h1>No mateches found</h1>
                    : <>{results.data && results.data.map((character) => (
                        <div class="card" key={character.mal_id}>
                            {/* <li key={character.mal_id}>{character.name}</li> */}
                            <div className='d-flex justify-between'>

                                <img src={character.images.jpg.image_url} alt="" height={100} width={100} />
                                <div class="card-body d-flex justify-content-between my-5">
                                    <div>

                                        {character.name}
                                    </div>
                                    <div>
                                        <p className='ml-30'>
                                            {/* <img src={character.images.webp.small_image_url} alt="" /> */}
                                            <i class="bi bi-heart-fill"></i>
                                            {character.favorites}
                                        </p>
                                    </div>
                                    {/* favorites */}
                                </div>
                                <Link className='my-5' to={`https://myanimelist.net/character/${character.mal_id}/${character.name}`}><i class="bi bi-arrow-right"></i></Link>
                                <button onClick={e => setpage(results.pagination.current_page + 1)} className='my-5 mx-5 ' >next</button>
                            </div>
                        </div>
                    ))}
                    </>

            }


        </div>

    )
}


import React, { FormEvent, useEffect, useState } from 'react'
import './searchbar.css'
import searchIcon from '../../images/icon-search.svg'
import { userType } from '../../type/type';

type searchBarProps = {
    saveUserData: (user: userType) => void;
};

const fetchUser = async(user:string) => {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        if (!response.ok) {
            throw new Error
        }
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}


const Searchbar = (saveUserData: searchBarProps) => {
    const [user, setUser] = useState('')

    const handleUserChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        setUser(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        fetchUser(user)
        e.preventDefault()
    }
    
    return (
        <form action="" onSubmit={handleSubmit} className='search-form'>
            <img className="search-icon" src={searchIcon} alt="検索アイコン"/>
            <input type="text" className='username' placeholder='GitHubのユーザーネームで検索' onChange={handleUserChange}></input>
            <button className='search-button' onClick={handleSubmit}>検索</button>
        </form>
      )
}

export default Searchbar
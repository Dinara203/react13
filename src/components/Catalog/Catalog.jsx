import Card from "../Card/Card"
import {catalog} from '../../data.js'
import { useState } from "react"

export default function Catalog (){
    const[query, setQuery] = useState("")
    const[sorting, setSorting] = useState("")

    function search (e){
        setQuery(e.target.value)
    }

    const filterTovars = catalog.filter((item) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

    function sort(e){
        const sortValue = e.target.value
        setSorting(sortValue)
    }

    const sortTovar = (sorting, catalog) => {
        switch (sorting) {
            case 'price-asc':
               return [...catalog].sort((a,b) =>a.price - b.price)
            case 'price-desc':
                return [...catalog].sort((a,b) =>b.price - a.price)
            case 'ost-asc':
               return [...catalog].sort((a,b) =>a.ost - b.ost)
            case 'ost-desc':
                return [...catalog].sort((a,b) =>b.ost - a.ost)
            default:
                   return catalog
        }
    }

    const sortAndFilterTovar = sortTovar(sorting, filterTovars)

    return (
        <>
            <input onChange={search} type="search" name="search" placeholder="Поиск..." />
            <select onChange={sort} className="sort">
                        <option value="price-asc">Сортировать...</option>
                        <option value="price-asc">По возростанию цены</option>
                        <option value="price-desc">По убыванию цены</option>
                        <option value="ost-asc">По остатку в порядке возростания</option>
                        <option value="ost-desc">По остатку в порядке убывания</option>
                </select>
            <div className="catalog-content">
                
                {
                    sortAndFilterTovar.length ?
                    sortAndFilterTovar.map((card,index)=>{
                        return(
                            <Card key={index} {...card}/>
                        )
                    })
                    :
                    <h2>По вашему запросу "{query}" ничего не найдено</h2>


                }
            </div>
        </>
    )
}
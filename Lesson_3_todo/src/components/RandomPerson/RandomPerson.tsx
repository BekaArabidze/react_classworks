import "./style.css"

import { useState, useEffect } from "react"
import RandomPersonJson from "./random_person.json"
import Icons from "./Icons"



const RandomPerson = () => {
    const [randPerson, _] = useState(RandomPersonJson);
    const [index, setIndex] = useState(0)

    const [info, setInfo] = useState({
        type: "name",
        param: randPerson[index].first_name
    })


    function randomIndex() {
        return Math.floor(Math.random() * randPerson.length)
    }


    function getRandomPerson() {
        let index = randomIndex()
        getInfo("name", randPerson[index].first_name)
        setIndex(index)
    }


    function getInfo(type: string, param: string) {
        if (type === "age") {
            let getYear = param.split("-")[0];
            let getCurrentYear = new Date().getFullYear();
            let age = getCurrentYear - parseInt(getYear);

            setInfo(_ => ({
                type: type,
                param: age.toString()
            }))

        } else {
            setInfo(_ => ({
                type: type,
                param: param
            }))
        }
    }


    return (
        <>
            <div className="container">

                <img className="avatar"
                    src={randPerson[index].avatar}
                    alt={randPerson[index].first_name}
                />
                <h1>My {info.type} is {info.param}</h1>

                <Icons index={index} randPerson={randPerson} getInfo={getInfo} />
            </div>

            <button onClick={() => getRandomPerson()} >random person</button>
        </>
    )
}

export default RandomPerson
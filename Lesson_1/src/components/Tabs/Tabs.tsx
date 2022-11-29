import { useState } from "react"

const Tabs = () => {
    const [tabs, _] = useState([
        {
            name: "Tommy",
            body: "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt."
        },
        {
            name: "Bigdrop",
            body: "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid."
        },
        {
            name: "Cuker",
            body: "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
        }
    ])

    const [index, setIndex] = useState(0)


    const changeBody = (id: number) => {
        setIndex(id)
    }

    return (
        <>
            {tabs.map((tabs, i) => (
                <button key={i} onClick={() => changeBody(i)}>
                    {tabs.name}
                </button>
            ))}
            <h1>
                {tabs[index].name}
            </h1>
            <p>
                {tabs[index].body}
            </p>
        </>
    )
}

export default Tabs
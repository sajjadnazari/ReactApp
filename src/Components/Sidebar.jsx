import React from 'react'
import Links from './Links'
const links = [
    "Esd",
    "Bsdasd"
]

export default function Sidebar(props) {
    return (
        <aside>
            <ul>
                <Links links={links} />
            </ul>
        </aside>
    )
}


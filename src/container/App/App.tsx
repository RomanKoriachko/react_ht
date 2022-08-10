import React from 'react'

type Props = {
    title: string
}

const AppList = () => {
    return (
        <ul>
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
        </ul>
    )
}

const AppHeader = (props: Props) => {
    console.log(props)
    return <h1>Hello {props.title}</h1>
}

const App = () => {
    return (
        <>
            <AppHeader title="App.js" />
            <AppHeader title="React js" />
            <AppList />
        </>
    )
}

export default App

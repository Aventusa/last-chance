import React from 'react'
import { YMInitializer } from 'react-yandex-metrika';
import Title from './components/Title/Title';
import TextForm from './components/TextFrom/TextForm';
import Footer from './components/Footer/Footer';
import Comment from './components/Comment/Comment';
import './App.sass'


function App() {
    const url = 'http://last-chance/'

    window.onblur = changeTitle
    window.onfocus = changeTitle

    function changeTitle() {
        document.title === 'Оставь коммент ;)'
            ? document.title = 'Куда же ты :c'
            : document.title = 'Оставь коммент ;)'
    }

    return (
        <div className="app">
            <YMInitializer accounts={[71367655]} />
            <Title/>
            <TextForm url={url}/>
            <Comment url={url}/>
            <Footer/>
        </div>
    );
}

export default App;

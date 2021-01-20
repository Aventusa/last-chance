import React from 'react'
import './App.sass'
import Title from './components/Title/Title';
import TextForm from './components/TextFrom/TextForm';
import Footer from './components/Footer/Footer';
import Comment from './components/Comment/Comment';


function App() {

    window.onblur = changeTitle
    window.onfocus = changeTitle

    function changeTitle() {
        document.title === 'Оставь коммент ;)'
            ? document.title = 'Куда же ты :c'
            : document.title = 'Оставь коммент ;)'

    }

    return (
        <div className="App">
            <Title/>
            <TextForm/>
            <Comment/>
            <Footer/>
        </div>
    );
}

export default App;

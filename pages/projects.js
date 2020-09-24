import Link from 'next/link'
import Layout from '../component/Layout'
import './App.css'
export default () => {
    return (
        <Layout>
            <h1>Past Projects</h1>

            <br />
            <p>I have worked on multiple projects in the past as part of my software development course. See list below</p>
            <br />

            <h3>Online store Project</h3>
            <p>This is an online store with which the user can select the items they want, add to cart and check out.</p>
            <p>Click <a href="https://github.com/kciano/Online-Store-project">here</a> to view the project on Github</p>
            
            <br /><br />
            <h3>Minesweeper</h3>
            <p>This is the famous Minesweeper game on Microsoft Windows games section</p>
            <p>Click <a href="https://github.com/kciano/Minesweeper">here</a> to view the project on Github</p>
            <p>Click <a href="https://minesweeper007.herokuapp.com/">here</a> to play the game</p>

            <br /><br />
            <h3>Itunes Search</h3>
            <p>This is an application that allows you to search the Itunes database for music, books, podcasts etc</p>
            <p>Click <a href="https://github.com/kciano/Itunes-search">here</a> to view the project on Github</p>
            
             <br /><br />
            <h3>Doctor Appointment Management</h3>
            <p>This is an application that allows users to manage Appointment and Patient's details. On the app, there are two types of users, Admin and Subcriber. The subcriber has a read only account with which they can only view patient and appointment details, whereas admins have full rights where they can create and cancel appointments, and also create, edit and delete patients</p>
            <p>Click <a href="https://github.com/kciano/docmanage">here</a> to view the project on Github</p>
        </Layout>
    );

}

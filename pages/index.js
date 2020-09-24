import Link from 'next/link'
import Layout from '../component/Layout'
import Image from 'react-bootstrap/Image'
import './App.css'


export default () => {

    return (
        <Layout>
 
            <div>
                <h1>Welcome to my Portfolio</h1>

                <br />

                <Image src='../static/profile.jpeg' thumbnail className="imageClass" />
                <p>Please use the Menu bar to navigate</p>

            </div>

        </Layout>
    );

}
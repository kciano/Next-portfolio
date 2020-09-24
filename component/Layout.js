import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const Layout = (props) => {
    return (
        <div>
            <head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                />
            </head>

            <div>
                <Header />
                {props.children}
            </div>
        </div>
    );

}

export default Layout

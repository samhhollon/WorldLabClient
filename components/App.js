import Head from 'next/head'

export default ({ children }) => (
    <main>
        <Head>
            <title>WorldLab</title>

            {/* Materialize CSS */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"/>
            {/* Materical Design Icons */}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </Head>
        
        {children}
        
        <style jsx global>{`
            body {
                background-color: #424242;
                color: #ffffff;
            }
            .navPadding {
                padding-left: 15px;
                padding-right: 10px;
            }
        `}</style>
    </main>
)
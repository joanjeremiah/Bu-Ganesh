import React from "react";

const Artist = ({stickyRef}) => {
    return (
        <div id="artist-section" className="artist-container" ref={stickyRef}>
            <div className="artist">
                <h1>The Artist</h1>
                <p>Traditional Padantaram and Tonal opulence are the hallmarks
                    of Basavanahalli Umakanth Ganesh Prasad’s concert
                    experience.
                    An outstanding violinist, a gifted vocalist and a passionate
                    teacher, Ganesh Prasad, as a teenager, commuted between
                    Bangalore and Chennai to realise his ambition to perfect his
                    violin skills under the guidance of the redoubtable Prof V V
                    Subrahmanyam. The Guru recognised an Ekalavya in the
                    earnest disciple and imparted the nuances of the instrument and
                    subtleties of Carnatic music. His earlier training under
                    Basavanagudi G Nataraj and Bangalore S Shankar matured very
                    soon and a first- rate musician arrived on the scene.
                    Ganesh Prasad continued his advanced lessons in vocal
                    music under Sangeetha Kalacharya Padma bhushan
                    P.S.Narayanaswamy. This has complemented his instrumental
                    skills and enriched his repertoire, adding an insightful dimension
                    to his music.
                    Blessed with perfect Sruthi and an innate sense of rhythm,
                    Ganesh Prasad is in great demand as an accompanist. He has
                    provided inspired support to eminent musicians, present and
                    past – D.K Pattamal, K.V.Narayanaswamy, Dr.
                    M.Balamuralikrishna, Dr.R.K.Srikantan, Dr.K.J.Yesudas,
                    T.V.Shankarnarayanan, Madurai
                    T.N.Sheshagopalan,Chitraveena Ravikiran, Sudha
                    Raghunathan, Bombay Jayashree, Sanjay Subramanyam,
                    T.M.Krishna, Abhishek Raghuram, among others.
                    He is an A grade artist of All India Radio and Doordarshan. He
                    has also performed as a solo Violinist and has given vocal
                    concerts around the world.
                </p>
            </div>
        </div>
    );
}

export default Artist;
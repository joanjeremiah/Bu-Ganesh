import React from "react";

const Artist = ({ stickyRef }) => {
    return (
        <div id="artist-section" className="artist-container" ref={stickyRef}>
            <div className="artist">
                <h1>The Artist</h1>
                <p>Vidwan B U Ganesh Prasad began his carnatic music training at the age of
                    six on the violin under Vidwan Basavanagudi G Nataraj,and later,vocal
                    music under Vidwan Bangalore S Shankar. With this solid foundation,he
                    sought advanced training in Chennai under Kalai Mamani Prof V V
                    Subramanyam and Sangita Kalacharya P S Narayanaswamy. Since then he has
                    never looked back.He has established himself as a distinguished vocalist
                    and a champion violinist,(solo and accompaniment) performing regularly at
                    several national and international music festivals and reputable stages.
                    Vidwan Ganesh Prasad is able to conflate the authentic vocal music
                    experience and sublime instrumental manodharma in his concerts. His
                    performances bring the memories of the old doyens of carnatic music and
                    set the benchmark for the contemporary practitioners of the art. His
                    adherence to traditional grammar,combined with soulful renditions from his
                    rich repertoire,can take the devout students of carnatic music on an
                    unforgettable pilgrimage in aesthetics.
                </p>
                <p>
                    On the violin,he has accompanied great stalwarts,past and present: D
                    K Pattammal, KVN, DR Balamuralikrishna Dr R K Srikantan Dr K J Yesudas,
                    TV Sankaranarayanan, Madurai T N Seshagopalan Chitraveena Ravikiran, Flute Shashank,
                    Sanjay Subrahmanyam, T M Krishna, Abhishek Raghuram,to name a few.His
                    accolades include best violinist awards from Madras Music Academy,Ananya
                    Puraskar award,Maharajapuram Santhanam Endowment Award and many more that adorn his
                    cabinet.
                </p>
                <p>
                    Because of his proficiency in both vocal and instrumental music, he is
                    admired as a teacher all over the world. He imparts traditional values of
                    classical music to his students with love to lead them on a rewarding
                    journey to further explore the subtle nuances of the system. Many of his
                    students have become competent achievers in the field, in India and
                    overseas.
                </p>
                <p>
                    Not resting on his past laurels,he perseveres with his research to refine
                    his art and give inspiring lectures and conduct highly valued workshops.
                    He has produced many Albums that lovers of music cherish.
                    In a world of instant digital music and short-lived imitators,Vidwan
                    Ganesh Prasad stands out as a genuine virtuoso who continues to engage and
                    enrich the carnatic musicscape.
                </p>
            </div>
        </div>
    );
}

export default Artist;
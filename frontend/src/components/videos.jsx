import React from 'react';
import video1 from '../assets/video1.mp4';

const Videos = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>VIDEOS</h2>
            <p>Contenido de videos relacionado con el proyecto.</p>
            <div style={{ marginTop: '20px' }}>
                <video width="640" height="360" controls>
                    <source src={video1} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>
        </div>
    );
};

export default Videos;
import React from 'react';

const Download = () => {


    const Fs = require('fs')
    const Path = require('path')
    const Axios = require('axios')


    const downloadImage = async () => {
        const url = 'https://drive.google.com/file/d/1tLM6wyOZT0fFmAxlEYdbAcjnsuVkuMyo/view?usp=sharing'
        const path = Path.resolve(__dirname, 'Document', 'Hoja de Vida Chachagui Colombia - Luis Enrique Guerrero 120621.jpg')
        const writer = Fs.createWriteStream(path)

        const response = await Axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
        })
    }

         return (
        <div>
            {downloadImage()}
        </div>
    )
};

export default Download;
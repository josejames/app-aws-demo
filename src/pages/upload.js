import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FileUpload() {
    const [file, setFile] = useState(null)
    // const [setUploadingStatus] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [uploadingStatus, setUploadingStatus] = useState(false)

    const uploadFile = async () => {
        setUploadingStatus(true)

        const { data } = await axios.post('/api/s3/upload', {
            name: `images/${file.name}`,
            type: file.type,
            title: 'heloo world'
        })

        const url = data.url
        await axios.put(url, file, {
            headers: {
                'Content-type': file.type,
                'Access-Control-Allow-Origin': '*'
            }
        })

        setUploadingStatus(false)
        setFile(null)
    }

    useEffect(() => {
        if (file) {
            const uploadedFileDetail = async () => await uploadFile()
            uploadedFileDetail()
        }
    }, [file])

    return (
        <input
            type='file'
            accept='image/*'
            name='image'
            id='selectFile'
            onChange={(e) => setFile(e.target.files[0])}
        />
    )
}

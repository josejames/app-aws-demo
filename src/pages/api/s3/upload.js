import apiHandler from '@config/apiHandler'
// import { S3 } from 'aws-sdk'
import S3 from 'aws-sdk/clients/s3'
// import aws from 'aws-sdk'

const s3 = new S3({
    region: process.env.S3_UPLOAD_REGION,
    accessKeyId: process.env.S3_UPLOAD_KEY,
    secretAccessKey: process.env.S3_UPLOAD_SECRET,
    signatureVersion: 'v4'
})

const handle = apiHandler().post(async (req, res) => {
    try {
        const { name, type } = req.body
        console.log('request', req.body)

        const fileParams = {
            Bucket: process.env.S3_UPLOAD_BUCKET,
            Key: name,
            Expires: 600,
            ContentType: type
        }

        const url = await s3.getSignedUrlPromise('putObject', fileParams)

        res.status(200).json({ url })
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err })
    }
    // return res.json(url)
})
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb'
        }
    }
}

export default handle

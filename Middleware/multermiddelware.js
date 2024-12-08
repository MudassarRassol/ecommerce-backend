import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/image')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = `${uuidv4()} - ${file.fieldname}`
      cb(null, uniqueSuffix)
    }
  })
  

const upload = multer({ storage: storage })
export default upload;
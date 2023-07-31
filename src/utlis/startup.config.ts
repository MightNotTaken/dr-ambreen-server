import fs from 'fs';
import path from 'path';

export const initialSetup = () => {
    try {
        const uploadDirectoryPath = path.join(__dirname, '../../uploads');
        if (!fs.existsSync(uploadDirectoryPath)) {
            fs.mkdirSync(uploadDirectoryPath);
        }
    } catch (error) {
        console.error(error);
    }
}

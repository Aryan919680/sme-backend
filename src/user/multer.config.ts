// import { MulterOptionsFactory, MulterOptions } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';

// export class MulterConfigService implements MulterOptionsFactory {
//   createMulterOptions(): MulterOptions {
//     return {
//       storage: diskStorage({
//         destination: './uploads',
//         filename: (req, file, callback) => {
//           const filename = `${Date.now()}${extname(file.originalname)}`;
//           callback(null, filename);
//         },
//       }),
//     };
//   }
// }

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnUrlImage = exports.multerOptions = exports.Dest = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const multer_1 = require("multer");
const common_1 = require("@nestjs/common");
const host_constatn_1 = require("./constants/host.constatn");
var Dest;
(function (Dest) {
    Dest["Profile"] = "./upload";
    Dest["Somthingelse"] = "./upload/random";
})(Dest = exports.Dest || (exports.Dest = {}));
const multerOptions = (destination) => {
    return {
        fileFilter: (req, file, cb) => {
            if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                cb(null, true);
            }
            else {
                cb(new common_1.HttpException(`Unsupported file type ${(0, path_1.extname)(file.originalname)}`, common_1.HttpStatus.BAD_REQUEST), false);
            }
        },
        storage: (0, multer_1.diskStorage)({
            destination: (req, file, cb) => {
                const uploadPath = destination;
                if (!(0, fs_1.existsSync)(uploadPath)) {
                    console.log('not exsit');
                    (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
                }
                cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
                cb(null, generateFilename(file));
            },
        }),
    };
};
exports.multerOptions = multerOptions;
function generateFilename(file) {
    return `${Date.now()}.${file.originalname}`;
}
const ReturnUrlImage = (filename) => {
    const host = (0, host_constatn_1.DefaultHost)();
    return `${host}${filename}`;
};
exports.ReturnUrlImage = ReturnUrlImage;
//# sourceMappingURL=upload.config.js.map
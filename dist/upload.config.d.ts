/// <reference types="multer" />
export declare enum Dest {
    Profile = "./upload",
    Somthingelse = "./upload/random"
}
export declare const multerOptions: (destination: Dest) => {
    fileFilter: (req: any, file: any, cb: any) => void;
    storage: import("multer").StorageEngine;
};
export declare const ReturnUrlImage: (filename: string) => string;

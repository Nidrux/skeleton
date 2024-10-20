import path from "path"
import fs from "node:fs"
import { Result } from "../@types/Result"

export default class FileHandler {
    _basePath : string
    /**
     * @constructor FileHandler
     * @param basePath Used as sequence in getPath. This function creates a path from __dirname. The default is '..' this is so we are located in the src directory 
     */
    constructor(basePath: string = "..") {
    this._basePath = basePath
    }
    /**
     * @access private
     * @param directory 
     * @returns string the absolute path of the specified directory.
     */
    private getDirectoryPath(directory : string) : string {
        return path.join(__dirname, this._basePath, directory)
    }
    /**
     * 
     * @returns Result<T, E extends Error = Error> = | {succes: true, result: T} | {succes: false, result: E}
     */
    public ensureDataDirectoryCreated() : Result<string> {
        const path : string = this.getDirectoryPath("Data")
        try {
            if(!fs.existsSync(path)) {
                fs.mkdirSync(path);
                return {succes: true, result: `Data directory created at ${path}`}
            } else {
                return {succes: true, result: `Data directory is already present at ${path}. Skipping creation.`}
            }
        } catch(err) {
            return {succes: false, result: err as Error}
        }
    }
}
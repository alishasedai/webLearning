import fs from "fs/promises";
import fsn from "fs";
// import { exit } from "process";
import path from "path";
console.log(fs)

const basepath = "C:\\Users\\Asus\\Desktop\\SigmaDev\\video92";
let files = await fs.readdir(basepath);
console.log(files);

for (const items of files) {
  let ext = items.split(".")[items.split(".").length - 1];

  if (ext != "js" && ext != "json" && items.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      //move the file to directory
      fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
    } else {
      fs.mkdir(ext);
      fs.rename(path.join(basepath, items), path.join(basepath, ext, items));
    }
  }
  console.log(items)
}

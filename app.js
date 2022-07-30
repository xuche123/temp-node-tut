// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// alternative to util imports
const { readFile, writeFile } = require("fs").promises;

// fix to async callback hell
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME:\n${first}\n${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(err);
  }
};

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf-8");
//     const second = await readFilePromise("./content/second.txt", "utf-8");
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME: ${first} ${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(err);
//   }
// };

start();

// promises behind the scene
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     // console.log("start");
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

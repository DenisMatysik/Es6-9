// Promise
// ---------------
// const promise = new Promise((resolve, reject) => {
//   // throw new Error("some error...");
//   setTimeout(() => {
//     if (true) {
//       resolve("promise completed!");
//     } else {
//       reject();
//     }
//   }, 1000);
// });
// promise.then((data) => console.log(data)).catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/posts/")
//   .then((res) => res.json())
//   .then((data) => data)
//   .then((data) => console.log("!!!", data))
//   // .then((data) => render(data))
//   .catch(() => console.log("some error..."));

// Async/Await
// ---------------
const fetchData = () =>
  Promise.resolve({
    data: ["Jack", "Max", "Leo"],
  });
const getNamesData = () => {
  fetchData().then((data) => {
    console.log(data);
    return "done";
  });
};
const getNamesData2 = async () => {
  console.log(await fetchData());
  return "done";
};
getNamesData();
getNamesData2();
console.log(getNamesData2());

// // const fetchData = () => Promise.reject('some error...');
// const getNamesData = async () => {
//   try {
//     console.log(await fetchData());
//   } catch(error) {
//     console.log(error);
//   }
// }
// getNamesData();

const load = () => {
  Promise.resolve(5).then((a) => {
    Promise.resolve(10).then((b) => console.log(a + b));
  });
};
load();

const load2 = async () => {
  const a = await Promise.resolve(5);
  const b = await Promise.resolve(10);
  console.log(a + b);
};
load2();

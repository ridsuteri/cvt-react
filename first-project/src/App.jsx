import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";

// js function - most popular
// js class

// component
// take an input - optional
// returns what to show on screen - (jsx)
// jsx - javascript xml
//  javascript + html (in simple terms)
function App() {
  // i want to tell react, what to display on screen
  const items = [
    {
      title: "Learn JavaScript",
      desc: "A comprehensive guide to mastering JavaScript for web development.",
    },
    {
      title: "Introduction to Python",
      desc: "Basics of Python programming for beginners.",
    },
    {
      title: "Web Design Principles",
      desc: "Key concepts and practices for designing modern, user-friendly websites.",
    },
    {
      title: "Data Structures",
      desc: "An overview of common data structures like arrays, lists, and trees.",
    },
    {
      title: "Machine Learning Basics",
      desc: "Foundational knowledge to get started with machine learning and AI.",
    },
  ];

  return (
    <>
      <Header />
      <h1>Hello world {456 * 786} </h1>
      <h2>I am learning react</h2>
      <h3>It is so much fun</h3>

      {items.map((item) => {
        return <Card title={item.title} desc={item.desc} />;
      })}

      
      <Footer />
    </>
  );
}


// let arr = [10, 20, 30]
// mutliply every element of array with 2

let resultant = arr.map((currElement)=>{
  // console.log(currElement)
  return currElement = currElement * 2
})

console.log(resultant)
// [20, 40, 60]


// function display(message){
//   console.log(message)
// }

// display('hello')
// display('world')

export default App;

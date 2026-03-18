import React from "react";
import Navbar from "./component/Navbar";
import News from "./page/News";
import Category from "./component/Category";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      
      <Navbar className="sticky top-0 z-20" />

      <Category className="sticky top-14 z-10 bg-base-100 py-2" />

      <News className="pb-10" />

      <Footer />
      
    </div>
  );
};

export default App;
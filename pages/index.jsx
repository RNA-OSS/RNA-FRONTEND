import React from "react";

import Header from "../components/organisms/Header";
import ClubLayout from "../components/templates/ClubLayout";
import Notice from "../components/organisms/Notice";
import Board from "../components/organisms/Board";

const Home = () => {
  return (
    <div>
      <Header />
      <ClubLayout>
        <Notice />
        {/* <Board /> */}
      </ClubLayout>
    </div>
  );
};

export default Home;

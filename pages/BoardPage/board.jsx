import React from "react";

import Header from "../../components/organisms/Header";
import ClubLayout from "../../components/templates/ClubLayout";
import Board from "../../components/organisms/Board";

const board = () => {
  return (
    <div>
      <Header />
      <ClubLayout>
        <Board />
      </ClubLayout>
    </div>
  );
};

export default board;

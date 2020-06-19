import React from "react";

import Header from "../../components/organisms/Header";
import ClubLayout from "../../components/templates/ClubLayout";
import Table from "../../components/molecules/Table";

const board = () => {
  return (
    <div>
      <Header />
      <ClubLayout>
        <Table />
      </ClubLayout>
    </div>
  );
};

export default board;

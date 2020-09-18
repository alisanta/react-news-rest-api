import React from "react";
import Newsdata from "./Newsdata";
import axios from "axios";

export default function News(props) {
  // API URL : http://pkponline.com/utj/Customer/api/get_keyword_value?keyword=Sales%20Name

  let dataku = [
    { title: "Jambi Kini", description: "dajk akljdak  dkaldj a as" },
    { title: "Maling Kambing", description: "asdaskdjadlkasj ad" }
  ];
  const kk = dataku.map((satu) => {
    return (
      <div>
        <Newsdata title={satu.title} description={satu.description} />
      </div>
    );
  });
  return <div>{kk}</div>;
}

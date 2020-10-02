import React from "react";
import Newsdata from "./Newsdata";
//import axios from "axios";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      firstCharacter: {},
      isLoadingCharacterList: true,
      characterList: {},
      isLoadingNews: true,
      newsList: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        this.setState((prevState) => {
          return { ...prevState, isLoading: false, firstCharacter: data };
        });
      });

    fetch("https://swapi.dev/api/people/")
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        this.setState((prevState) => {
          return {
            ...prevState,
            characterList: data.results,
            isLoadingCharacterList: false
          };
        });
      });
    /*
    fetch("https://www.pkponline.com/nf/Event/api/get_eventlist_by_category?q=PKP")
    .then(response=>{console.log(response); return response.json()})
    .then(data => {
      console.log(data); 
      this.setState(prevState=> {
        return {...prevState, newsList : data,
          isLoadingNews:false}
        })
    })
    */
  }
  render() {
    // API URL : http://pkponline.com/utj/Customer/api/get_keyword_value?keyword=Sales%20Name

    let dataku = [
      { stitle: "Jambi Kini", description: "dajk akljdak  dkaldj a as" },
      { stitle: "Maling Kambing", description: "asdaskdjadlkasj ad" }
    ];
    /*
  const kk = dataku.map((satu) => {
    return (
      <div>
        <Newsdata title={satu.stitle} description={satu.description} />
      </div>
    );
  });
  */
    /*
  const ll = this.state.newsList.map ( berita => {
    return (
      <div>
      <Newsdata title={berita.stitle} description={berita.description} />
    </div>
    )
  })*/
    //const ll =
    let what = this.state.isLoading ? (
      <div>loading</div>
    ) : (
      <div>{this.state.firstCharacter.name}</div>
    );
    let whatt = this.state.isLoadingCharacterList ? (
      <div>loading Character List</div>
    ) : (
      <div>{this.state.characterList.map((nama) => nama.name).join(",")}</div>
    );

    //console.log(this.state)
    return (
      <div>
        {what}
        {whatt}
      </div>
    );
  }
}

export default News;

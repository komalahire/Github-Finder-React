import React, { Component } from "react";
import Url from "./Url";
import Repo from "./repo";
import RepoUrl from "./repo_url";
import { TextField, Paper } from "@material-ui/core";

export class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", GithubProfile: "", repo: "", public_repo: "" };
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("komal");
    const response = await Url.get("users", {
      params: {
        q: this.state.query,
      },
    });

    console.log(response);
    const resp = await RepoUrl.get(`/${this.state.query}/repos`);
    console.log(resp);

    const public_repo = await RepoUrl.get(`/${this.state.query}`);
    console.log(public_repo.data);


    this.setState({
      GithubProfile: response.data.items,
      repo: resp.data,
      public: public_repo.data,
    });
  };

  
  render() {
    return (
      <div>
        <Paper
          elevation={6}
          style={{ padding: "15px", margin: "15px", backgroundColor: "white" }}
        >
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              fullWidth
              label="search..."
              onChange={this.handleInputChange}
            ></TextField>
          </form>
        </Paper>
        {this.state.GithubProfile !== "" && <Repo {...this.state} />}
      </div>
    );
  }
}

export default Finder;

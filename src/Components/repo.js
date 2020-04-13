import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

function Repo(props) {
  const { GithubProfile, public_repo } = props;
  console.log(props);
  return (
    <div>
      {GithubProfile.map((profile) => (
        <Card
          style={{ width: "260px", marginLeft: "200px", cursor: "pointer" }}
        >
          <CardContent>
            <img
              style={{ width: "200px" }}
              alt="thumbnail"
              src={profile.avatar_url}
            />
            <a
              href={profile.html_url}
              style={{ fontSize: "27px", textDecoration: "none" }}
            >
              <Button
                variant="contained"
                style={{ fontSize: "27", marginTop: "20px", width: "100%" }}
              >
                view
              </Button>
            </a>
            <p style={{ fontSize: "27", color: "#666" }}>{profile.login}</p>
            <hr />
            <br />
            <hr />
            <span
              style={{
                backgroundColor: "#5bc0de",
                padding: "3px 5px 3px 5px",
                fontsize: "0px",
              }}
            >
              {public_repo.public_repos}Public Repo
            </span>
            <span
              style={{ backgroundColor: "#0275d8", padding: "3px 5px 3px 5px" }}
            >
              {public_repo.public_gists}Public_Gists
            </span>
            <br />
            <br />
            <span
              style={{
                backgroundColor: "#d9534f",
                padding: "3px 15px 5px 15px",
                fontsize: "0px",
              }}
            >
              {public_repo.followers}Followers
            </span>
            <span
              style={{
                backgroundColor: "#373a3c",
                padding: "3px 15px 5px 15px",
              }}
            >
              {public_repo.following}Following
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default Repo;

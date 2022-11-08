import "./style.scss";
import { Grid, TextField } from "@mui/material";
import ContentBox from "../../../components/atoms/ContentBox";
import Navbar from "../../../components/atoms/navbar/Navbar";
import Sidebar from "../../../components/atoms/sidebar/Sidebar";
import { styled } from "@material-ui/styles";
import { Link } from "react-router-dom";

const UserComponent = () => {
  return (
    <div className="view">
      <Sidebar />
      <div className="viewContainer">
        <Navbar />
        <div className="body">
          <ContentBox.Container className="viewForm">
            <ContentBox.Title title="View user information" />
            <ContentBox.Body>
              <div style={{ width: "100%", padding: "0.4rem" }}>
                <Grid
                  container
                  spacing={0}
                  alignItems="flex-start"
                  alignContent="space-around"
                >
                  {/* <Item
                      className="textField"
                      disabled
                      id="usercode"
                      label="User code"
                      defaultValue="User Code"
                      variant="standard"
                    /> */}
                  <div className="form">
                    <label className="title" for="usercode">
                      User code
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="usercode"
                      defaultValue="User code"
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="name">
                      Full name
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="name"
                      defaultValue="Lê Thị Ngọc Trân"
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="role">
                      Role
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="role"
                      defaultValue="Role"
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="email">
                      Email
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="email"
                      defaultValue="Email"
                    />
                  </div>
                  <div className="form">
                    <label className="title" for="phone">
                      Phone
                    </label>
                    <Item
                      disabled
                      className="textField"
                      id="phone"
                      defaultValue="Phone"
                    />
                  </div>
                </Grid>
              </div>
            </ContentBox.Body>
            <Link to="/user" style={{ textDecoration: "none" }}>
              <ContentBox.Footer isGoBack />
            </Link>
          </ContentBox.Container>
        </div>
      </div>
    </div>
  );
};

const Item = styled(TextField)({
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
    height: "0.4rem",
    fontSize: "1.4rem",
    WebkitTextFillColor: "#717171"
  },
});

export default UserComponent;

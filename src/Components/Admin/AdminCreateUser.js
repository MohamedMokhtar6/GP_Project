import React, { useState } from "react";
import img from "../../Images/avatar-06.png";
import { Button, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createUser } from "../../Redux/Actions/userAction";
import { ToastContainer } from "react-toastify";
import notify from "../../Hooks/useNotification";

function AdminCreateUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.UserReducer.user);

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      name === "" ||
      password === "" ||
      email === "" ||
      role === "" ||
      phoneNumber === "" ||
      gender === ""
    ) {
      notify("من فضلك اكمل البيانات", "warn");
      return;
    }
    setIsPress(true);
    setLoading(true);
    await dispatch(
      createUser({
        password: password,
        email: email,
        userName: name,
        phoneNumber: phoneNumber,
        gender: gender,
        roleId: role,
      })
    );
    console.log(gender);
    console.log(role);
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      setIsPress(false);
      console.log(res);
      if (res.data.status) {
        setName("");
        setPassword("");
        setEmail("");
        setRole(null);
        setPhoneNumber("");
        setGender("");
        console.log("تم الانتهاء");
      }
      if (res.data.status) {
        notify("user has been Added successfully", "success");
      } else {
        notify(res.data.message, "warn");
      }
    }
  }, [loading]);

  return (
    <>
      <Row className="m-3 flex-column ">
        <div className=" fw-bold fs-4 my-3">Add New User</div>
        <label htmlFor="upload">
          <img src={img} style={{ width: "150px" }} />
        </label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="User Name"
          type={"text"}
          className="fit reduce my-2"
          value={name}
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="User Email"
          type="email"
          className="fit reduce my-2"
          value={email}
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="User Password"
          type="password"
          className="fit reduce my-2"
          value={password}
        />
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          placeholder="Phone Number"
          type="tel"
          className="fit reduce my-2"
          value={phoneNumber}
        />
        <div>
          <input
            onClick={() => {
              setGender(0);
            }}
            type="radio"
            id="1"
            name="gender"
            className="fit reduce my-2 "
            value={gender}
          />
          <label for="male" className="mx-2">
            Male
          </label>
        </div>
        <div>
          <input
            onClick={() => {
              setGender(1);
            }}
            type="radio"
            id="2"
            name="gender"
            className="fit reduce my-2"
            value={gender}
          />
          <label for="female" className="mx-2">
            Female
          </label>
          <br></br>
        </div>
        <select
          value={role}
          className="my-2 reduce fit "
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value={"0"}>Select Role</option>
          <option value={"1"}>Admin</option>
          <option value={"2"}>User</option>
        </select>
        <Button variant="dark" className="fit m-3" onClick={onSubmit}>
          Save
        </Button>
        {isPress ? (
          loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <h4>تم الانتهاء</h4>
          )
        ) : null}
        <ToastContainer />
      </Row>
    </>
  );
}

export default AdminCreateUser;

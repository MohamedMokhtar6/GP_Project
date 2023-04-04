import React from "react";
import { Row } from "react-bootstrap";
import UserCard from "./UserCard";
import ViewAllUserHook from "../../hook/view-all-user-hook";

function AdminAllUser() {
  const [users] = ViewAllUserHook();
  return (
    <>
      <Row className="m-0">
        {users
          ? users.map((item, index) => {
              return <UserCard key={index} item={item} />;
            })
          : null}
      </Row>
    </>
  );
}

export default AdminAllUser;

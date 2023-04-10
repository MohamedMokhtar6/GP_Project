import React from "react";
import { Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";
import ViewAllUserHook from "../../hook/view-all-user-hook";
import { Box, Skeleton } from "@mui/material";
import AdminCard from "./AdminCard";

function AdminAllUser() {
  const [users, admins] = ViewAllUserHook();
  return (
    <>
      <Row className="m-0">
        {users ? (
          users.map((item, index) => {
            return <UserCard key={index} item={item} type="Student" />;
          })
        ) : (
          <Container className="d-flex justify-content-center gap-5">
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="50%" className="mx-auto" />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="50%" className="mx-auto" />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="50%" className="mx-auto" />
            </Box>
          </Container>
        )}
        {admins ? (
          admins.map((item, index) => {
            return <AdminCard key={index} item={item} type="Admin" />;
          })
        ) : (
          <Container className="d-flex justify-content-center gap-5">
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="50%" className="mx-auto" />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="50%" className="mx-auto" />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="50%" className="mx-auto" />
            </Box>
          </Container>
        )}
      </Row>
    </>
  );
}

export default AdminAllUser;

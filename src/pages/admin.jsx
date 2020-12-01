import React from "react"
import { Router } from "@reach/router"
import { useDispatch, useSelector } from "react-redux"
import { navigate } from "gatsby"
import Login from "../components/AdminComponents/Login"
import AdminLayout from "../components/AdminComponents/AdminLayout/Paperbase"

function Admin(props) {
  const state = useSelector(state => state)

  const isAuth = true

  console.log(state)

  return (
    <Router>
      <Login path={"/admin/login"} />
      <AdminLayout path={"/admin/dashboard"}></AdminLayout>
    </Router>
  )
}

export default Admin

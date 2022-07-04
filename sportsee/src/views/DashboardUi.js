import Header from "../components/Header";
import LateralBar from "../components/LateralBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NotFount from "./404";
import "../style/DashboardUi.css";

function DashboardUi() {
    const { id } = useParams();
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(`/user/${id}`).then(res => {
            console.log(res.data);
            console.log(res.data.data.userInfos.firstName);
            setName(res.data.data.userInfos.firstName);

        }).catch(err => {
            console.log(err);
        });
    }, [id]);
  return(
        <div className="App">
      <Header />
      <div className="dashboard-body">
        <h1 className="dashboard-title">Bonjour<p className="name">{name}</p></h1>
      </div>
      <LateralBar />
    </div>
  )
}

export default DashboardUi;
import { Link } from "react-router-dom";
import "../style/UsersList.css";
import Header from "../components/Header";
import LateralBar from "../components/LateralBar";

function UsersList() {
	return (
		<div>
			<Header />
			<div className="list-wrapper">
				<h1>Users List</h1>
				<div className="users-list">
					<Link className="users-link" to="/profile/12">
						Karl Dovineau
					</Link>
					<Link className="users-link" to="/profile/18">
						Cecilia Ratorez
					</Link>
				</div>
			</div>
			<LateralBar />
		</div>
	);
}

export default UsersList;

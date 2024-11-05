import { motion } from "framer-motion";
import { FaTachometerAlt, FaInbox, FaUser, FaCalendarAlt, FaSearch, FaChartBar, FaFolder, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import { useState } from "react";

const DashboardPage = () => {
	const { user, logout } = useAuthStore();
	const [open, setOpen] = useState(true);

	const handleLogout = () => {
		logout();
	};

	const Menus = [
		{ title: "Dashboard", icon: <FaTachometerAlt /> },
		{ title: "Inbox", icon: <FaInbox /> },
		{ title: "Accounts", icon: <FaUser />, gap: true },
		{ title: "Schedule ", icon: <FaCalendarAlt /> },
		{ title: "Search", icon: <FaSearch /> },
		{ title: "Analytics", icon: <FaChartBar /> },
		{ title: "Files ", icon: <FaFolder />, gap: true },
		{ title: "Setting", icon: <FaCogs /> },
		{ title: "Sign Out", icon: <FaSignOutAlt />, action: handleLogout }, // Sign-out menu with icon
	];

	return (
		<>
			<div className="flex h-screen w-full"> {/* Set full height */}
				<div
					className={` ${
						open ? "w-72" : "w-20 "
					} bg-dark-purple h-full p-5 pt-8 relative duration-300`}
				>
					<img
						src="./src/assets/control.png"
						className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
						onClick={() => setOpen(!open)}
					/>
					<div className="flex gap-x-4 items-center">
						<img
							src="./src/assets/logo.png"
							className={`cursor-pointer duration-500 ${
								open && "rotate-[360deg]"
							}`}
						/>
						<h1
							className={`text-white origin-left font-medium text-xl duration-200 ${
								!open && "scale-0"
							}`}
						>
							OshaniCreations
						</h1>
					</div>
					<ul className="pt-6">
						{Menus.map((Menu, index) => (
							<li
								key={index}
								className={`flex items-center gap-x-4 rounded-md p-2 cursor-pointer hover:bg-gray-500 text-gray-300 text-sm ${
									Menu.gap ? "mt-9" : "mt-2"
								} ${index === 0 && "bg-light-white"}`}
								onClick={Menu.action ? Menu.action : null}
							>
								{/* Using the icon from the menu */}
								<span className="text-2xl">{Menu.icon}</span>
								<span className={`${!open && "hidden"} origin-left duration-200`}>
									{Menu.title}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="flex-1 p-7 overflow-y-auto">
					<h1 className="text-2xl font-semibold text-white mb-5">Home Page</h1>
					<motion.div
						className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 mb-6"
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.2}}
					>
						<h3 className="text-xl font-semibold text-green-400 mb-3">Profile Information</h3>
						<p className="text-gray-300">Name: {user.name}</p>
						<p className="text-gray-300">Email: {user.email}</p>
					</motion.div>
					<motion.div
						className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
						initial={{opacity: 0, y: 20}}
						animate={{opacity: 1, y: 0}}
						transition={{delay: 0.4}}
					>
						<h3 className="text-xl font-semibold text-green-400 mb-3">Account Activity</h3>
						<p className="text-gray-300">
							<span className="font-bold">Joined: </span>
							{new Date(user.createdAt).toLocaleDateString("en-US", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</p>
						<p className="text-gray-300">
							<span className="font-bold">Last Login: </span>
							{formatDate(user.lastLogin)}
						</p>
					</motion.div>
				</div>
			</div>
		</>
	);
};
export default DashboardPage;

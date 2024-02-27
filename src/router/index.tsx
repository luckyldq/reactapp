import { createBrowserRouter } from "react-router-dom"; // 安装types才不会报错

import Root, { loader as rootLoader, action as rootAction } from "../App";
import HomeDetail, {
	loader as homedetailLoader,
} from "pages/homeDetail/homeDetail";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				path: "homeDetail/:detailId",
				element: <HomeDetail />,
				loader: homedetailLoader,
			},
		],
	},
	{
		path: "/homeDetail/:detailId",
		element: <HomeDetail />,
		loader: homedetailLoader,
	},
]);

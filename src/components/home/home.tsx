import React, { PureComponent } from "react";

import styles from "./home.module.scss";

const pageName = "Home";

const homeListArr = [
	{
		name: "aaa",
	},
	{
		name: "bbb",
	},
];
const homeListItems = homeListArr.map((item, index) => {
	return <li key={index}>{item.name}</li>;
});

/* 
	类组件
*/
class Home extends PureComponent {
	render(): React.ReactNode {
		return (
			<div className={styles.home}>
				Here is {pageName}
				<ul>{homeListItems}</ul>
			</div>
		);
	}
}

export default Home;

import React, { PureComponent } from "react";

import styles from "./home.module.scss";

const pageName = "Home";

// 类组件
class Home extends PureComponent {
	render(): React.ReactNode {
		return <div className={styles.home}>Here is {pageName}</div>;
	}
}

export default Home;

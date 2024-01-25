import React from "react";

import styles from "./tabs.module.scss";

// 定义props类型
interface TabProps {
	tabindex: number;
}
class Tab extends React.Component<TabProps> {
	constructor(props: any) {
		super(props);
		this.state = {
			info: "ldq",
			tabIndex: props.tabindex,
		};
	}
	render(): React.ReactNode {
		return (
			<div className={styles.tabbar}>
				<p className={this.props.tabindex === 0 ? styles.active : ""}>
					home
				</p>
				<p className={this.props.tabindex === 1 ? styles.active : ""}>
					about
				</p>
			</div>
		);
	}
}
export default Tab;

import React, { Dispatch, SetStateAction } from "react";

import styles from "./tabs.module.scss";

// 类组件需要声明 - props和state类型
interface Props {
	tabindex: number;
	setTabIndex: Dispatch<SetStateAction<number>>;
}
interface State {
	tabindex: number;
}

// list
const listArr = [
	{
		name: "home",
	},
	{
		name: "about",
	},
];

// 类上定义类型
class Tab extends React.Component<Props, State, {}> {
	constructor(props: Props) {
		super(props);
		this.state = {
			tabindex: props.tabindex,
		};
	}

	changeTab(index: number) {
		this.setState({
			tabindex: index,
		});
		this.props.setTabIndex(index);
	}

	render(): React.ReactNode {
		const listItems = listArr.map((item, index) => {
			return (
				<p
					key={index}
					onClick={() => this.changeTab(index)}
					className={
						this.state.tabindex === index ? styles.active : ""
					}
				>
					{item.name}
				</p>
			);
		});

		return <div className={styles.tabbar}>{listItems}</div>;
	}
}
export default Tab;

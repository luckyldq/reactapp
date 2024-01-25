import styles from "./about.module.scss";

// class About extends Component {
// 	render(): React.ReactNode {
// 		return <div className={styles.about}>Here is About</div>;
// 	}
// }

// 函数组件
function About({ showPageName = false }) {
	const pageName = "About";
	// 列表数据
	const listItems = [<li>name: ldq</li>, <li>name: ldq2</li>];
	return (
		<div className={styles.about}>
			<p>Here is {showPageName ? pageName : "--"}</p>
			<ul>{listItems}</ul>
		</div>
	);
}

export default About;

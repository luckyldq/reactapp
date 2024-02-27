import styles from "./about.module.scss";

/* 
    函数组件
*/
function About({ showPageName = false }) {
	const pageName = "About";
	// 列表数据
	const listItems = [<li key={0}>name: ldq</li>, <li key={1}>name: ldq2</li>];
	// 返回 view
	return (
		<div className={styles.about}>
			<p>Here is {showPageName ? pageName : "--"}</p>
			<ul>{listItems}</ul>
		</div>
	);
}

export default About;

export default function HomeDetail() {
	return <h1>home detail</h1>;
}

export async function loader({ params }: { params: any }) {
	return { contact: 111 };
}

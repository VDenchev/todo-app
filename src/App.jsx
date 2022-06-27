import Content from "./Components/Content.jsx"
const App = () => {
	return (
		<div className="bg-light-gray h-screen w-full">
			<div className="bg-[url('./Images/bg-mobile-light.jpg')] aspect-[15/8] bg-contain bg-no-repeat"></div>
			<Content />
		</div>
	)
}

export default App

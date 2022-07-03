import Content from "./Components/Content.jsx"
const App = () => {
	return (
		<div className="bg-light-gray dark:bg-dark-blue-800 h-screen w-full">
			<div className="bg-[url('./Images/bg-mobile-light.jpg')] md:bg-[url('./Images/bg-desktop-light.jpg')] dark:bg-[url('./Images/bg-mobile-dark.jpg')] md:dark:bg-[url('./Images/bg-desktop-dark.jpg')] aspect-[15/8] md:aspect-[24/5] bg-contain bg-no-repeat"></div>
			<Content />
		</div>
	)
}

export default App

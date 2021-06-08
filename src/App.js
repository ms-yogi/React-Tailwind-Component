import ProgressBar from './component/ProgressBar';
import Input from './component/Input';
import bg from './assets/reactAndTailwind.png';

function App() {
	return (
		<div className='bg-paleWhite min-h-screen h-full'>
			<img src={bg} alt='React and Tailwind' className='mx-auto w-4/5' />
			<h1 className='text-center text-3xl'>React Tailwind Components</h1>

			<div className='w-3/4 mx-auto grid grid-cols-2 gap-4 my-6'>
				<div className='bg-white p-4 rounded-md'>
					<h3>Input Component</h3>
					<Input
						id='email'
						label='Email'
						type='email'
						placeholder='you@youremail.com'
						containerClassName='mt-4'
					/>
				</div>
				<div className='bg-white p-4 rounded-md'>
					<h3>Progress Bar</h3>
					<div className='w-96 mt-4'>
						<ProgressBar progressPercentage={60} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

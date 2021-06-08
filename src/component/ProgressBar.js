const ProgressBar = ({ progressPercentage }) => {
	return (
		<div className='h-2 w-full bg-gray-300 rounded overflow-hidden'>
			<div
				style={{ width: `${progressPercentage}%` }}
				className={`h-full ${
					progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'
				}`}
			></div>
		</div>
	);
};

export default ProgressBar;

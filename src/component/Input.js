import { useRef } from 'react';

const Input = (props) => {
	const {
		id,
		containerClassName = '',
		labelClassName = '',
		inputClassName = '',
		placeholder = '',
		label = '',
		type = 'text',
		error = false,
		errorText = '',
		required = false,
		...rest
	} = props;

	const inputRef = useRef();

	return (
		<div
			className={containerClassName}
			onClick={() => inputRef.current.focus()}
		>
			<div
				className={`border transition duration-150 ease-in-out ${
					error
						? 'focus-within:border-red border-red'
						: 'focus-within:border-primary border-gray-gray4'
				}`}
			>
				<label
					htmlFor={id}
					className={`text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5 ${labelClassName}`}
				>
					{label} {required && <span className='text-red'>*</span>}
				</label>
				<input
					ref={inputRef}
					type={type}
					className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md ${inputClassName}`}
					id={id}
					placeholder={placeholder}
					{...rest}
				/>
			</div>
			{errorText && (
				<p className='text-xs pl-2	text-red mb-4'>{errorText}</p>
			)}
		</div>
	);
};

export default Input;

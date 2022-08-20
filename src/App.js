import './App.css';
import { useState } from 'react';
import UniTasks from './components/UniTasks';
import RadTasks from './components/RadTasks';
import QuadTasks from './components/QuadTasks';
import BiTasks from './components/BiTasks';
import ArachTasks from './components/ArachTasks';
import AeroTasks from './components/AeroTasks';
import { robotTypes } from './data';

function App() {
	//These use states were created for being able to get the values for the name and dropdown menu, also for being able to display the message when your robot

	const [robotName, setData] = useState(null);

	const [dropValue, setDropValue] = useState(null);

	const [print, setPrint] = useState(false);

	//functions are made to set the value of the states, and changed the print state to true so the message can pop up
	const getName = (e) => {
		setData(e.target.value);
		setPrint(false);
	};

	const getDropDown = (e) => {
		setDropValue(e.target.value);
		setPrint(false);
	};

	//makes states for the dropdown in order to show the component associated with the robot if the robot is selected in the dropdown

	const [uniShown, isUniShown] = useState(false);
	const [biShown, isBiShown] = useState(false);
	const [quadShown, isQuadShown] = useState(false);
	const [arachShown, isArachShown] = useState(false);
	const [radShown, isRadShown] = useState(false);
	const [aeroShown, isAeroShown] = useState(false);

	const handleClick = (e) => {
		//changes the state, adds form validation
		if (dropValue === robotTypes[0]['UNIPEDAL'] && robotName) {
			isUniShown(true);
			setPrint(true);
		}
		if (dropValue === robotTypes[0]['BIPEDAL'] && robotName) {
			isBiShown(true);
			setPrint(true);
		}
		if (dropValue === robotTypes[0]['QUADRUPEDAL'] && robotName) {
			isQuadShown(true);
			setPrint(true);
		}
		if (dropValue === robotTypes[0]['ARACHNID'] && robotName) {
			isArachShown(true);
			setPrint(true);
		}
		if (dropValue === robotTypes[0]['RADIAL'] && robotName) {
			isRadShown(true);
			setPrint(true);
		}
		if (dropValue === robotTypes[0]['AERONAUTICAL'] && robotName) {
			isAeroShown(true);
			setPrint(true);
		} else if (
			dropValue === null ||
			dropValue === 'Select' ||
			robotName === null
		) {
			alert('Please Input a Robot Type or Name');
		}
	};

	return (
		<div>
			<h1 className='mainH1'>Make your very own Robot!!!</h1>
			<form className='inputs'>
				<div className='robName'>
					<label>Please input a name for your Robot:</label>
					<br />
					<input
						id='nameInput'
						type='text'
						name='robotName'
						onChange={getName}
						placeholder='ex. Steve'
					/>
				</div>
				<div className='robType'>
					<label>Select a Robot type:</label>
					<br />
					<select name='robots' onChange={getDropDown}>
						<option value='select'>Select</option>
						<option value={robotTypes[0]['UNIPEDAL']}>
							{robotTypes[0]['UNIPEDAL']}
						</option>
						<option value={robotTypes[0]['BIPEDAL']}>
							{robotTypes[0]['BIPEDAL']}
						</option>
						<option value={robotTypes[0]['QUADRUPEDAL']}>
							{robotTypes[0]['QUADRUPEDAL']}
						</option>
						<option value={robotTypes[0]['ARACHNID']}>
							{robotTypes[0]['ARACHNID']}
						</option>
						<option value={robotTypes[0]['RADIAL']}>
							{robotTypes[0]['RADIAL']}
						</option>
						<option value={robotTypes[0]['AERONAUTICAL']}>
							{robotTypes[0]['AERONAUTICAL']}
						</option>
					</select>
				</div>
			</form>
			<div className='submitRobot'>
				<div></div>
				<button id='subRobButton' onClick={() => setTimeout(handleClick)}>
					Create your Robot!
				</button>
				<div></div>
			</div>
			{print ? (
				<h2 className='successMsg'>
					Success! Your {dropValue} Robot {robotName} has been created!
				</h2>
			) : null}

			{/*  loads components if the state associated is true*/}
			{uniShown ? <UniTasks /> : ''}
			{biShown ? <BiTasks /> : ''}
			{quadShown ? <QuadTasks /> : ''}
			{arachShown ? <ArachTasks /> : ''}
			{radShown ? <RadTasks /> : ''}
			{aeroShown ? <AeroTasks /> : ''}
		</div>
	);
}

export default App;

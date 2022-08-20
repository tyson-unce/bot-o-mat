import { useState } from 'react';
import './compstyles/TaskStyles.css';
import { robotTasks } from '../data';

const ArachTasks = () => {
	//setting useStates for each task so that 'task complete' wil show when time interval is finished
	const [task1Start, finTask1] = useState(false);
	const [task2Start, finTask2] = useState(false);
	const [task3Start, finTask3] = useState(false);
	const [task4Start, finTask4] = useState(false);
	const [task5Start, finTask5] = useState(false);

	//loadstart affects my loading gif so that inbetween the times of the button being pressed and the task being finished, the load icon will appear
	const [loadStart1, loadSet1] = useState(false);
	const [loadStart2, loadSet2] = useState(false);
	const [loadStart3, loadSet3] = useState(false);
	const [loadStart4, loadSet4] = useState(false);
	const [loadStart5, loadSet5] = useState(false);

	//button start affects the complete button, it is said as true because there's a function that, when clicked, will make it dissapear
	const [buttonStart1, buttonSet1] = useState(true);
	const [buttonStart2, buttonSet2] = useState(true);
	const [buttonStart3, buttonSet3] = useState(true);
	const [buttonStart4, buttonSet4] = useState(true);
	const [buttonStart5, buttonSet5] = useState(true);

	/*each task button will execute these functions on click. allowing the loading icon to go back to being obsolete when ran, and task complete to show*/
	const task1 = () => {
		loadSet1(false);
		finTask1(true);
	};

	const task2 = () => {
		loadSet2(false);
		finTask2(true);
	};
	const task3 = () => {
		loadSet3(false);
		finTask3(true);
	};
	const task4 = () => {
		loadSet4(false);
		finTask4(true);
	};
	const task5 = () => {
		loadSet5(false);
		finTask5(true);
	};

	return (
		<div className='taskList'>
			<h1 id='toDoMsg'>To Do:</h1>

			<div className='taskWButton'>
				<div className='taskAndTime'>
					<div className='Task'>{robotTasks[7]['description']}</div>
					<p>estimated completion time: 14.5 sec(s)</p>
				</div>
				<div>
					{loadStart1 ? <img src='./images/loading.gif'></img> : ''}
					{/* This ternary operator is specifying that as soon as the button is clicked, the button will go away, the loading icon will appear, and when the task is completed, the task completed message will show */}
					{buttonStart1 ? (
						<button
							className='completeButton'
							id='task1'
							onClick={() => {
								{
									/*on click, the button goes away, and while the task is being completed the load icon starts going, when task is complete message will pop up. */
								}
								buttonSet1(false);
								loadSet1(true);
								setTimeout(task1, robotTasks[7]['eta']);
							}}
						>
							Complete Task
						</button>
					) : null}
					{/* When Task start is true, Task complete will display, accurately completing the robot's task*/}
					{task1Start ? (
						<div className='completeMsg'>Task complete ✓</div>
					) : null}
				</div>
			</div>
			<br />
			<br />
			<div className='taskWButton'>
				<div className='taskAndTime'>
					<div className='Task'>{robotTasks[6]['description']}</div>
					<p>estimated completion time: 18 sec(s)</p>
				</div>
				<div>
					{loadStart2 ? <img src='./images/loading.gif'></img> : ''}
					{/* This ternary operator is specifying that as soon as the button is clicked, the button will go away, the loading icon will appear, and when the task is completed, the task completed message will show */}
					{buttonStart2 ? (
						<button
							className='completeButton'
							id='task2'
							onClick={() => {
								{
									/*on click, the button goes away, and while the task is being completed the load icon starts going, when task is complete message will pop up. */
								}
								buttonSet2(false);
								loadSet2(true);
								setTimeout(task2, robotTasks[6]['eta']);
							}}
						>
							Complete Task
						</button>
					) : null}
					{/* When Task start is true, Task complete will display, accurately completing the robot's task*/}
					{task2Start ? (
						<div className='completeMsg'>Task complete ✓</div>
					) : null}
				</div>
			</div>
			<br />
			<br />
			<div className='taskWButton'>
				<div className='taskAndTime'>
					<div className='Task'>{robotTasks[19]['description']}</div>
					<p>estimated completion time: 3 sec(s)</p>
				</div>
				<div>
					{loadStart3 ? <img src='./images/loading.gif'></img> : ''}
					{/* This ternary operator is specifying that as soon as the button is clicked, the button will go away, the loading icon will appear, and when the task is completed, the task completed message will show */}
					{buttonStart3 ? (
						<button
							className='completeButton'
							id='task3'
							onClick={() => {
								{
									/*on click, the button goes away, and while the task is being completed the load icon starts going, when task is complete message will pop up. */
								}
								buttonSet3(false);
								loadSet3(true);
								setTimeout(task3, robotTasks[19]['eta']);
							}}
						>
							Complete Task
						</button>
					) : null}
					{/* When Task start is true, Task complete will display, accurately completing the robot's task*/}
					{task3Start ? (
						<div className='completeMsg'>Task complete ✓</div>
					) : null}
				</div>
			</div>
			<br />
			<br />
			<div className='taskWButton'>
				<div className='taskAndTime'>
					<div className='Task'>{robotTasks[20]['description']}</div>
					<p>estimated completion time: 20 sec(s)</p>
				</div>
				<div>
					{loadStart4 ? <img src='./images/loading.gif'></img> : ''}
					{/* This ternary operator is specifying that as soon as the button is clicked, the button will go away, the loading icon will appear, and when the task is completed, the task completed message will show */}
					{buttonStart4 ? (
						<button
							className='completeButton'
							id='task4'
							onClick={() => {
								{
									/*on click, the button goes away, and while the task is being completed the load icon starts going, when task is complete message will pop up. */
								}
								buttonSet4(false);
								loadSet4(true);
								setTimeout(task4, robotTasks[20]['eta']);
							}}
						>
							Complete Task
						</button>
					) : null}
					{/* When Task start is true, Task complete will display, accurately completing the robot's task*/}
					{task4Start ? (
						<div className='completeMsg'>Task complete ✓</div>
					) : null}
				</div>
			</div>
			<br />
			<br />
			<div className='taskWButton'>
				<div className='taskAndTime'>
					<div className='Task'>{robotTasks[21]['description']}</div>
					<p>estimated completion time: 11 sec(s)</p>
				</div>
				<div>
					{loadStart5 ? <img src='./images/loading.gif'></img> : ''}
					{/* This ternary operator is specifying that as soon as the button is clicked, the button will go away, the loading icon will appear, and when the task is completed, the task completed message will show */}
					{buttonStart5 ? (
						<button
							className='completeButton'
							id='task5'
							onClick={() => {
								{
									/*on click, the button goes away, and while the task is being completed the load icon starts going, when task is complete message will pop up. */
								}
								buttonSet5(false);
								loadSet5(true);
								setTimeout(task5, robotTasks[21]['eta']);
							}}
						>
							Complete Task
						</button>
					) : null}
					{/* When Task start is true, Task complete will display, accurately completing the robot's task*/}
					{task5Start ? (
						<div className='completeMsg'>Task complete ✓</div>
					) : null}
				</div>
			</div>
			<div className='completedBox'>
				<h1 className='completedHeading'>Completed Tasks:</h1>
				{task1Start ? (
					<div className='completed'>{robotTasks[7]['description']} ✓</div>
				) : null}
				<br />
				{task2Start ? (
					<div className='completed'>{robotTasks[6]['description']} ✓</div>
				) : null}
				<br />
				{task3Start ? (
					<div className='completed'>{robotTasks[19]['description']} ✓</div>
				) : null}
				<br />
				{task4Start ? (
					<div className='completed'>{robotTasks[20]['description']} ✓</div>
				) : null}
				<br />
				{task5Start ? (
					<div className='completed'>{robotTasks[21]['description']} ✓</div>
				) : null}
				<br />
			</div>
		</div>
	);
};
export default ArachTasks;

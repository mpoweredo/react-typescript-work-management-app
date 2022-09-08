import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import NewEventPopup from './NewEventPopup';

const classes = {
	addNewEvent: 'bg-violet-300 text-slate-900 md:w-28 md:h-10 w-10 h-10 rounded-3xl md:rounded-sm font-medium cursor-pointer',
	buttonsContainer: 'md:relative fixed right-5 bottom-5 md:right-0 md:bottom-0 z-20',
};

type Props = {
	selectedDay: Date;
	setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
};

const NewEvent = ({ selectedDay, setSelectedDay }: Props) => {
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

	const toggleHandler = () => {
		setIsPopupOpen(prevState => !prevState);
	};

	return (
		<div className={classes.buttonsContainer}>
			
			{/* /// FOR DESKTOP */}

			<div className='md:flex hidden'>
				<button className={classes.addNewEvent} onClick={toggleHandler}>
					Add event
				</button>
			</div>

			{/* /// FOR MOBILE */}

			<div className='md:hidden block'>
				<button className={classes.addNewEvent} onClick={toggleHandler}>
					<AddIcon />
				</button>
			</div>
			<NewEventPopup selectedDay={selectedDay} closePopup={setIsPopupOpen} isOpen={isPopupOpen} />
		</div>
	);
};

export default NewEvent;

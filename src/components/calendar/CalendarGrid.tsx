import { add, eachDayOfInterval, endOfMonth, endOfWeek, format, parse, startOfToday, startOfWeek } from 'date-fns';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Days from './Days';
import Cell from './Cell';

const classes = {};

const CalendarGrid = () => {
	const today = startOfToday();
	const [selectedDay, setSelecteDay] = useState(today);
	const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
	const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

	const days = eachDayOfInterval({
		start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
		end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
	});
	const nextMonth = () => {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
	};

	const prevMonth = () => {
		const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
		setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
	};

	const selectDayHandler = (day: Date) => {
		setSelecteDay(day);
	};

	return (
		<div className='w-full max-w-[310px] sm:max-w-[350px] md:w-3/5 md:max-w-[380px] h-full '>
			<div className='flex justify-between'>
				<div className='flex gap-3 text-indigo-400 justify-around w-full'>
					<button onClick={prevMonth}>
						<ChevronLeftIcon />
					</button>
					<h1 className='text-white'>{format(firstDayCurrentMonth, 'MMM yyyy')}</h1>
					<button onClick={nextMonth}>
						<ChevronRightIcon />
					</button>
				</div>
			</div>
			<div className='grid grid-cols-7 mt-3'>
				<Days />
			</div>
			<div className='grid grid-cols-7 mt-2 text-center gap-y-1 sm:gap-y-2 md:gap-y-3'>
				{days.map((day, dayIndex) => (
					<Cell key={dayIndex} day={day} dayIndex={dayIndex} selectedDay={selectedDay} firstDayCurrentMonth={firstDayCurrentMonth} selectDay={selectDayHandler} />
				))}
			</div>
		</div>
	);
};

export default CalendarGrid;
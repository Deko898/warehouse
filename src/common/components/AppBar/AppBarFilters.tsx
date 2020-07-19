import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles, useSelectStyles } from './styles/appBarFilters.styles';
import { InputLabel } from '@material-ui/core';

export default function Filters() {
	const classes = useStyles();
	const selectClasses = useSelectStyles();
	const [company, setCompany] = React.useState('10');
	const [facility, setFacility] = React.useState('10');

	const handleCompanyChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setCompany(event.target.value as string);
	};

	const handleFacilityChange = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setFacility(event.target.value as string);
	};
	return (
		<form className={classes.root} noValidate autoComplete='off'>
			<FormControl
				className={classes.formControl}
				size='small'
				color='secondary'
				variant='outlined'
			>
				<InputLabel id='companies-outlined-label'>Company</InputLabel>
				<Select
					labelId='companies-outlined-label'
					id='companies-outlined'
					placeholder='Company'
					value={company}
					onChange={handleCompanyChange}
					label='Companies'
				>
					<MenuItem value={10} className={selectClasses.root}>
						All Companies
					</MenuItem>
					<MenuItem value={20} className={selectClasses.root}>
						<strong>3LINX</strong>
						<span> 3LINX Unified Commerce</span>
					</MenuItem>
					<MenuItem value={30} className={selectClasses.root}>
						<strong>FIRSTCL</strong>
						<span> First Choice Lighting</span>
					</MenuItem>
					<MenuItem value={40} className={selectClasses.root}>
						<strong>EWF</strong>
						<span> EWatch Factory</span>
					</MenuItem>
				</Select>
			</FormControl>

			<FormControl
				className={classes.formControl}
				size='small'
				defaultValue={10}
				color='secondary'
				variant='outlined'
			>
				<InputLabel id='facility-outlined-label'>Facility</InputLabel>
				<Select
					labelId='facility-outlined-label'
					id='facility-outlined'
					value={facility}
					onChange={handleFacilityChange}
					label='Facility'
				>
					<MenuItem value={10} className={selectClasses.root}>
						<strong>ALN</strong>
						<span> Allentown, PA</span>
					</MenuItem>
					<MenuItem value={11} className={selectClasses.root}>
						<strong>BKLYN</strong>
						<span>Brooklyn, NY</span>
					</MenuItem>

					<MenuItem value={12} className={selectClasses.root}>
						<strong>GLA</strong>
						<span>Glasgow, UK (Campus)</span>
					</MenuItem>
					<MenuItem value={1} className={selectClasses.root}>
						<strong className={classes.childMargin}>GLA1</strong>
						<span>Glasgow, UK</span>
					</MenuItem>
					<MenuItem value={2} className={selectClasses.root}>
						<strong className={classes.childMargin}>GLA2</strong>
						<span>Glasgow, UK</span>
					</MenuItem>
					<MenuItem value={3} className={selectClasses.root}>
						<strong className={classes.childMargin}>GLA3</strong>
						<span>Glasgow, UK</span>
					</MenuItem>

          <MenuItem value={13} className={selectClasses.root}>
						<strong>LAS</strong>
						<span>Las Vegas, NV</span>
					</MenuItem>
					<MenuItem value={14} className={selectClasses.root}>
						<strong>LAX</strong>
						<span>Los Angeles, CA</span>
					</MenuItem>
				</Select>
			</FormControl>
		</form>
	);
}

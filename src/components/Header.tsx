import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButton: {
			marginRight: theme.spacing(2),
		},
		root: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
		},
	}),
);

export default function Header() {
	const classes = useStyles();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAuth(event.target.checked);
	}

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	return (
		<div className={classes.root}>
			<FormGroup>
				<FormControlLabel
					control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
					label={auth ? 'Logout' : 'Login'}
				/>
			</FormGroup>
			<AppBar position="static">
				<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Test Pages
				</Typography>
				{auth && (
					<div>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								horizontal: 'right',
								vertical: 'top',
							}}
							transformOrigin={{
								horizontal: 'right',
								vertical: 'top',
							}}
							open={open}
							onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My Account</MenuItem>
							</Menu>
					</div>
				)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
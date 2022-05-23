import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import './Widget.css';
import Weather from './Weather';
import Weather2 from './Weather2';
import Movies from './Movies';
import Movies2 from './Movies2';
import News from './News';
import Steam from './Steam';


const options = ['Weather - temp', 'Weather - detail', 'Movies - overview', 'Movies - date', 'News - article', 'Steam - players'];

export default function Widget(props) {
  const [widgets, setwidgets] = useState([]);

  const [nbrW, setnbrW] = useState(0);
  const [nbrW2, setnbrW2] = useState(0);
  const [nbrF, setnbrF] = useState(0);
  const [nbrF2, setnbrF2] = useState(0);
  const [nbrN, setnbrN] = useState(0);
  const [nbrS, setnbrS] = useState(0);

  const hub = (widget) => {
    if (widget === 'Weather') {
      return <Weather nbr={true}/>
    }
    if (widget === 'Weather2' ) {
      return <Weather2 nbr={true}/>
    }
    if (widget === 'News') {
      return  <News nbr={true}/>
    }
    if (widget === 'Steam') {
      return <Steam nbr={true}/>
    }
    if (widget === 'Movies') {
      return <Movies nbr={true}/>
    }
    if (widget === 'Movies2' ) {
      return <Movies2 nbr={true}/>
    }

    if (widget === 'Weather-') {
      return <Weather nbr={false}/>
    }
    if (widget === 'Weather2-' ) {
      return <Weather2 nbr={false}/>
    }
    if (widget === 'News-') {
      return  <News nbr={false}/>
    }
    if (widget === 'Steam-') {
      return <Steam nbr={false}/>
    }
    if (widget === 'Movies-') {
      return <Movies nbr={false}/>
    }
    if (widget === 'Movies2-' ) {
      return <Movies2 nbr={false}/>
    }
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    if (props.log === true) {
      if (options[selectedIndex] === "Weather - temp" && nbrW === 0) {
        setnbrW(nbrW + 1)
        setwidgets([...widgets, 'Weather'])
      }
      if (options[selectedIndex] === "Weather - detail" && nbrW2 === 0) {
        setnbrW2(nbrW2 + 1)
        setwidgets([...widgets, 'Weather2'])
      }
      if (options[selectedIndex] === "News - article" && nbrN === 0) {
        setnbrN(nbrN + 1)
        setwidgets([...widgets, 'News'])
      }
      if (options[selectedIndex] === "Steam - players" && nbrS === 0) {
        setnbrS(nbrS + 1)
        setwidgets([...widgets, 'Steam'])
      }
      if (options[selectedIndex] === "Movies - overview" && nbrF === 0) {
        setnbrF(nbrF + 1)
        setwidgets([...widgets, 'Movies'])
      }
      if (options[selectedIndex] === "Movies - date" && nbrF2 === 0) {
        setnbrF2(nbrF2 + 1)
        setwidgets([...widgets, 'Movies2'])
      }

      if (options[selectedIndex] === "Weather - temp" && nbrW === 1) {
        setnbrW(nbrW + 1)
        setwidgets([...widgets, 'Weather-'])
      }
      if (options[selectedIndex] === "Weather - detail" && nbrW2 === 1) {
        setnbrW2(nbrW2 + 1)
        setwidgets([...widgets, 'Weather2-'])
      }
      if (options[selectedIndex] === "News - article" && nbrN === 1) {
        setnbrN(nbrN + 1)
        setwidgets([...widgets, 'News-'])
      }
      if (options[selectedIndex] === "Steam - players" && nbrS === 1) {
        setnbrS(nbrS + 1)
        setwidgets([...widgets, 'Steam-'])
      }
      if (options[selectedIndex] === "Movies - overview" && nbrF === 1) {
        setnbrF(nbrF + 1)
        setwidgets([...widgets, 'Movies-'])
      }
      if (options[selectedIndex] === "Movies - date" && nbrF2 === 1) {
        setnbrF2(nbrF2 + 1)
        setwidgets([...widgets, 'Movies2-'])
      }
    }
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      {
        <p className="log">Connected : {props.log.toString()} {props.username}</p>
      }
      <center><ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon/>
        </Button>
      </ButtonGroup></center>
      <br/><br/>
      <div className="home">
        <ol>
          {widgets.map((widget) => (
            <li key={widget}>{hub(widget)}</li>
          ))}
        </ol>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}

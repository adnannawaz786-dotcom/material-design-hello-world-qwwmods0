import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';

export default function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200"
      sx={{
        backgroundColor: 'var(--md-sys-color-surface)',
        color: 'var(--md-sys-color-on-surface)'
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Info" icon={<InfoIcon />} />
      <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
    </BottomNavigation>
  );
}
